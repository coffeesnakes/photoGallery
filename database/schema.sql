DROP SCHEMA IF EXISTS photoGallery CASCADE;
CREATE SCHEMA IF NOT EXISTS photoGallery AUTHORIZATION sdc_user;

CREATE TABLE IF NOT EXISTS gallery (
  id SERIAL PRIMARY KEY,
  isSuperhost Boolean,
  reviews BOOLEAN,
  rating INTEGER
);

CREATE TABLE IF NOT EXISTS homes (
  home_id  SERIAL PRIMARY KEY,
  city VARCHAR(135),
  usState VARCHAR(100),
  country VARCHAR(100),
  rating INT,
  superhost BOOLEAN,
  photos INTEGER
);

CREATE TABLE IF NOT EXISTS photos (
  photo_id  SERIAL PRIMARY KEY,
  usr_id INTEGER,
  photo_url VARCHAR(225),
  upload_date TIMESTAMP,
  caption VARCHAR(1000)
);

CREATE TABLE IF NOT EXISTS usr (
  usr_id  SERIAL PRIMARY KEY,
  username VARCHAR(35),
  email VARCHAR(50),
  hashed_password VARCHAR(200),
  ip VARCHAR(30)
);


ALTER TABLE homes ADD FOREIGN KEY (home_id) REFERENCES gallery (id);
ALTER TABLE homes ADD FOREIGN KEY (photos) REFERENCES Photos (photo_id);
