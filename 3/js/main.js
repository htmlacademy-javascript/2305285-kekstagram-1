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
  'Монстр под кроватью не теперь страшен',
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

// Функция получения целого числа из переданного диапазона

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const NUMBER_OBJECTS_GENERATED = 25;

const createRandomIdIndex = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.includes(currentValue);
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createComments = () => {
  const randomIdIndex = createRandomIdIndex(1, 999);
  const randomAvatarIndex = createRandomIdIndex(1, 6);
  const urlAvatarAddres = String(`img/avatar-${randomAvatarIndex()}.svg`);
  return {
    id: randomIdIndex(),
    avatar: urlAvatarAddres,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const createIdDescription = () => {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const idDescription = createIdDescription();

const descriptionPhoto = createIdDescription();

const urlPhotoIndex = createIdDescription();

const createDescriptionPhoto = () => {
  const randomQuantityLikes = createRandomIdIndex(15, 200);
  const urlPhotoAddres = String(`photos/${urlPhotoIndex()}.jpg`);
  return {
    id: idDescription(),
    url: urlPhotoAddres,
    description: DESCRIPTIONS[descriptionPhoto() - 1],
    likes: randomQuantityLikes(),
    comments: createComments(),
  };
};

const arrayPhotoDescriptions = Array.from({length: NUMBER_OBJECTS_GENERATED}, createDescriptionPhoto);
