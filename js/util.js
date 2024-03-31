// Функция получения целого числа из переданного диапазона

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

// Проверка нажатия клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomPositiveInteger, getRandomArrayElement, createIdGenerator, isEscapeKey };
