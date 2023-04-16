function greeting(name, language){

    if(language == "English") console.log("Good Morning " + name);
    else if(language == "Korea") console.log(`Annyeong ${name}`);
    else if(language == "Indonesia") console.log(`Met pagi ${name}`);
}

greeting("Rr", "Indonesia");
greeting("Barbie", "English");
greeting("Donghae", "Korea");

function divide(a, b){
    return a / b;
}

console.log(divide(4, 2));

console.log();
console.log();

//parameter fungsi bila sebuah object

const identitas = {
    namaku: "Rr",
    asal: "Sidoarjo",
    umur: 19,
    pacar: "Donghae"
}

function perkenalan({pacar, namaku}){
    return `pacar dari ${namaku} adalah ${pacar}`;
}

console.log(perkenalan(identitas));

console.log();

//parameter function

function hasil (...perkalian){

    let result = 1;
    for(let angka of perkalian){
        result *= angka
    }
    return result;
}

console.log("hasil perkaliannya ialah " + hasil(1, 2, 4));
