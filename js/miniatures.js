const containerElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const renderMiniatures = (photos) => {
  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImageElement = pictureElement.querySelector('.picture__img');
    pictureImageElement.src = url;
    pictureImageElement.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(pictureElement);
    containerElement.appendChild(fragment);
  });
};

export { renderMiniatures };
