DROP SCHEMA IF EXISTS photoGallery CASCADE;
CREATE SCHEMA IF NOT EXISTS photoGallery;

\c postgres

DROP TABLE IF EXISTS gallery;

CREATE TABLE IF NOT EXISTS gallery (
  listing_id SERIAL PRIMARY KEY,
  isSuperhost Boolean,
  reviews BOOLEAN,
  rating INTEGER
);

DROP TABLE IF EXISTS homes;

CREATE TABLE IF NOT EXISTS homes (
  home_id  SERIAL PRIMARY KEY,
  city VARCHAR(135),
  usState VARCHAR(125),
  country VARCHAR(25),
  rating INT,
  superhost BOOLEAN,
  photo_id INTEGER
);

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  users_id  SERIAL PRIMARY KEY,
  username VARCHAR(35),
  email VARCHAR(50),
  hashed_password VARCHAR(100),
  ip VARCHAR(45)
);

DROP TABLE IF EXISTS photos;

CREATE TABLE IF NOT EXISTS photos (
  photo_id  SERIAL PRIMARY KEY,
  users_id INTEGER,
  photo_url VARCHAR(125),
  upload_date VARCHAR(300),
  caption VARCHAR(255)
);

COPY gallery FROM '/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/listings.csv' WITH CSV HEADER DELIMITER ',';
COPY users FROM '/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/user.csv' WITH CSV HEADER DELIMITER ',';
COPY homes FROM '/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/homes.csv' WITH CSV HEADER DELIMITER ',';
COPY photos FROM '/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/photos.csv' WITH CSV HEADER DELIMITER ',';