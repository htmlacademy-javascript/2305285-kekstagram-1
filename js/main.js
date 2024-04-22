import './data.js';
import './form.js';
import './scale.js';
import { generatePhotos} from './data.js';
import { renderGallery } from './gallery.js';

const bodyElement = document.querySelector('body');

const photos = generatePhotos();

renderGallery(photos);

export { bodyElement };
