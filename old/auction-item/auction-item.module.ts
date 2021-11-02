import { Module } from '@nestjs/common';
import { AuctionItemService } from './auction-item.service';
import { AuctionItemResolver } from './auction-item.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionItem } from './auction-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuctionItem])],
  providers: [AuctionItemService, AuctionItemResolver],
})
export class AuctionItemModule {}
