DROP DATABASE IF EXISTS photogallery;
CREATE DATABASE photogallery;

\c photogallery

CREATE TABLE IF NOT EXISTS gallery
(
  listing_id SERIAL PRIMARY KEY,
  isSuperhost Boolean NOT NULL,
  reviews BOOLEAN NOT NULL,
  rating INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS users
(
  users_id  SERIAL PRIMARY KEY,
  username VARCHAR(35) NOT NULL,
  email VARCHAR(50) NOT NULL,
  hashed_password VARCHAR(100) NOT NULL,
  ip VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS photos
(
  photo_id  SERIAL PRIMARY KEY ,
  users_id INTEGER NOT NULL REFERENCES users(users_id),
  photo_url VARCHAR(125) NOT NULL,
  upload_date VARCHAR(255) NOT NULL,
  caption VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS homes
(
  home_id  SERIAL PRIMARY KEY,
  city VARCHAR(135) NOT NULL,
  usState VARCHAR(125) NOT NULL,
  country VARCHAR(25) NOT NULL,
  rating INT NOT NULL,
  superhost BOOLEAN NOT NULL,
  photo_id INTEGER NOT NULL REFERENCES photos(photo_id)
);

COPY gallery FROM '../generated/postgres/gallery/gallery.csv' WITH CSV HEADER DELIMITER ',';
COPY users FROM '../generated/postgres/users/users.csv' WITH CSV HEADER DELIMITER ',';
COPY photos FROM '../generated/postgres/photos/photos.csv' WITH CSV HEADER DELIMITER ',';
COPY homes FROM '../generated/postgres/homes/homes.csv' WITH CSV HEADER DELIMITER ',';

CREATE INDEX idx_users_id on users(users_id);
CREATE INDEX idx_homes_id on homes(home_id);