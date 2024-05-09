import { renderMiniatures, containerElement } from './miniatures.js';
import { openBigPicture } from './big-picture.js';

let pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }

  const picture = pictures.find((item) => item.id === +thumbnail.dataset.thumbnailId);
  openBigPicture(picture);
};

const renderGallery = (photos) => {
  pictures = photos;
  renderMiniatures(photos, containerElement);
  containerElement.addEventListener('click', onContainerClick);
};

export { renderGallery };
