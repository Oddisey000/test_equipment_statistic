const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3200;

const config = {
  user: process.env.DB_USER || 'statistic_user',
  password: process.env.DB_PASSWORD || 'stat_usr_007',
  server: process.env.DB_SERVER || "WSUA5178\\SQLEXPRESS",
  database: process.env.DB_DATABASE || 'testDB'

  /*user: process.env.DB_USER || 'test',
  password: process.env.DB_PASSWORD || '1111',
  server: process.env.DB_SERVER || "DESKTOP-SLJP4R8\\SQLEXPRESS",
  database: process.env.DB_DATABASE || 'testDB',*/
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

app.get('/order', (req, res) => {
  const reqParams = {
    orderID: req.query.order,
    equipmentID: req.query.equipment
  };

  const productQuery = `SELECT DISTINCT system_id FROM workflow_statistic WHERE drawing_number LIKE %${orderID}%`;
  const request = new sql.Request();
  request.query(productQuery, (err, result) => {
     if (err) res.status(500).send(err);
     res.send(result);
  });
});

app.get('/timeline', (req, res) => {
  const reqParams = {
    orderID: req.query.order,
    equipmentID: req.query.equipment,
    startDate: req.query.startdate,
    endDate: req.query.endDate,
  };

  const productQuery = `SELECT DISTINCT drawing_number FROM workflow_statistic WHERE drawing_number LIKE '%MBR'`;
  const request = new sql.Request();
  request.query(productQuery, (err, result) => {
     if (err) res.status(500).send(err);
     res.send(result);
  });
});

app.get('/getequipment', (req, res) => {
  let query = '';
  const reqParams = {
    orderID: req.query.order,
    startDate: req.query.startdate,
    endDate: req.query.endDate,
  };

  if (reqParams.orderID) {
    query = `SELECT DISTINCT system_id FROM workflow_statistic WHERE drawing_number = '${reqParams.orderID}'`;
  }

  const request = new sql.Request();
  request.query(query, (err, result) => {
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
