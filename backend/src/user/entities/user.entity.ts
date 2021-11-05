import { Field, ObjectType, Int } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int, { description: 'primary key - autogenerated' })
  id: number;

  @Column()
  @Field({ nullable: true })
  username?: string;

  @Column()
  @Field({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  money?: number;

  @BeforeInsert() async hashPassword?(): Promise<void> {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
