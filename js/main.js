import './data.js';
import { generatePhotos } from './data.js';
import { renderGallery } from './gallery.js';

const photos = generatePhotos();

// renderMiniatures(photos);

renderGallery(photos);
