DROP SCHEMA IF EXISTS photoGallery CASCADE;
CREATE SCHEMA IF NOT EXISTS photoGallery AUTHORIZATION sdc_user;

CREATE TABLE IF NOT EXISTS gallery (
  id SERIAL PRIMARY KEY,
  isSuperhost VARCHAR
  reviews BINARY
  rating INTEGER

)

CREATE TABLE IF NOT EXISTS homes (
  home_id  SERIAL PRIMARY KEY,
  city VARCHAR,
  usState VARCHAR,
  country VARCHAR,
  rating INT,
  superhost BINARY,
  photos INTEGER,

);

CREATE TABLE IF NOT EXISTS photos (
  photo_id  SERIAL PRIMARY KEY,
  user_id INTEGER,
  photo_url VARCHAR,
  upload_date TIMESTAMP,
  caption VARCHAR,

);

CREATE TABLE IF NOT EXISTS users (
  user_id  SERIAL PRIMARY KEY,
  username VARCHAR,
  email VARCHAR,
  hashed_password VARCHAR,
  ip VARCHAR(30),
  PRIMARY KEY (user_id)
);


ALTER TABLE Home ADD FOREIGN KEY (home_id) REFERENCES gallery (id);
ALTER TABLE Home ADD FOREIGN KEY (photos) REFERENCES Photos (photo_id);
ALTER TABLE Photos ADD FOREIGN KEY (user_id) REFERENCES users (user_id);
