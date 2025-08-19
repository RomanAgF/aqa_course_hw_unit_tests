/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  const normalizedWord = word.toLowerCase();
  
  // Переворачиваем слово
  const reversedWord = normalizedWord.split('').reverse().join('');
  
  // Сравниваем оригинальное слово с перевёрнутым
  return normalizedWord === reversedWord;
}
console.log(isPalindrom("казак"));   
console.log(isPalindrom("шалаш"));    
console.log(isPalindrom("привет"));  
console.log(isPalindrom("Мадам"));    
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/
function findLongestWords(sentence) {
  const words = sentence.split(' ');
  const maxLength = Math.max(...words.map(word => word.length));
  const longestWords = words.filter(word => word.length === maxLength);
  return longestWords;
}
// Тесты:
console.log(findLongestWords("я изучаю javascript")); 
// export { isPalindrom, findLongestWords };
