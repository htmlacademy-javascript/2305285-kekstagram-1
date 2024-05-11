import { filterDefaultButton } from './main.js';

const imgFiltersContainer = document.querySelector('.img-filters');
const allFilterButtons = document.querySelectorAll('.img-filters__button');
// const filterDefaultButton = document.querySelector('#filter-default');
// const filterRandomButton = document.querySelector('#filter-random');
// const filterDiscussedButton = document.querySelector('#filter-discussed');

const setFilterOnClick = () => {
  filterDefaultButton.classList.remove('img-filters__button--active');
  for (const button of allFilterButtons) {
    button.addEventListener('click', () => {
      allFilterButtons.forEach((i) => i.classList.remove('img-filters__button--active'));
      button.classList.add('img-filters__button--active');
    });
  }
};

const showImgFilters = () => {
  imgFiltersContainer.classList.remove('img-filters--inactive');
};

const sortPhotosByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const sortPhotosByRandom = () => Math.random() - 0.5;

const getCurrentFilterPhotos = (cb, button) => {
  button.addEventListener('click', () => {
    setFilterOnClick();
    cb();
  });
};

// function takeOffSortElement () {
//   document.removeEventListener('click', setFilterOnClick);
// }

// let sortElement;

// function onDocumentClick (evt) {
//   if (sortElement === evt.target) {
//     takeOffSortElement();
//   }
// }

// const getDefaultPhotos = (cb) => {

//   filterDefaultButton.addEventListener('click', () => {
//     // allFilterButtons.classList.remove('img-filters__button--active');
//     // filterDefaultButton.classList.toggle('img-filters__button--active');
//     // for (const button of allFilterButtons) {
//     //   button.addEventListener('click', function () {
//     //     allFilterButtons.forEach((i) => i.classList.remove('img-filters__button--active'));
//     //     this.classList.toggle('img-filters__button--active');
//     //   });
//     // }
//     setFilterOnClick();
//     cb();
//   });
// };

// const getRandomPhotos = (cb) => {

//   filterRandomButton.addEventListener('click', () => {
//     // allFilterButtons.classList.remove('img-filters__button--active');
//     // filterRandomButton.classList.toggle('img-filters__button--active');
//     // for (const button of allFilterButtons) {
//     //   button.addEventListener('click', function () {
//     //     allFilterButtons.forEach((i) => i.classList.remove('img-filters__button--active'));
//     //     this.classList.toggle('img-filters__button--active');
//     //   });
//     // }
//     setFilterOnClick();
//     cb();
//   });
// };

// const getDiscussedPhotos = (cb) => {

//   filterDiscussedButton.addEventListener('click', () => {
//     // allFilterButtons.classList.remove('img-filters__button--active');
//     // filterDiscussedButton.classList.toggle('img-filters__button--active');
//     // for (const button of allFilterButtons) {
//     //   button.addEventListener('click', function () {
//     //     allFilterButtons.forEach((i) => i.classList.remove('img-filters__button--active'));
//     //     this.classList.toggle('img-filters__button--active');
//     //   });
//     // }
//     setFilterOnClick();
//     cb();
//   });
// };

export { showImgFilters, sortPhotosByComments, sortPhotosByRandom, getCurrentFilterPhotos };
