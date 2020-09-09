import {Pool} from 'pg';

const pool = new Pool();

async function getTime() {
  return pool
    .query('SELECT CURRENT_TIME')
    .then(results => results.rows[0].current_time);
}

export {getTime, pool};
