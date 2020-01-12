# Music Player

## Requirements

Docker, and / or npm

## Instructions

- Spin up the container: `docker-compose up [-d --build]`
- Run the test suite in watch mode: `docker-compose exec app npm test`
- Open the app at `localhost:3000` / `0.0.0.0:3000`
- Shut down the container: `docker-compose down`

### CLI

In the absence of Docker, all of the React CLI commands work as well, of course:

- Install dependencies: `npm install`
- Run tests: `npm test`
- Start app: `npm start`

## Development

**Hot reloading** is enabled. Any changes made to the code in the `src` directory are immediately mounted in the running container.

(New) **dependencies** can be installed / updated with `docker-compose exec app npm install`.
