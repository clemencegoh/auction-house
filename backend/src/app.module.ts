import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuctionItemModule } from './auction-item/auction-item.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/__generated__/schema.gql'),
      typePaths: ['./**/*.graphql'],
      definitions: { 
        path: join(process.cwd(), 'src/__generated__/graphql.ts'), 
      },
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AuctionItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
