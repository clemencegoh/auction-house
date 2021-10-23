import { Field, ObjectType, Int } from "@nestjs/graphql";


@ObjectType()
export class User {
  @Field(type => Int)
  id: Number;

  @Field({nullable: true})
  firstName?: String;
  
  @Field({nullable: true})
  lastName?: String;
  
  @Field({nullable: true})
  email?: String;
  
  @Field({nullable: true})
  money?: Number;

  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  }
}