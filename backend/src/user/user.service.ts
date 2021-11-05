import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * Creates a salt with bcrypt to hash. Should be compared using
   * bcrypt.compare(password, hash) => this is without generating new salt
   *
   * Moved the genSalt hashing to user entity using @BeforeInsert instead
   * @param password plaintext password is dangerous
   * @returns salty password
   */
  async create(createUserInput: CreateUserInput): Promise<User> {
    // Hash user password since we don't really need to store that
    const createdUser = this.userRepository.create(createUserInput);
    return this.userRepository.save(createdUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ username: username });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email: email });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.userRepository.update(id, updateUserInput);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
