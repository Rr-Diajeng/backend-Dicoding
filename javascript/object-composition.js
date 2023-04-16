const canSendMessage = self => (
    {
        sendMessage: () => console.log("send message: ", self.message)
    }
); //model gini cuma biar lgsg hasilnya return gitu

const checkIsValidPhone = self => (
    {
        isValidPhone: () => console.log("valid phone", self.from)
    }
);

const personalEnterprise = (from, message, store) => {
    const self = {
        from,
        message,
        store
    };

    const personalEnterpriseBehaviors = self =>(
        {
            createCatalog: () => console.log("Catalog has created: ", self.store)
        }
    );

    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};
const pe1 = personalEnterprise("pengirim@gmail.com", "hei produk baru nih", "Dicoding store");
pe1.createCatalog();
pe1.sendMessage();


// kasus backend

// class Developer{
//     constructor(name){
//         this.name = name;
//     }

//     commitChanges(){
//         console.log(`${this.name} is committing changes..`);
//     }
// }

// class FrontEndDeveloper extends Developer{
//     buildUI(){
//         console.log(`${this.name} is building UI..`);
//     }
// }

// class BackEndDeveloper extends Developer{
//     buildAPI(){
//         console.log(`${this.name} is building API...`);
//     }
// }

// class DevOps extends Developer{
//     deployApp(){
//         console.log(`${this.name} is deploying app...`);
//     }
// }

// lalu kalau pake full stack maka harus ada buildUI, buildAPI, dan deployApp dan itu melelahkan
// jadi kita pake object composition

class Developer{
    constructor(name){
        this.name = name;
    }

    commitChanges(){
        console.log(`${this.name} is committing changes..`);
    }
}

function canBuildUI(developer){

    return{
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer){

    return{

        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer){

    return{

        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

function createFrontEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name){
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDeveloper('Lita');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);

const backEndDeveloper = createBackEndDeveloper('Rr');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);

const devOps = createDevOps('Deka');
devOps.commitChanges();
devOps.deployApp();
console.log(`is ${devOps.name} developer? `, devOps instanceof Developer);

const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);