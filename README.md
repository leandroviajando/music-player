# Music Player

Search for and preview any track, collection or artist available on iTunes.

## Requirements

Docker, and / or npm

## Instructions

See `Makefile`, or use `npm` commands as defined in `package.json`.

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
