import './form.js';
import './scale.js';
import './filters.js';
import { getData } from './api.js';
import { renderGallery } from './gallery.js';

getData()
  .then((photos) => {
    renderGallery(photos);
  }).catch((err) => err);
