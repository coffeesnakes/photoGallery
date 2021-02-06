const db = require('../../database/index.js');

const getGalleryById = (id, cb) => {
  db.Gallery.find({ _id: id }, (err, docs) => {
    if (err) {
      cb(err);
    } else {
      cb(err, docs);
    }
  });
};

module.exports = {
  getGalleryById,
};
