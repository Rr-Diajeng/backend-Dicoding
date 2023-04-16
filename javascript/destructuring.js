//destructing object
const profile = {
    name: "Barbie",
    lastName: "Roberts"
}
console.log(profile.name);

const {name: nama, lastName: marga} = profile; //ini menggunakan destructing object

console.log(nama, marga);

// distructuring array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood); 
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

const [, , third] = favorites;
console.log(third);

//destructing array untuk swapping

let a = 1;
let b = 2;

console.log();
console.log("Sebelum diswap");
console.log("a: " + a); console.log("b: " + b); 

[a, b] = [b, a];

console.log();
console.log("Setelah diswap");
console.log("a: " + a); console.log("b: " + b);

//pengganti default defined

console.log();
const favoritess = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favoritess;
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/
