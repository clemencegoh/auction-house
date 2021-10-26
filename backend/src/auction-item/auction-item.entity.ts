import { Field, ObjectType, Int } from "@nestjs/graphql";
import { User } from "src/user/user.entity";

@ObjectType()
export class AuctionItem {
  @Field(type => Int)
  id: Number;

  @Field()
  name: String;

  @Field()
  description: String;

  @Field()
  price: Number;

  @Field({nullable: true})
  currentBid?: Number;

  @Field({nullable: true})
  highestBidder?: User;

  public constructor(init?:Partial<AuctionItem>) {
    Object.assign(this, init);
  }
}