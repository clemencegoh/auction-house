import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAuctionItemInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;
}
