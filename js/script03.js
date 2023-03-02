// Task #3
/*Створити функцію яка отримує як аргумент массив і вираховує середнє значення всіх чисел.
(при розрахунках вважайте що массив може бути будьякої довжини переданий) */

function getAvgValue(arr){
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;

}


console.log(getAvgValue([5,8,7,10,23,68,9,6,77]));