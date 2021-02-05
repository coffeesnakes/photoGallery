const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const randomBoolean = Math.random() < 0.5;
const randomInt = Math.floor((Math.random() * 1000) / 100);

const listing = (startIndex, endIndex) => {
  let listings = [];
  for (let i = startIndex; i <= endIndex; ++i) {
    let entry = {
      listing_id: i,
      isSuperhost: randomBoolean,
      reviews: randomBoolean,
      rating: randomInt,
    };
    listings.push(entry);
  }
  return listings;
};

const csvWriter = createCsvWriter({
  path: "/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/listings.csv",
  header: [
    { id: "listing_id", title: "listing_id" },
    { id: "isSuperhost", title: "isSuperhost" },
    { id: "reviews", title: "reviews" },
    { id: "rating", title: "rating" },
  ],
});

async function writeListings(num) {
  const currentChunk = Math.floor(num / 100);
  console.log("chunk count", currentChunk);

  for (let i = 0; i < 100; ++i) {
    console.log(`Processing chunk : ${i + 1}`);
    const listingDump = listing(currentChunk * i, currentChunk * (i + 1) - 1);
    await csvWriter.writeRecords(listingDump);
  }
}

writeListings(100000000);
