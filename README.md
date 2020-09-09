# Sampsa's boilerplate

![Test](https://github.com/sampsakuronen/sampsas-boilerplate/workflows/Test/badge.svg) [![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

This is my boilerplate for a modern backend project. It's the basis for my hobby projects.

Pick your own frontend poison.

- TypeScript
- [gts](https://github.com/google/gts) (eslint & prettier)
- node, express, [io-ts](https://github.com/gcanti/io-ts), [typera](https://github.com/akheron/typera)
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

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
