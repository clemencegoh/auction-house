import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {

  mockDB: User[] = (() => {
    const userArr: User[] = [];
    for (let i = 0; i < 4; i++) {
      userArr.push(new User({
        id: i,
        firstName: `someboby ${i}`,
        email: `someEmail${i}@gmail.com`,
      }));
    }
    return userArr;
  })();

  constructor(){}

  async findAll(ids?: Number[]): Promise<User[]> {
    if (!ids) return this.mockDB;
    return this.mockDB.filter(item => !ids.includes(item.id));
  }

  async getRandomChoice(arr: any[]): Promise<any> {
    const max_len = arr.length;
    /**
     * This does [0, len_arr) since we're doing floor here
     */
    const rand_pos = Math.floor(Math.random()*(max_len - 0) + 0);
    return arr[rand_pos];
  }
}
