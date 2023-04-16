let identitas = (aku, umur) => {
    return `Namaku ${aku} dan umurku ${umur} tahun`;
}

console.log(identitas("Rr", 19));

//or

let identitass = (aku, umur) => {
    console.log(`Namaku ${aku} dan umurku ${umur} tahun`);
}

identitass("Rr", 19);

//or

const sayName = name => {
    console.log(`Nama saya ${name}`);
}
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();