DROP SCHEMA IF EXISTS photoGallery CASCADE;
CREATE SCHEMA IF NOT EXISTS photoGallery AUTHORIZATION sdc_user;

CREATE TABLE IF NOT EXISTS gallery (
  listing_id SERIAL PRIMARY KEY,
  isSuperhost Boolean,
  reviews BOOLEAN,
  rating INTEGER
);

CREATE TABLE IF NOT EXISTS homes (
  home_id  SERIAL PRIMARY KEY,
  city VARCHAR(135),
  usState VARCHAR(5),
  country VARCHAR(25),
  rating INT,
  superhost BOOLEAN,
  photos INTEGER
);

CREATE TABLE IF NOT EXISTS photos (
  photo_id  SERIAL PRIMARY KEY,
  usr_id INTEGER,
  photo_url VARCHAR(125),
  upload_date TIMESTAMP,
  caption VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS usr (
  usr_id  SERIAL PRIMARY KEY,
  username VARCHAR(35),
  email VARCHAR(50),
  hashed_password VARCHAR(100),
  ip VARCHAR(30)
);


ALTER TABLE homes ADD FOREIGN KEY (home_id) REFERENCES gallery (listing_id);
ALTER TABLE homes ADD FOREIGN KEY (photos) REFERENCES Photos (photo_id);
ALTER TABLE photos ADD FOREIGN KEY (usr_id) REFERENCES usr (usr_id);

COPY gallery (listing_id, isSuperhost, reviews, rating) FROM '/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/listings.csv' WITH CSV HEADER DELIMITER ',';