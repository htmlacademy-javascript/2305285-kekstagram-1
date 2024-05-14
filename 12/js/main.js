import './form.js';
import './scale.js';
import './effects.js';
import './upload-photo.js';
import { getData } from './api.js';
import { renderGallery } from './gallery.js';
import { initFilters } from './filters.js';

getData()
  .then((photos) => {
    renderGallery(photos);
    initFilters(photos);
  }).catch((err) => err);
