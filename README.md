# Music Player

Search for and preview any track, collection or artist available on iTunes.

## Requirements

Docker, and / or npm

## Instructions

- Spin up the container: `docker-compose up -d [--build]`
- Run the test suite in watch mode: `docker-compose exec app npm test`
- (Open the container shell: `docker-compose exec app sh`)
- Open the app at `0.0.0.0:3000` / `localhost:3000`
- Shut down the container: `docker-compose down`

### CLI

In the absence of Docker, all of the React CLI commands work as well, of course:

- Install dependencies: `npm install`
- Run tests: `npm test`
- Start app: `npm start`
- Open the app at `localhost:3000`

## Development

**Hot reloading** is enabled. Any changes made to the code in the `src` directory and `package.json` are immediately mounted in the running container.

(New) **dependencies** can be installed / updated with `docker-compose exec app npm install`.

In the case of any **CORS** issues if running the app in `localhost`, use your browser's `Allow CORS: Access-Control-Allow-Origin` extension.

## Features

### Search

- Search for songs, collections and artists
- Sort by song length, genre and price

### Preview

- Preview any title
- Play and pause
- Go back to Search, or to the previous or next title
- Share on Facebook (needs to be deployed with a domain to work properly; set to Google atm - see `APP_BASE_URL` in `config.ts`)

## Technologies

React - Redux - TypeScript - Docker
