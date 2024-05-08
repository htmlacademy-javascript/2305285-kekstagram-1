import './form.js';
import './scale.js';
import './filters.js';
import { getData } from './api.js';
import { renderGallery } from './gallery.js';
import { showImgFilters, sortPhotosByComments, getDefaultPhotos, sortPhotosByRandom, getRandomPhotos, getDiscussedPhotos } from './sort.js';

const COMMENTS_SIZE = 10;

getData()
  .then((photos) => {
    renderGallery(photos);
    showImgFilters();
    getDefaultPhotos(() => renderGallery(photos));
    getRandomPhotos(() => renderGallery(photos.slice().sort(sortPhotosByRandom).slice(0, COMMENTS_SIZE)));
    getDiscussedPhotos(() => renderGallery(photos.slice().sort(sortPhotosByComments)));
  }).catch((err) => err);

// getData()
//   .then((photos) => {
//     renderGallery(photos);
//     showImgFilters();
//   }).catch((err) => err);
