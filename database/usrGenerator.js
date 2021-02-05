const faker = require("faker");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const randomBoolean = Math.random() < 0.5;
const randomInt = Math.floor((Math.random() * 1000) / 100);

const users = (startIndex, endIndex) => {
  let usersArray = [];
  for (let i = startIndex; i <= endIndex; i++) {
    let entry = {
      users_id: i,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      hashed_password: faker.internet.password(),
      ip: faker.internet.ip(),
    };
    usersArray.push(entry);
  }
  return usersArray;
};
const csvWriter = createCsvWriter({
  path: "/Users/helloFriend/Desktop/C0DE/photoGallery/database/CSV/user.csv",
  header: [
    { id: "users_id", title: "users_id" },
    { id: "username", title: "username" },
    { id: "email", title: "email" },
    { id: "hashed_password", title: "hashed_password" },
    { id: "ip", title: "ip" },
  ],
});

async function writeUsers(num) {
  const chunkNum = Math.floor(num / 100);
  console.log("Chunk count: ", chunkNum);

  for (let i = 0; i < 100; ++i) {
    console.log(`Working on chunk : ${i + 1}`);
    const userDump = users(chunkNum * i, chunkNum * (i + 1) - 1);
    await csvWriter.writeRecords(userDump);
  }
}

writeUsers(1000000);
