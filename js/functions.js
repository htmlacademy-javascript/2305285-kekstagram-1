// Функция для проверки, является ли строка палиндромом

const checkPalindrom = (palindrom) => {
  let revercePalindrom = palindrom.toLowerCase().split('').reverse().join('');
  return palindrom.toLowerCase().replaceAll(' ', '') === revercePalindrom.replaceAll(' ', '');
};


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const getInteger = (string) => {
  let newString = string.match(/\d+/g).join('');
  return newString ? parseInt(newString, 10) : NaN;
};

// let str = 'Здесь нет цифр!'; // Момент напряжения…
// let result = str.match(/\d+/); // Может, ложное срабатывание?
// result = result ? parseInt(result[0], 10) : 'Цифры не найдены';


// Функция, увеличивающая строку до заданной длины

const getRequiredLength = (originalString, minLength, extensionString) => {
  for (let i = originalString.length; i <= minLength; i++) {
    let sizeString = Number(minLength - originalString.length);
    return extensionString.repeat(sizeString).slice(originalString.length - minLength) + originalString;
  }

  // return originalString.padStart(minLength, extensionString);
};
