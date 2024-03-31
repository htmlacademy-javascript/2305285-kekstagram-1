import './data.js';
import { generatePhotos } from './data.js';
import { renderMiniatures } from './miniatures.js';
// import { createComments } from './data.js';

import { renderBigPicture } from './big-picture.js';

const photos = generatePhotos();

// const comments = createComments();

renderMiniatures(photos);

// renderBigPicture(renderMiniatures(photos));
renderMiniatures(renderBigPicture(photos));

// export { big };
