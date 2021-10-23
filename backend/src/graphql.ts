
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    money?: Nullable<number>;
}

export interface IQuery {
    getHello(): string | Promise<string>;
    getUsers(except?: Nullable<number[]>): User[] | Promise<User[]>;
    findAllAuctionItems(): string[] | Promise<string[]>;
}

type Nullable<T> = T | null;
