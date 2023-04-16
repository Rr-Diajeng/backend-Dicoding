class MailService{

    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsAppService extends MailService{

    sendBroadcastMessage(message, receivers){
        for(const receiver of receivers){
            this.sendMessage(message, receiver);
        }
    }
}

class EmailService extends MailService{

    sendDelayedMessage(message, receiver, delay){
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const wa = new WhatsAppService('+08113313209');
wa.sendMessage('Hai sayang', 'Donghae');
wa.sendBroadcastMessage('yok bukber', ['Donghae', 'Thomas']);

const email = new EmailService('diajeng@gmail.com');
email.sendDelayedMessage('brooo', 'Donghae', 300);

