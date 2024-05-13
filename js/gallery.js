import { renderMiniatures, containerElement } from './miniatures.js';
import { openBigPicture } from './big-picture.js';

const renderGallery = (pictures) => {
  containerElement.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    const picture = pictures.find((item) => item.id === +thumbnail.dataset.thumbnailId);
    openBigPicture(picture);
  });

  renderMiniatures(pictures, containerElement);
};

export { renderGallery };
