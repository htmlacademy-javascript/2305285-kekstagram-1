import { imgPreviewElement } from './effects.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const chooseFileElement = document.querySelector('#upload-file');

chooseFileElement.addEventListener('change', () => {
  const file = chooseFileElement.files[0];
  const fileName = file.name.toLowerCase();

  const acceptableExtension = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (acceptableExtension) {
    imgPreviewElement.src = URL.createObjectURL(file);
  }
});
