const path = require('path');
const express = require('express');
const { Pool } = require('pg');

// const galleries = require('../server/routes/galleries.js');

const pool = new Pool({
  user: 'helloFriend',
  database: 'photogallery',
  port: 5432,
});
pool.connect()
  .then(() => console.log('connected to postgreSQL successfully!'));

const app = express();
const port = 3003;

// serve static
app.use(express.static(path.join(__dirname, '/../client/dist')));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.get('/api/homes/:id', (req, res) => {
  const query = 'SELECT * from homes where home_id=$1';
  const values = [req.params.id];
  console.log(query);
  pool
    .query(query, values)
    .then(({ rows }) => {
      res.status(200).send(rows);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.post('/api/homes/:id', (req, res) => {
  const query = 'INSERT INTO homes (home_id, city, usState, country, rating, superhost, photo_id) values ($1, $2, $3, $4, $5, $6, $7) ';
  const { city, usState, country, rating, superhost, photo_id } = req.body;
  const values = [req.params.id, city, usState, country, rating, superhost, photo_id];
  pool
    .query(query, values)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
app.patch('/api/homes/:id', (req, res) => {
  const query = 'UPDATE homes SET rating=$2 WHERE home_id=$1';
  const { rating } = req.body;
  const values = [req.params.id, rating];
  pool
    .query(query, values)
    .then((data) => {
      res.status(204).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.delete('/api/homes/:id', (req, res) => {
  const query = 'DELETE FROM homes WHERE home_id=$1';
  const values = [req.params.id];
  pool
    .query(query, values)
    .then((data) => {
      res.status(204).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => console.log(`listening on port : ${port}`));
