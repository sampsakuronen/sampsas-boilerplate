import * as pg from 'pg';
import {migrate} from 'postgres-migrations';

import environment from '../src/environment';

async function run() {
  console.debug('Starting to run database migrations');

  const client = new pg.Client({
    connectionString: environment.database.url,
    ssl: environment.isSSL ? false : {rejectUnauthorized: false},
  });

  await client.connect();

  try {
    await migrate({client}, 'migrations/sql/');
  } catch (error) {
    console.error(`Migration failed ${error}`);
  }

  await client.end();
}

run();
