import './form.js';
import './scale.js';
import './filters.js';
import { getData } from './api.js';
import { renderGallery } from './gallery.js';

const bodyElement = document.querySelector('body');

getData()
  .then((photos) => {
    renderGallery(photos);
  }).catch((err) => err);

export { bodyElement };
