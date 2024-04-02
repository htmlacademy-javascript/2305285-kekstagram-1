import './data.js';
import { generatePhotos } from './data.js';
import { renderGallery } from './gallery.js';

const photos = generatePhotos();

renderGallery(photos);
