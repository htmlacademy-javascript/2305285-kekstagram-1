// import { containerElement } from './miniatures.js';

const imgFiltersContainer = document.querySelector('.img-filters');
const filterDefaultButton = document.querySelector('#filter-default');
const filterRandomButton = document.querySelector('#filter-random');
const filterDiscussedButton = document.querySelector('#filter-discussed');

// const containerElement = document.querySelector('.pictures');
// const pictureElement = document.querySelector('.picture');

// let picturesContainer = [];


const showImgFilters = () => {
  imgFiltersContainer.classList.remove('img-filters--inactive');
};

const sortPhotosByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const sortPhotosByRandom = () => Math.random() - 0.5;

const getDefaultPhotos = (cb) => {

  filterDefaultButton.addEventListener('click', () => {
    // containerElement.removeChild();
    filterRandomButton.classList.toggle('img-filters__button--active');
    cb();
  });
};

const getRandomPhotos = (cb) => {

  filterRandomButton.addEventListener('click', () => {
    // containerElement.innerHTML = '';
    filterRandomButton.classList.toggle('img-filters__button--active');
    cb();
  });
};

const getDiscussedPhotos = (cb) => {

  filterDiscussedButton.addEventListener('click', () => {
    // containerElement.innerHTML = '';
    filterDiscussedButton.classList.toggle('img-filters__button--active');
    cb();
  });
};

export { showImgFilters, sortPhotosByComments, sortPhotosByRandom, getDefaultPhotos, getRandomPhotos, getDiscussedPhotos };
