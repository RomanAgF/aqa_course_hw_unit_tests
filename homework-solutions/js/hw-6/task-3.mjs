/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

console.log('=== УДАЛЕНИЕ ДУБЛИКАТОВ ===');
console.log('Исходный массив:', unique);
console.log('Исходная длина:', unique.length);

// Создаем новый массив для уникальных элементов
const result = [];

for (let item of unique) {
    // Проверяем, есть ли уже такой элемент в результате
    if (!result.includes(item)) {
        result.push(item);
        console.log(`✓ Добавлен: ${item}`);
    } else {
        console.log(`✗ Дубликат пропущен: ${item}`);
    }
}

unique = result;

console.log('');
console.log('=== РЕЗУЛЬТАТ ===');
console.log('Массив без дубликатов:', unique);
console.log('Новая длина:', unique.length);
console.log('Удалено дубликатов:', 20 - unique.length);

export { unique };
