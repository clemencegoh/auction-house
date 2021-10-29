## Description

Auction house backend service

## How to

- Create module by using `nest g module <name>`
- Create controller by using `nest g controller <name>`
- etc etc.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

# IMPORTANT NOTES

- `ts-morph` not needed for code-first approach => must explictly install it if using schema-first.
- List of validation annotations from class-validation for inputs can be found here https://github.com/typestack/class-validator#validation-decorators
- Wasted my time doing this manually but should have used `nest g resource <resource>` instead to generate boilerplate code.

## Architecture

- Users
- Objects (to be auctioned)
- for purposes of this we'll be using virtual coins for transactions
  - probably makes more sense to do this like Grab/Gacha games.
  - Test area to "make purchases" so that a user can increase his coins.
- Websocket update for auction pages
- Using Graphql for purpose of learning
- Will also be using authentication/authorization
