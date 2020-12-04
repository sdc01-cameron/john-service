const pool = require('./queries1.js').pool;

pool.query(`
  COPY testtable
  FROM '/Users/jandy/Work/sdc/john-service/server/exampleWrite.csv'
  DELIMITER '|'
  `, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log('success');
  }
  pool.end;
});

