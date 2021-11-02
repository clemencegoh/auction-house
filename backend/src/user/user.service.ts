import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    // Hash user password since we don't really need to store that
    const saltyPass = await this.createSaltyPassword(createUserInput.password);
    const newUser = new User({
      ...createUserInput,
      password: saltyPass,
    });
    const createdUser = this.userRepository.create(newUser);
    return this.userRepository.save(createdUser);
  }

  /**
   * Creates a salt with bcrypt to hash. Should be compared using
   * bcrypt.compare(password, hash) => this is without generating new salt
   * @param password plaintext password is dangerous
   * @returns salty password
   */
  async createSaltyPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.userRepository.update(id, updateUserInput);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
