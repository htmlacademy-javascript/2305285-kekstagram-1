import { renderMiniatures, containerElement } from './miniatures.js';
import { debounce } from './util.js';

const COMMENTS_SIZE = 10;

const debouncedRenderMiniatures = debounce(renderMiniatures);

const imgFiltersContainer = document.querySelector('.img-filters');

let currentPhotos = [];

const showImgFilters = () => {
  imgFiltersContainer.classList.remove('img-filters--inactive');
};

const sortPhotosByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const sortPhotosByRandom = () => Math.random() - 0.5;

const getFilteredPhotos = (currentFilter) => {
  switch (currentFilter) {
    case 'filter-random':
      return [...currentPhotos].sort(sortPhotosByRandom).slice(0, COMMENTS_SIZE);
    case 'filter-discussed':
      return [...currentPhotos].sort(sortPhotosByComments);
    default:
      return [...currentPhotos];
  }
};

const initFilters = (photos) => {
  showImgFilters();
  currentPhotos = photos;
  imgFiltersContainer.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }
    const clickedButton = evt.target;
    imgFiltersContainer.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    const sortedPhotos = getFilteredPhotos(clickedButton.id);
    debouncedRenderMiniatures(sortedPhotos, containerElement);
  });
};

export { initFilters };
