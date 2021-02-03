const faker = require('faker');
const { Gallery, connection } = require('./index.js');

const seed = [];

const getGalleries = () => {
  const galleries = [];
  const randomAlbum = Math.floor(Math.random() * (3 - 0) + 0);
  const lengths = [51, 15, 41];
  for (let i = 0; i < lengths[randomAlbum]; i += 1) {
    galleries.push({
      _id: i + 1,
      photoName: faker.random.words(),
      photoUrl: `https://fec-photogallery-storage.s3-us-west-1.amazonaws.com/${randomAlbum + 1}/${i}.webp`,
      photoDescription: faker.lorem.paragraph(),
      isVerified: faker.random.boolean(),
      hasDescription: faker.random.boolean(),
    });
  }
  return galleries;
};

const getSampleData = () => {
  for (let i = 0; i < 100; i += 1) {
    const gallerymodel = {
      _id: i + 1,
      title: faker.lorem.sentence(),
      reviews: Math.floor(Math.random() * (50 - 10) + 10),
      rating: Math.random() * (5.0 - 4.0) + 4,
      isSuperhost: faker.random.boolean(),
      location: {
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
      },
      gallery: getGalleries(),
    };
    seed.push(gallerymodel);
  }
};
getSampleData();

Gallery.insertMany(seed, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    connection.close();
  }
});
