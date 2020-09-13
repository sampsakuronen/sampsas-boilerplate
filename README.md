# Sampsa's boilerplate

![Test](https://github.com/sampsakuronen/sampsas-boilerplate/workflows/Test/badge.svg) [![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

This is my boilerplate for a modern backend project. It's the basis for my hobby projects.

Pick your own frontend poison.

- TypeScript
- node, express (w/ bodyparser, helmet, compression)
- Linting and formatting: [gts](https://github.com/google/gts)
- Runtime typechecks and endpoint validations: [io-ts](https://github.com/gcanti/io-ts), [typera](https://github.com/akheron/typera)
- jest, supertest
- postgres, postgres-migrations
- Github Actions

## Prerequisites

- Install `n` for node version management (https://github.com/tj/n).
- Configure your IDE to format on save.
- Fill in `.env` based on `.env_example`
- Install `postgres` and create a database with a name you defined in `.env`

## Developing

    n auto
    npm run watch | npm start

### Migrations

1. Decide how you want to do sequential numbering: 1...x or using a timestamp
2. Create a new `.sql` in `migrations/sql`
3. `npm run migrate` (also runs as part of `npm start`)

## Production

- Migrations are run upon `npm start`. This is probably too opinionated for you.
- Depending on your environment the development dependencies might not be installed and thus not available for `npm run compile`

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
