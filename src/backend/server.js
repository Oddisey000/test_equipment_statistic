const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3200;

const config = {
  /*user: process.env.DB_USER || 'statistic_user',
  password: process.env.DB_PASSWORD || 'stat_usr_007',
  server: process.env.DB_SERVER || "WSUA5178\\SQLEXPRESS",
  database: process.env.DB_DATABASE || 'testDB',*/

  user: process.env.DB_USER || 'statistic_user',
  password: process.env.DB_PASSWORD || 'stat_usr_007',
  server: process.env.DB_SERVER || "WSUA5178\\SQLEXPRESS",
  database: process.env.DB_DATABASE || 'testDB',
}

app.use(cors());

app.get('/', (req, res) => {
  const productQuery = `SELECT DISTINCT drawing_number FROM workflow_statistic WHERE drawing_number LIKE '%MBR'`;
  const request = new sql.Request();
  request.query(productQuery, (err, result) => {
     if (err) res.status(500).send(err);
     res.send(result);
  });
});

sql.connect(config, err => {
  if (err) {
     console.log('Failed to open a SQL Database connection.', err.stack);
     process.exit(1);
  }
  app.listen(port, () => {
     console.log(`App is listening at http://localhost:${port}`);
  });
});
