try{
    console.log('Awal blok try');
    errorCode;
    console.log('Akhir blok try');
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("Baris ini dapat diabaikan");
}
finally{
    console.log("Akan tetap dieksekusi");
}