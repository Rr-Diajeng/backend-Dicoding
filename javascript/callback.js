// jika tidak ada eror
function getUsers(callback){

    setTimeout(function () {

        const users = ['John', 'Jack', 'Abigail'];

        callback(users);
    }, 3000);
};

function usersCallback(users){
    console.log(users);
}

getUsers(usersCallback);

//jika ada error 

console.log();

function getUsers2(isOffline, callback){

    setTimeout(function () {

        const users = ['Donghae', 'Rr', 'Thomas'];

        if(isOffline){
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

function usersCallback2(error, users){

    if(error){
        console.log('Process failed: ', error.message);

        return;
    }

    console.log('Process success: ', users);
}

getUsers2(false, usersCallback2);
getUsers2(true, usersCallback2);