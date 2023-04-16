const {inspect} = require('util');

const visitsCountMap = new weakMap(); //menyimpan daftar user

function countUser(user){
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); 

jonas = null; 

//delay dibutuhkan untuk menunggu garbage collector bekerja

setTimeout(function(){
    console.log(inspet(visitsCountMap, {
        showHidden: true
    }));
}, 
10000);
