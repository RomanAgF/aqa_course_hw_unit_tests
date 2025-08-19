/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  console.log(`Текущее число: ${number}`);
  
  // Базовый случай: если число однозначное
  if (number <= 9) {
    console.log(`Результат: ${number}`);
    return number;
  }
  
  // Складываем цифры
  const sum = number
    .toString()
    .split('')
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  
  console.log(`Сумма цифр: ${sum}`);
  
  // Рекурсивный вызов
  return digitalRoot(sum);
}

export { digitalRoot };
