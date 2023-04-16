//synchronous callback
function halo(nama){
    console.log(`Halo, ${nama}`);
}

function tampilkanPesan(callback){
    const nama = 'Diajeng';
    callback(nama);
}

tampilkanPesan(halo);

//asynchronous callback
