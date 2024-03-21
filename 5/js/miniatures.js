import { generatePhotos } from './data.js';

const pictures = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const miniaturePhotos = generatePhotos();

miniaturePhotos.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(pictureElement);
});

pictures.appendChild(pictureFragment);
