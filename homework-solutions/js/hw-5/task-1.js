/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
let i = 10;

while (i >= 0) {
  evenNumbersResult += `${i}-`;
  i -= 2;
} 
evenNumbersResult = evenNumbersResult.slice(0, -1); // Удаляем последний символ "-"
console.log(evenNumbersResult);
/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
for (let i = 1; i <= 5; i++) {
  smilePatternResult += ':)';
  for (let j = 1; j < i; j++) {
    smilePatternResult += ':)';
  }
  smilePatternResult += '\n';
}
console.log(smilePatternResult);


let str = "hello world";
// console.log(str.at(2).toLocaleUpperCase());
// console.log(str.slice(-5)) ;
// console.log(str.indexOf("w"));
// console.log(str.codePointAt(0));



/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
for (let i = 0; i < text.length; i++) {
  if (text[i] === ' ') {
    replaceSpacesWithOneResult += '1';
  } else {
    replaceSpacesWithOneResult += text[i];
  }
}
console.log(replaceSpacesWithOneResult);
// export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
