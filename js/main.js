import './data.js';
import './form.js';
import './scale.js';
import './filters.js';
import { renderGallery } from './gallery.js';

const bodyElement = document.querySelector('body');

fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderGallery(photos);
  });

export { bodyElement };
