const express = require('express');
const path = require('path');
const compression = require('compression');
const controllers = require('./controllers/galleryController.js');

const app = express();
const port = 3017;

app.use(compression());

app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.use('/:id/bundle', express.static(path.join(__dirname, '../client/dist/bundle.js')));
app.get('/api/galleries/:id', controllers.getGalleryById);

app.listen(port);
