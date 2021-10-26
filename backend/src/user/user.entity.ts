import { Field, ObjectType, Int } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: Number;

  @Column({nullable: true})
  @Field({nullable: true})
  firstName?: String;
  
  @Column({nullable: true})
  @Field({nullable: true})
  lastName?: String;
  
  @Column({nullable: true})
  @Field({nullable: true})
  email?: String;
  
  @Column({nullable: true})
  @Field({nullable: true})
  money?: Number;

  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  }
}