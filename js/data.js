import { getRandomPositiveInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const DESCRIPTIONS = [
  'Кот на пляже',
  'Приключение на час',
  'Старик и море',
  'Кто кого фотографирует',
  'И вкусно, и грустно',
  'I am Batman',
  'И это все?!',
  'Кисельные берега',
  'Неопозанный летающий объект',
  'Удобство в мелочах',
  'Долгая дорога домой',
  'Белый конь без принца',
  'Происшествие в летнем лагере',
  'Обратная сторона Японии',
  'Future is now',
  'Вид из иллюминатора',
  'Семеро одного не ждут',
  'Назад в прошлое',
  'Монстр под кроватью теперь не страшен',
  'Сады Семирамиды',
  'Ужин на одного',
  'Пылающий закат',
  'Неожиданная встреча',
  'Иллюминаты в городе',
  'Жизнь в лесу',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Василий',
  'Леонид',
  'Афанасий',
  'Мирослава',
  'Катерина',
  'Инга',
  'Дмитрий',
  'Аркадий',
  'Михаил',
  'Эдгар',
  'Хелена',
  'Кристофер',
  'Аннэт',
  'Жозефина',
  'Дэниел',
  'Иван',
  'Зарина',
  'Бенджамин',
  'Кекс',
  'Джуниор',
  'Эрнест',
  'Фауст',
  'Ленора',
  'Фаина',
  'Цирилла',
];

const PHOTO_COUNT = 25;
const PHOTO_SIZE = 35;

const AvatarCount = {
  MIN: 1,
  MAX: 6,
};

const LikeCount = {
  MIN: 15,
  MAX: 200,
};

const CommentCount = {
  MIN: 1,
  MAX: 10,
};

const MessageCount = {
  MIN: 1,
  MAX: 2,
};

const createMessage = () => Array.from({length: getRandomPositiveInteger(MessageCount.MIN, MessageCount.MAX)}, () => getRandomArrayElement(MESSAGES)).join(' ');

const generateCommentId = createIdGenerator();

const generatePhotoId = createIdGenerator();

const createComments = () => {
  const randomAvatarIndex = getRandomPositiveInteger(AvatarCount.MIN, AvatarCount.MAX);
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${randomAvatarIndex}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
};

const createPhoto = () => {
  const id = generatePhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(LikeCount.MIN, LikeCount.MAX),
    comments: Array.from({length: getRandomPositiveInteger(CommentCount.MIN, CommentCount.MAX)}, createComments),
  };
};

const generatePhotos = () => Array.from({length: PHOTO_COUNT}, createPhoto);

export { generatePhotos, createComments, PHOTO_SIZE };
