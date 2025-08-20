/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach;
const arr = [];
forEach = numbers.forEach((element, index, array) => {
  if (element % 3 === 0) {
   arr.push(element);
  }
  
})
console.log(arr);


let map;
map = numbers.map(x => x - numbers.length);
console.log(map);


let filter;
const arr3 = numbers.filter((element, index, array) => {
  return element > array[index - 1];
})
console.log(arr3)

let find;
const res = numbers.find((element, index, array) => {
  return element === index;
})
console.log(res);


let sort;
const res2 = numbers.sort((a, b) => a - b);
console.log(res2);


let reduce;
const res3 = numbers.reduce((acc, element) => {
  return acc + element
})
console.log(res3);

let some;
const res4 =  numbers.some((element, index, array) => {
  return element > 90;
})
console.log(res4);


let every;
const res5 = numbers.every((element, index, array) => {
  return element > 90;
})
console.log(res5);
// export { forEach, map, filter, find, sort, reduce, some, every };



// const arr = [10, 20, 30];
// arr.forEach((element, index, array) => {
//   console.log(`Элемент: ${element}, Индекс: ${index}, Массив: ${array}`);
// });


// const arr = [1, 2, 3];
// const doubled = arr.map((element, index, array) => {
//   return element * 2;
// });
// console.log(doubled); // [2, 4, 6]
// console.log(arr===doubled);


// const arr = [10, 20, 30, 40];
// const result = arr.filter((element, index, array) => {
//   return element > 20;
// });
// console.log(result); // [30, 40]


// const arr = [10, 20, 30, 40];
// const found = arr.find((element, index, array) => {
//   return element > 25;
// });
// console.log(found); // 30


// const arr = [10, 20, 30, 40];
// const index = arr.findIndex(element => element > 15);
// console.log(index); // 1 (индекс элемента 20)

// // Пример: Если элемент не найден
// const arr2 = [1, 2, 3];
// const index2 = arr2.findIndex(element => element > 10);
// console.log(index2); // -1 (так как ни один элемент не удовлетворяет условию)

// const arr = [10, 20, 30, 40];

// // Метод some
// const hasLargeNumber = arr.some((element) => element > 35);
// console.log(hasLargeNumber); // true

// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((accumulator, element) => {
//   return accumulator + element;
// }, 0);
// console.log(sum); // 10


// const arr = [5, 3, 8, 1];
// arr.sort((a, b) => a - b); // [1, 3, 5, 8]

// const set = new Set([1, 1, 2, 2, 3, 3]);
// console.log(set); // Set {1, 2, 3}
