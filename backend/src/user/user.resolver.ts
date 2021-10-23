import { Args, Query, Resolver } from '@nestjs/graphql';
import { of } from 'node_modules/rxjs/dist/types';
import { User } from './user.entity';
import { UserService } from './user.service';

/**
 * This takes the place of a Controller in a conventional REST API
 */
@Resolver(of => User)
export class UserResolver {

  constructor(
    private userService: UserService
  ) {}

  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }

  @Query(returns => [User])
  async getUsers(
    @Args('except', { 
      type: () => [Number], 
      nullable: true, 
      description: 'exclude these ids', 
    }) ids?: Number[],
  ): Promise<User[]> {
    return this.userService.findAll(ids);
  }

  // @Query()
  // getRandomOf(): Promise<any> {
  //   return this.userService.getRandomChoice()
  // }
}
