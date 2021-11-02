import { Test, TestingModule } from '@nestjs/testing';
import { AuctionItemResolver } from './auction-item.resolver';

describe('AuctionItemResolver', () => {
  let resolver: AuctionItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuctionItemResolver],
    }).compile();

    resolver = module.get<AuctionItemResolver>(AuctionItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
