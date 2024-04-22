const imgPreview = document.querySelector('.img-upload__preview img');
// const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

// effectValue.value = 1;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imgPreview.style.filter = `grayscale(${sliderValue})`;
  effectValue.value = sliderValue;
};

sliderElement.noUiSlider.on('update', onSliderUpdate);
