/**function callback(coffee){
    console.log(coffee);
}

function orderCoffee(callback){
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan ditunggu...");

    setTimeout(
        () => {
            coffee = "Kopi sudah jadi!";
            callback(coffee);
        },
        3000
    );
    return coffee;
}

orderCoffee(callback);
**/

//cara lain

const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silahkan ditunggu...");

    setTimeout(
        () =>{
            coffee = "Kopi sudah jadi!";
            callback(coffee);
        }, 3000
    );
}

orderCoffee(
    coffee => {
        console.log(coffee);
    }
);






