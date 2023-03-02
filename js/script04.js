// Task #4
/*  Створити функцію яка замінює в массиві =) на ;) */

letsmile = [':)', '=)',':)', '=)',':)', '=)'];

function replaceEl(newEl){
    for (let i = 0; i < newEl.length; i++) {
        if(newEl[i] === '=)'){
            newEl[i]=";)"
        }
    }

    return newEl;
}

console.log(replaceEl(letsmile))