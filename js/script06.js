// Task #6
/* Напишіть функцію яка отримує массив і повертає сумму всіх значень массиву*/

let array=[4,7,10,21,7,37,1,4,7,4,5,65];
function sumItem(value){
    let sum=0;
    for (let i = 0; i < value.length; i++) {
        sum += value[i];
    }
    return sum;
}

console.log(sumItem(array));