// Task #2
/*Створити цикл який 5 разів виводить prompt  запитує що купити і вводить це в массив. */

let array=[];
for (let i = 0; i < 5; i++) {
    let listItem=prompt("Що купити?", "молоко")
    array.push(listItem)
}
console.log(array)
