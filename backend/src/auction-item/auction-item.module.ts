import { Module } from '@nestjs/common';
import { AuctionItemService } from './auction-item.service';
import { AuctionItemResolver } from './auction-item.resolver';

@Module({
  providers: [AuctionItemService, AuctionItemResolver]
})
export class AuctionItemModule {}
