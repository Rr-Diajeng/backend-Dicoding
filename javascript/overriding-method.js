// overriding constructor

class mail{
    constructor(author){
        this.from = author;
        this.contact = [];
    }
    sendmessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contact.push(to);
    }
    showallcontacts(){
        return this.contact;
    }
}

class whatsapp extends mail{
    constructor(username, isbusinessaccount, phonenumber){
        super(phonenumber);
        this.username = username;
        this.isBussinessAccount = isbusinessaccount;
    }
}

const wa1 = new whatsapp("dicoding", true, 6281111);
console.log(wa1.from);
wa1.sendmessage("Hai", 909092090);

console.log();

//overriding method

class whatsapp2 extends mail{
    constructor(username, isbusinessaccount, phonenumber){
        super(phonenumber);
        this.username = username;
        this.isBussinessAccount = isbusinessaccount;
    }
    sendmessage(msg, to){
        console.log("send by wa");
    }
}

const wa2 = new whatsapp2("diajeng", true, 6282222);
wa2.sendmessage("hhalooo", 89898);
console.log();

/*hasilnya output akan send by wa karena membaca sendmessage dari class whatsapp2
untuk tetap mengeksekusi kode parentclass, maka menggunakan operator
super.methodName() 
**/

class whatsapp3 extends mail{
    constructor(username, isbusinessaccount, phonenumber){
        super(phonenumber);
        this.username = username;
        this.isBussinessAccount = isbusinessaccount;
    }
    sendmessage(msg, to){
        super.sendmessage(msg, to);
        console.log("gausa send wa");
    }
}

const wa3 = new whatsapp3("diajeng", true, 6282222);
wa3.sendmessage("hhalooo", 89898);