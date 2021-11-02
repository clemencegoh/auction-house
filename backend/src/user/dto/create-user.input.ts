import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  email?: string;
}
