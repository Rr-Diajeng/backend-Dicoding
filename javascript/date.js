// tanpa parameter maka berisi dtanggal dan waktu hari ini

const mydate = new Date();
console.log(mydate);

// parameter tanggal dalam bentuk string d
const mydate2 = new Date("Januari 02, 2020");
console.log(mydate2);

//parameter dalam bentuk number 
const mydate3 = new Date(miliseconds);

//parameter dalam bentuk number (7 parameter)
const mydate4 = new Date(year, month, date, hour, minute, second, millisecond);

// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
    
    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);
    
    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
  };
  
  console.log(myAge('2000-01-22')); // 21 tahun

//selain date 

const listOfContent = [1,2,"President", {}];
console.log(Array.isArray(listOfContent)); 
// result is true
 
const splitText = "12:20:00".split(':');
// result is [ '12', '20', '00' ]