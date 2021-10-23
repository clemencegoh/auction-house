import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
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
}
