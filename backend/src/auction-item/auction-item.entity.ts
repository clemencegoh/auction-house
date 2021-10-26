import { Field, ObjectType, Int } from "@nestjs/graphql";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class AuctionItem {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: Number;

  @Column()
  @Field()
  name: String;

  @Column()
  @Field()
  description: String;

  @Column()
  @Field()
  price: Number;

  @Column({nullable: true})
  @Field({nullable: true})
  currentBid?: Number;

  @OneToOne(type => User) @JoinColumn()
  @Field({nullable: true})
  highestBidder?: User;

  public constructor(init?:Partial<AuctionItem>) {
    Object.assign(this, init);
  }
}