import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuctionItem } from './auction-item.entity';
import { AuctionItemService } from './auction-item.service';
import { CreateAuctionItemInput } from './dto/create-auction-item.input';

@Resolver((of) => AuctionItem)
export class AuctionItemResolver {
  constructor(private auctionItemService: AuctionItemService) {}

  @Query((returns) => [AuctionItem])
  auctionItems(): Promise<AuctionItem[]> {
    return this.auctionItemService.findAll();
  }

  @Query((returns) => AuctionItem)
  getAuctionItem(
    @Args('id', { type: () => Number }) id: number,
  ): Promise<AuctionItem> {
    return this.auctionItemService.findOne(id);
  }

  @Mutation((returns) => AuctionItem)
  createAuctionItem(
    @Args('createAuctionItemInput')
    createAuctionItemInput: CreateAuctionItemInput,
  ): Promise<AuctionItem> {
    return this.auctionItemService.createAuctionItem(createAuctionItemInput);
  }
}
