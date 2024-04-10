const COMMENTS_NUMBER = 5;

const commentCountElement = document.querySelector('.social__comment-count');
const commentsLoaderElement = document.querySelector('.comments-loader');
const commentsContainerElement = document.querySelector('.big-picture__social .social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

let currentComments;
let commentsShown = 0;

const renderComments = () => {
  const newCommentsShown = Math.min(currentComments.length, commentsShown + COMMENTS_NUMBER);

  const fragment = document.createDocumentFragment();

  const pieceCurrentComments = currentComments.slice(commentsShown, newCommentsShown);

  pieceCurrentComments.forEach(({ avatar, name, message }) => {
    const commentElement = commentTemplate.cloneNode(true);
    const commentImage = commentElement.querySelector('.social__picture');
    commentImage.src = avatar;
    commentImage.alt = name;
    const commentText = commentElement.querySelector('.social__text');
    commentText.textContent = message;
    fragment.appendChild(commentElement);
  });
  commentsShown = newCommentsShown;

  if (commentsShown >= currentComments.length) {
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  commentsContainerElement.appendChild(fragment);

  commentCountElement.innerHTML = `${commentsShown} из <span class="comments-count">${currentComments.length}</span> комментариев`;
};

commentsLoaderElement.addEventListener('click', () => {
  renderComments();
});

const initComments = (comments) => {
  commentsContainerElement.innerHTML = '';
  commentsShown = 0;
  currentComments = comments;
  renderComments();
};

export { initComments };
