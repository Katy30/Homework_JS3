// Task #5
/* створити функцію яка отримує аргумент, якщо це 'last' то функція створює массив
поміщає в нього останній елемент массиву  і видаляє останній елемент  массиву animals,
якщо аргумент 'first' то також записує перший елемент массиву до нового массиву і видаляє перший елемент з animals */

let animals =['cat', 'cow', 'fish', 'chicken', 'dog', 'pig'];

function getEl(value) {
    let newArray = [];
    if (value === 'last') {
        let lastAnimal = animals.pop();
        newArray.push(lastAnimal);
    } else if (value === 'first') {
        let firstAnimal = animals.shift();
        newArray.push(firstAnimal);
    }
    return newArray;
}

console.log(getEl('last'))
console.log(getEl('first'))