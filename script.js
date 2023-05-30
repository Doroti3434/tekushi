const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database: ', error);
  } else {
    console.log('Connected to database!');
  }
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error retrieving data from database: ', error);
    } else {
      res.send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
