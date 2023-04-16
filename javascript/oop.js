//oop dengan object tipe data string dan method

const mail = {

    from: "diajeng1203@gmail.com",
    sendMessage: function(msg, to){
        console.log(`you send: ${msg} to ${to} from ${mail.from}`);
    }
}

console.log(mail.from);
mail.sendMessage("Hello", "leedonghae15@gmail.com");

//menambahkan fungsi baru
mail.savecontact = function (addr){
    console.log(`email saved ${addr}`);
} 

mail.savecontact("diajeng");

// constructor

function Car(brand, color, maxSpeed, chassisNumber){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function(){
    console.log(`${this.brand} ${this.color} is driving`);
}

const car1 = new Car('Mercedez Benz', 'Orange', 1000, 'su-1');

console.log(car1);

car1.drive();

