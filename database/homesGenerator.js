const faker = require("faker");
const path = require('path');
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const randomBoolean = () => Math.random() < 0.5;
const randomInt = () => Math.floor((Math.random() * 1000) / 100);

const home = (startIndex, endIndex) => {
  let homes = [];
  for (let i = startIndex; i <= endIndex; ++i) {
    let entry = {
      home_id: i,
      city: faker.address.city(),
      usState: faker.address.stateAbbr(),
      country: faker.address.countryCode(),
      rating: randomInt(),
      superhost: randomBoolean(),
      photo_id: Math.floor(Math.random() * 9999),
    };
    homes.push(entry);
  }
  return homes;
};

const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'generated', 'postgres', 'homes', 'homes.csv'),
  header: [
    { id: "home_id", title: "home_id" },
    { id: "city", title: "city" },
    { id: "usState", title: "usState" },
    { id: "country", title: "country" },
    { id: "rating", title: "rating" },
    { id: "superhost", title: "superhost" },
    { id: "photo_id", title: "photo_id" },
  ],
});

async function writeHomes(num) {
  const currentChunk = Math.floor(num / 100);
  console.log("chunk count", currentChunk);

  for (let i = 0; i < 100; ++i) {
    console.log(`Processing home chunk : ${i + 1}`);
    const homeDump = home(currentChunk * i, currentChunk * (i + 1) - 1);
    await csvWriter.writeRecords(homeDump);
  }
}

writeHomes(5000000);
