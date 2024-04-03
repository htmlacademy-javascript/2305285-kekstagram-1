import './data.js';
import { generatePhotos, createPhoto } from './data.js';
import { renderGallery } from './gallery.js';

const photos = generatePhotos();

// console.log(createPhoto(photos).comments);

renderGallery(photos);
