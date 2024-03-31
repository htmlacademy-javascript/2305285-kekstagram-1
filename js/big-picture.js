// import { miniatures } from './main.js';
// import { renderMiniatures } from './miniatures.js';
// import { createComments } from './data.js';


const renderBigPicture = (picture) => {


  // picture = miniatures();

  picture.forEach(({ url, description, likes, comments }) => {
    // const imageBigElement = document.querySelector('.big-picture__img').closest('img');
    // imageBigElement.src = url;


    document.querySelector('.likes-count').textContent = likes;
    document.querySelector('.comments-count').textContent = comments.length;
    document.querySelector('.social__caption').textContent = description;
  });

  // comment.forEach(({ avatar, name, message }) => {
  //   const socialCommentsElement = document.querySelector('.social__comments');
  //   const commentBlock = document.createElements('li');
  //   commentBlock.classList.add('social__comment');
  //   const commentImage = document.createElements('img');
  //   commentImage.classList.add('social__picture');
  //   commentImage.src = avatar;
  //   commentImage.alt = name;
  //   commentImage.width = 35;
  //   commentImage.height = 35;
  //   const commentText = document.createElements('p');
  //   commentText.classList.add('social__text');
  //   commentText.textContent = message;
  //   commentBlock.appendChild(commentImage, commentText);
  //   socialCommentsElement.appendChild(commentBlock);
  // });

};

// const createCommentsElement = createComments();


// createCommentsElement.forEach(({ avatar, name, message }) => {
//   const socialCommentsElement = document.querySelector('.social__comments');
//   const commentBlock = document.createElements('li');
//   commentBlock.classList.add('social__comment');
//   const commentImage = document.createElements('img');
//   commentImage.classList.add('social__picture');
//   commentImage.src = avatar;
//   commentImage.alt = name;
//   commentImage.width = 35;
//   commentImage.height = 35;
//   const commentText = document.createElements('p');
//   commentText.classList.add('social__text');
//   commentText.textContent = message;
//   commentBlock.appendChild(commentImage, commentText);
//   socialCommentsElement.appendChild(commentBlock);
//   socialCommentsElement.appendChild(commentBlock);
// });


export { renderBigPicture };
