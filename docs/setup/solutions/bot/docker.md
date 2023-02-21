---
title: Docker
description: Running the bot through DockerD
hide_table_of_contents: false
sidebar_position: 2
---

## Running the bot through [Docker](https://www.docker.com/)

1. Configure `backend/{bot,api}.env`, `dashboard/.env` and `backend/init_db.sh`
2. `docker-compose up mariadb`
3. `docker-compose up -d`
4. `./backend/init_db.sh`

:::note
If the bot and API give an error saying they can't connect to the database even though it is running, run
`docker- compose restart bot api`. Sometimes Docker Compose starts them before the database is running.
:::

## Running the API Services

Follow the steps listed in the [API tutorial](../../../services/api.md)

## Running the dashboard

Follow the steps listed in the [dashboard tutorial](../../../services/dashboard.md)

:::note Notes

- Since we now use shared paths in `tsconfig.json`, the compiled files in `backend/dist/` have longer paths, e.g.
  `backend/dist/backend/src/index.js` instead of `backend/dist/index.js`. This is because the compiled shared files are
  placed in `backend/dist/shared`.
- The `backend/register-tsconfig-paths.js` module takes care of registering shared paths from `tsconfig.json` for `ava`
  and compiled `.js` files
- To run the tests for the files in the `shared/` directory, you also need to run `npm ci` there.
  :::

---

:::note
If the [repository](https://github.com/Benricheson101/ZeppelinBot) is outdated, fork it and run
`git pull https://github.com/Dragory/ZeppelinBot.git`. You should then resolve-merge conflicts (if any). Clone your fork
and proceed.
:::
