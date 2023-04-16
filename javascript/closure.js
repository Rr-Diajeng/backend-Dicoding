function sum(){
    let count = 0;

    return function (){
        return ++count;
    }
}

let cobatambah = sum();
console.log(cobatambah());
console.log(cobatambah());
console.log(cobatambah());

/**
 * ekspektasi output
 * 1
 * 2
 * 3
 */

let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
1
2
3
 */