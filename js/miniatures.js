const containerElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnail = ({ url, description, likes, comments, id }) => {

  const thumbnail = pictureTemplate.cloneNode(true);
  const imageElement = thumbnail.querySelector('.picture__img');
  imageElement.src = url;
  imageElement.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const renderMiniatures = (photos, container) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const thumbnail = renderThumbnail(photo);
    fragment.appendChild(thumbnail);
  });

  container.appendChild(fragment);
};

export { renderMiniatures, containerElement };
