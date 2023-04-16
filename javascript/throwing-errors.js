let json = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    console.log(user.name);
    console.log(user.age);
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
}

let json2 = '{ "age": 20}';

try{
    let user2 = JSON.parse(json2);

    console.log(user2.name); //muncul undefined maka butuh throw
    console.log(user2.age);
}
catch(error){
    console.log();
    console.log(error.name);
    console.log(error.message);
}

//throw mulai digunakan
console.log();
let json3 = '{"age": 20}';
try{
    let user3 = JSON.parse(json3);

    if(!user3.name){
        throw new SyntaxError("'name' is required.");
    }

    console.log(user3.name);
    console.log(user3.age);
}
catch(error){
    console.log(`JSON Error: ${error.message}`);
}
