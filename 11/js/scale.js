const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100
};

const smallButtonElement = document.querySelector('.scale__control--smaller');
const bigButtonElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgPreviewElement = document.querySelector('.img-upload__preview img');

const setScale = (value) => {
  imgPreviewElement.style.transform = `scale(${value / 100})`;
  scaleValueElement.value = `${value}%`;
};

const onSmallButtonClick = () => {
  const originalValue = parseInt(scaleValueElement.value, 10);
  let newValue = originalValue - Scale.STEP;
  if (newValue < Scale.MIN) {
    newValue = Scale.MIN;
  }
  setScale(newValue);
};

const onBigButtonClick = () => {
  const originalValue = parseInt(scaleValueElement.value, 10);
  let newValue = originalValue + Scale.STEP;
  if (newValue > Scale.MAX) {
    newValue = Scale.MAX;
  }
  setScale(newValue);
};

const resetScale = () => setScale(Scale.DEFAULT);

smallButtonElement.addEventListener('click', onSmallButtonClick);
bigButtonElement.addEventListener('click', onBigButtonClick);

export { resetScale };
