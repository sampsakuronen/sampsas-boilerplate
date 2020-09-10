import {Pool} from 'pg';

import environment from './environment';

const pool = new Pool({
  connectionString: environment.database.url,
  ssl: environment.isSSL ? false : {rejectUnauthorized: false},
});

async function getTime() {
  return pool
    .query('SELECT CURRENT_TIME')
    .then(results => results.rows[0].current_time);
}

export {getTime, pool};
