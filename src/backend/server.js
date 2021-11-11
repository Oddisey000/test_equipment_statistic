const express = require('express');
const sql = require('mssql/msnodesqlv8');

const app = express();
const port = process.env.PORT || 3200;

const config = {
  user: process.env.DB_USER || 'test',
  password: process.env.DB_PASSWORD || '1111',
  server: process.env.DB_SERVER || "DESKTOP-SLJP4R8\\SQLEXPRESS",
  database: process.env.DB_DATABASE || 'testDB',
}

app.get('/', (req, res) => {
  const productQuery = `SELECT * FROM test`;
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