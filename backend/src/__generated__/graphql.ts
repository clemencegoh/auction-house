
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateAuctionItemInput {
    name: string;
    description: string;
    price: number;
}

export interface User {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    money?: Nullable<number>;
}

export interface AuctionItem {
    id: number;
    name: string;
    description: string;
    price: number;
    currentBid?: Nullable<number>;
    highestBidder?: Nullable<User>;
}

export interface IQuery {
    getHello(): string | Promise<string>;
    getUsers(except?: Nullable<number[]>): User[] | Promise<User[]>;
    auctionItems(): AuctionItem[] | Promise<AuctionItem[]>;
}

export interface IMutation {
    createAuctionItem(createAuctionItemInput: CreateAuctionItemInput): AuctionItem | Promise<AuctionItem>;
}

type Nullable<T> = T | null;
