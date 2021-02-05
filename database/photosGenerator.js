const faker = require("faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const randomBoolean = Math.random() < 0.5;
const randomInt = Math.floor((Math.random() * 1000) / 100);

const photo = (startIndex, endIndex) => {
  let photos = [];
  for (let i = startIndex; i <= endIndex; i++) {
    let entry = {
      photo_id: i,
      users_id: Math.floor(Math.random() * 100000),
      photo_url: "https://loremflickr.com/320/240",
      upload_date: faker.date.weekday(),
      caption: faker.lorem.sentence(),
    };
    photos.push(entry);
  }
  return photos;
};

const csvWriter = createCsvWriter({
  path: "/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/photos.csv",
  header: [
    { id: "photo_id", title: "photo_id" },
    { id: "users_id", title: "users_id" },
    { id: "photo_url", title: "photo_url" },
    { id: "upload_date", title: "upload_date" },
    { id: "caption", title: "caption" },
  ],
});

async function writePhotos(num) {
  const chunkNum = Math.floor(num / 100);
  console.log("Chunk count photos: ", chunkNum);

  for (let i = 0; i < 100; ++i) {
    console.log(`Working on chunk photos : ${i + 1}`);
    const photoDump = photo(chunkNum * i, chunkNum * (i + 1) - 1);
    await csvWriter.writeRecords(photoDump);
  }
}

writePhotos(1000000);
