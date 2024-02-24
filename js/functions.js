// Функция для проверки, является ли строка палиндромом

const checkPalindrom = (palindrom) => {
  const editedPalindrom = palindrom.toLowerCase().replaceAll(' ', '');
  const reversePalindrom = editedPalindrom.split('').reverse().join('');
  return editedPalindrom === reversePalindrom;
};


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const getInteger = (string) => {
  const interimString = string.match(/\d+/g);
  const newString = interimString ? interimString.join('') : NaN;
  return parseInt(newString, 10);
};


// Функция, увеличивающая строку до заданной длины

const getRequiredLength = (originalString, minLength, extensionString) => {
  if (originalString.length >= minLength) {
    return originalString;
  }
  const extensionStringLength = minLength - originalString.length;
  let newExtensionString = extensionString.slice(0, extensionStringLength % extensionString.length);
  while (newExtensionString.length < extensionStringLength) {
    newExtensionString += extensionString;
  }
  return newExtensionString + originalString;

  // Запрещенный вариант с padStart
  // return originalString.padStart(minLength, extensionString);
};


// Функция для проверки длины строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkPalindrom('топот');
getInteger('1 кефир, 0.5 батона');
getRequiredLength('q', 4, 'we');
checkStringLength('проверяемая строка', 20);
