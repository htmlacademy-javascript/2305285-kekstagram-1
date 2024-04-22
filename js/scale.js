const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const smallButton = document.querySelector('.scale__control--smaller');
const bigButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const imgScale = (value) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onSmallButtonClick = () => {
  const originalValue = parseInt(scaleValue.value, 10);
  let newValue = originalValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  imgScale(newValue);
};

const onBigButtonClick = () => {
  const originalValue = parseInt(scaleValue.value, 10);
  let newValue = originalValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  imgScale(newValue);
};

const resetScale = () => imgScale(DEFAULT_SCALE);

smallButton.addEventListener('click', onSmallButtonClick);
bigButton.addEventListener('click', onBigButtonClick);

export { resetScale };
