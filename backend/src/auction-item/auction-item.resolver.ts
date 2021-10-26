import { Query, Resolver } from '@nestjs/graphql';
import { AuctionItem } from './auction-item.entity';

@Resolver(of => AuctionItem)
export class AuctionItemResolver {

  constructor(){}

  @Query(returns => [String])
  findAllAuctionItems(): string[] {
    const sample = [
      "jello",
      "world",
    ];
    return sample;
  }

  auction
}
