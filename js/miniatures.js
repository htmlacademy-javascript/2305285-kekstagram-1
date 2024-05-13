const containerElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const getMiniature = ({ url, description, likes, comments, id }) => {

  const miniatureElement = pictureTemplate.cloneNode(true);
  const imageElement = miniatureElement.querySelector('.picture__img');
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniatureElement.querySelector('.picture__comments').textContent = comments.length;
  imageElement.src = url;
  imageElement.alt = description;
  miniatureElement.dataset.thumbnailId = id;

  return miniatureElement;
};

const renderMiniatures = (photos, container) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragmentElement = document.createDocumentFragment();
  photos.forEach((photo) => {
    const miniature = getMiniature(photo);
    fragmentElement.appendChild(miniature);
  });

  container.appendChild(fragmentElement);
};

export { renderMiniatures, containerElement };
