import './form.js';
import './scale.js';
import './effects.js';
import { getData } from './api.js';
import { renderGallery } from './gallery.js';
import { initFilters } from './filters.js';
// import { debounce } from './util.js';

getData()
  .then((photos) => {
    renderGallery(photos);
    // debounce(initFilters(photos));
    initFilters(photos);
    // const debounceRenderGallery = debounce(renderGallery);
  }).catch((err) => err);


// showImgFilters();
// getCurrentFilterPhotos(() => debounceRenderGallery(photos), filterDefaultButton);
// getCurrentFilterPhotos(() => debounceRenderGallery(photos.slice().sort(sortPhotosByRandom).slice(0, COMMENTS_SIZE)), filterRandomButton);
// getCurrentFilterPhotos(() => debounceRenderGallery(photos.slice().sort(sortPhotosByComments)), filterDiscussedButton);


// getData()
//   .then((photos) => {
//     renderGallery(photos);
//     showImgFilters();
//     getDefaultPhotos(() => renderGallery(photos));
//     getRandomPhotos(() => renderGallery(photos.slice().sort(sortPhotosByRandom).slice(0, COMMENTS_SIZE)));
//     getDiscussedPhotos(() => renderGallery(photos.slice().sort(sortPhotosByComments)));
//   }).catch((err) => err);
