# Project Name

> This project is a clone of an Amazon product page's Product Information module. It is one module of four built as a service to render through a proxy server to produce an Amazon Product page.

## Related Projects

  - https://github.com/House-Bezos/joe-service
  - https://github.com/House-Bezos/zains-service
  - https://github.com/House-Bezos/Dylans-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Once MongoDB is started, run

```sh
npm run seed
```

to insert records into the database.

During development, run the following commands in two separate terminals:

```sh
npm start
```
```sh
npm run build
```

For production:

```sh
npm run production
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## Start mongodb locally

If you do not have MongoDB, go to [mongodb](https://docs.mongodb.com/manual/administration/install-community/) for installation first.

If installed on Mac with homebrew:

```sh
brew services start mongodb-community
```

or follow the instructions on the website for starting MongoDB.

