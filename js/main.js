import './form.js';
import './scale.js';
import './filters.js';
import { getData } from './api.js';
import { renderGallery } from './gallery.js';
import { showImgFilters, sortPhotosByComments, sortPhotosByRandom, getCurrentFilterPhotos } from './sort.js';
import { debounce } from './util.js';

const COMMENTS_SIZE = 10;

const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');

getData()
  .then((photos) => {
    renderGallery(photos);
    const debounceRenderGallery = debounce(renderGallery);
    showImgFilters();
    getCurrentFilterPhotos(() => debounceRenderGallery(photos), filterDefaultButton);
    getCurrentFilterPhotos(() => debounceRenderGallery(photos.slice().sort(sortPhotosByRandom).slice(0, COMMENTS_SIZE)), filterRandomButton);
    getCurrentFilterPhotos(() => debounceRenderGallery(photos.slice().sort(sortPhotosByComments)), filterDiscussedButton);
  }).catch((err) => err);

export { filterDefaultButton };


// getData()
//   .then((photos) => {
//     renderGallery(photos);
//     showImgFilters();
//     getDefaultPhotos(() => renderGallery(photos));
//     getRandomPhotos(() => renderGallery(photos.slice().sort(sortPhotosByRandom).slice(0, COMMENTS_SIZE)));
//     getDiscussedPhotos(() => renderGallery(photos.slice().sort(sortPhotosByComments)));
//   }).catch((err) => err);
