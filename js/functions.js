// Функция для проверки, является ли строка палиндромом

const checkPalindrom = (palindrom) => {
  let revercePalindrom = palindrom.toLowerCase().split('').reverse().join('');
  return palindrom.toLowerCase().replaceAll(' ', '') === revercePalindrom.replaceAll(' ', '');
};


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const getInteger = (string) => {
  let interimString = string.match(/\d+/g);
  let newString = interimString ? interimString.join('') : NaN;
  return newString ? parseInt(newString, 10) : NaN;
};


// Функция, увеличивающая строку до заданной длины

const getRequiredLength = (originalString, minLength, extensionString) => {
  for (let i = originalString.length; i <= minLength; i++) {
    let sizeString = Number(minLength - originalString.length);
    return extensionString.repeat(sizeString).slice(originalString.length - minLength) + originalString;
  }
  return originalString;

  // Запрещенный вариант с padStart
  // return originalString.padStart(minLength, extensionString);
};


// Функция для проверки длины строки

const getStringLength = (stringChecked, maxLength) => (stringChecked.length <= maxLength);
