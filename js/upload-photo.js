import { imgPreviewElement } from './effects.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const chooseFileElement = document.querySelector('#upload-file');
const effectPreviewElement = document.querySelectorAll('.effects__preview');

chooseFileElement.addEventListener('change', () => {
  const file = chooseFileElement.files[0];
  const fileName = file.name.toLowerCase();

  const acceptableExtension = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (acceptableExtension) {
    imgPreviewElement.src = URL.createObjectURL(file);
    effectPreviewElement.forEach((photo) => {
      photo.style.backgroundImage = `url(${imgPreviewElement.src})`;
    });
  }
});
