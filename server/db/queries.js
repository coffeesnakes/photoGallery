// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "helloFriend",
//   database: "photogallery",
//   port: 3005,
// });

// // get all homes for a country

// const getAllPhotosForHome = (req, res) => {
//   const query = 'SELECT * FROM homes WHERE photo_id=$1';
//   const values = [req.params.id];
//   pool
//     .query(query, values)
//     .then((data) => {
//       res.status(201).send(data);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// };

// const addHome = (req, res) => {
//   const query = 'INSERT INTO homes'
// }

// module.exports.getAllPhotosForHome = getAllPhotosForHome;
// module.exports.addHome = addHome;
