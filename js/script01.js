// Task #1

/*Створити функцію яка отримує массив і вибирає з нього всі парні числа і розміщує в новому масиві.
Функція повина повертати массив з парними номерами.
*/

let arrRandomNumbers1 = [1, 3, 5, 4, 6, 9, 8, 20, 31, 33, 10];

function searchOdd(arr) {
    let oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            oddArr.push(arr[i]);
        }
    }

    return oddArr;
}

let odd = searchOdd(arrRandomNumbers1); //результат функції
console.log(odd);

