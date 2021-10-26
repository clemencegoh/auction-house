import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuctionItem } from './auction-item.entity';
import { CreateAuctionItemInput } from './dto/create-auction-item.input';

@Injectable()
export class AuctionItemService {
  constructor(
    @InjectRepository(AuctionItem) 
    private auctionItemRepository: Repository<AuctionItem>,
  ){}

  async findAll(): Promise<AuctionItem[]> {
    return this.auctionItemRepository.find();
  }

  async createAuctionItem(createAuctionItemInput: CreateAuctionItemInput): Promise<AuctionItem> {
    const auctionItem = this.auctionItemRepository.create(createAuctionItemInput);
    return this.auctionItemRepository.save(auctionItem);
  }
  
}
