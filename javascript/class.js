//tanpa menggunakan prototype

function Mail(){
    this.from = "pengirim@dicoding.com",
    this.sendMessage = function(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
}

const mail1 = new Mail();
mail1.sendMessage("Hello", "penerima@dicoding.com");

// dengan menggunakan pendekatan prototype

function maill(){
    this.from = "diajeng@gmail.com";
}

maill.prototype.sendMessage = function (msg, to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
}

const mailcall = new maill();
mailcall.sendMessage("Hello", "donghae@gmail.com");

//dengan sintaksis class

class Mail2{
    constructor(){
        this.fromm = "barbie@gmail.com";
    }

    sendMessagee(msgg, too){
        console.log(`you send: ${msgg} to ${too} from ${this.fromm}`);
    }
}

const mailsini = new Mail2();
mailsini.sendMessagee("Hello", "ken@gmail.com");

// constructor pada class

class Car{

    constructor(brand, color, maxSpeed, chassisNumber){

        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }

    drive(){
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse(){
        console.log(`${this.brand} ${this.color} is reversing`);
    }
}

const car1 = new Car('Mercedes Benz', 'Orange', 1000, 'to-1');

console.log(car1);

class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);
   
  /* Output:
  User { firstName: 'John', lastName: 'Doe' }
  John Doe
  User { firstName: 'Fulan', lastName: 'Fulanah' }
  Fulan Fulanah
  */