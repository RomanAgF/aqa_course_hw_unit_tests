const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

// Находим уникальные пиццы T1
const uniqueT1 = [];
for (let pizza of myPizzasT1) {
    if (!competitorPizzas.includes(pizza)) {
        uniqueT1.push(pizza);
    }
}

// Находим уникальные пиццы T2
const uniqueT2 = [];
for (let pizza of myPizzasT2) {
    if (!competitorPizzas.includes(pizza)) {
        uniqueT2.push(pizza);
    }
}

// Результат
const resultUnique = uniqueT1.length > 0 ? uniqueT1 : uniqueT2.length > 0 ? uniqueT2 : null;
const resultNull = resultUnique ? "имеются уникальные пиццы" : null;

// Добавляем вывод для проверки
console.log('---', 'ИТОГ', '---');
console.log('resultUnique:', resultUnique);
console.log('resultNull:', resultNull);
console.log('🎯 Найдено', uniqueT1.length, 'уникальных пицц T1');

// export { resultNull, resultUnique };
