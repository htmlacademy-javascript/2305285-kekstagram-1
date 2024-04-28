const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100
};

const smallButton = document.querySelector('.scale__control--smaller');
const bigButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const setScale = (value) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onSmallButtonClick = () => {
  const originalValue = parseInt(scaleValue.value, 10);
  let newValue = originalValue - Scale.STEP;
  if (newValue < Scale.MIN) {
    newValue = Scale.MIN;
  }
  setScale(newValue);
};

const onBigButtonClick = () => {
  const originalValue = parseInt(scaleValue.value, 10);
  let newValue = originalValue + Scale.STEP;
  if (newValue > Scale.MAX) {
    newValue = Scale.MAX;
  }
  setScale(newValue);
};

const resetScale = () => setScale(Scale.DEFAULT);

smallButton.addEventListener('click', onSmallButtonClick);
bigButton.addEventListener('click', onBigButtonClick);

export { resetScale };
