function canSendMessage (self){
    return{
        sendMessage() {
            console.log("send message: ", self.message);
        }
    }
};

function checkIsValidPhone(self){
    return{
        isValidPhone() {
            console.log("valid phone", self.from);
        }
    }
}

function personalEnterprise(from, message, store){
    const self = {
        from,
        message,
        store
    };

    function personalEnterpriseBehaviors(self){
        return{
            createCatalog(){
                console.log("Catalog has created: ", self.store);
            }
        }
    }

    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
}

const pe1 = personalEnterprise("pengirim@gmail.com", "hei produk baru nih", "Dicoding store");
pe1.createCatalog();
pe1.sendMessage();