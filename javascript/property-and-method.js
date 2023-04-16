//property cara 1

class Mail{
    constructor(){
        this.from = "pengirim@dicoding.com";
        this.contacts = [];
        this.yourotherproperty = "The values";
    }

    sendMessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); //menyimpan kontak baru
    }
}

const bacamail = new Mail();
bacamail.sendMessage("Hello", "penerima@dicoding.com");
console.log(bacamail);

//property cara 2

function mail(){
    this.fromm = "pengirim@dicoding.com";
    this.contactss = [];
    this.yourotherpropertyy = "The values";
}

mail.prototype.sendmessage = function (msg, to){
    console.log(`you send: ${msg} to ${to} from ${this.fromm}`);
    this.contactss.push(to); //menyimpan kontak baru
}

const panggilmail = new mail();
panggilmail.sendmessage("Hello", "penerima@dicoding.com");
console.log(panggilmail);

//cara lain kalau gapake menginstantiate class

class mailll{
    static isValidPhone(phone){
        return typeof phone === "number";
    }
}

console.log(mailll.isValidPhone(08113313209)); //jadi dengan namaclass.method()

