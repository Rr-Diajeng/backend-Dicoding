//encapsulation

class mail{
    constructor(author){
        this.contacts = [];
        this.from = author;
    }

    sendmessage = function  (msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to);
    }

    showallcontacts(){
        return this.contacts;
    }
}

const panggil = new mail("donghae");

panggil.sendmessage("hai", "diajeng");
console.log("kontak yg kamu punya: ", panggil.showallcontacts());

//inheritance atau pewarisan dan kita pake mail

class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(author) {
        super(author);
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp(080111000222);
console.log(wa1.myProfile());
// my name dicoding, is Business

wa1.sendMessage("halo", 089000999888);

