/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  return [].concat(...arrays);
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  // Разбиваем предложение на слова
  const words = sentence.split(' ');
  
  // Преобразуем каждое слово
  const transformedWords = words.map((word, index) => {
    if (index === 0) {
      // Первое слово - все буквы маленькие
      return word.toLowerCase();
    } else {
      // Остальные - первая буква большая, остальные маленькие
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  
  // Объединяем через _
  return transformedWords.join('_');
}

// Тест:
console.log(devideBy("I am super engineer")); // "i_Am_Super_Engineer"
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21  
  */
function fibonacci(n) {
   // Базовые случаи
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  // Для остальных случаев считаем по порядку
  let prev = 0;  // fib(0)
  let curr = 1;  // fib(1)
  
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr;
}
// Тесты:
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(8)); // 21
export { mergeArrays, fibonacci, devideBy };
