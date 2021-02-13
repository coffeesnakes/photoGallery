// require("newrelic");
const path = require('path');
const express = require('express');

const pg = require('pg');

const pool = new pg.Pool();

pool.connect('postgres://postgres:banana@localhost:5432/gallery')
  .then(() => console.log('connected to postgreSQL successfully!'));

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/api/galleries/:id', (req, res) => {
  const query = 'SELECT * from gallery where listing_id=$1';
  const values = [req.params.id];
  pool
    .query(query, values)
    .then(({ rows }) => {
      res.status(200).send(rows);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.post('/api/galleries/:id', (req, res) => {
  const query = 'INSERT INTO gallery (listing_id, isSuperhost, reviews, rating) values ($1, $2, $3, $4) ';
  const { isSuperhost, reviews, rating } = req.body;
  const values = [req.params.id, isSuperhost, reviews, rating];
  pool
    .query(query, values)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.delete('/api/galleries/:id', (req, res) => {
  const query = 'DELETE FROM gallery WHERE listing_id=$1';
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

app.patch('/api/galleries/:id', (req, res) => {
  const query = 'UPDATE gallery SET isSuperhost=$2 WHERE listing_id=$1';
  const { isSuperhost } = req.body;
  const values = [req.params.id, isSuperhost];
  pool
    .query(query, values)
    .then((data) => {
      res.status(204).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

// users routes
app.get('/api/users/:id', (req, res) => {
  const query = 'SELECT * from users where users_id=$1';
  const values = [req.params.id];
  pool
    .query(query, values)
    .then(({ rows }) => {
      res.status(200).send(rows);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.post('/api/users/:id', (req, res) => {
  const query = 'INSERT INTO users (users_id, username, email, hashed_password, ip) values ($1, $2, $3, $4, $5)';
  const { isSuperhost, reviews, rating } = req.body;
  const values = [req.params.id, username, email, hashed_password, ip];
  pool
    .query(query, values)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.delete('/api/users/:id', (req, res) => {
  const query = 'DELETE FROM users WHERE users_id=$1';
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
