//join
let a = ["Rr", "Diajeng", "Anandha"];
console.log(a.join(" "));

//splice
//splice(indexAwal, mauDihapusBerapa(optional), elemen Baru1, ....)
a.splice(2, 0, "Alfisyahrinnisa");
console.log(a.join(" "));

a.splice(1, 3, "Donghae", "Lee");
console.log(a.join(" "));

//slice
let arr = ["Rr", "Diajeng", "Alfisyahrinnisa", "Anandha"];
let arr2 = arr.slice(0, 4);
console.log(arr2.join(" "));

//forEach
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
angka.forEach(function(e){
    console.log(e);
})

let namaMahasiswa = ["Rr", "Donghae", "Barbie"];
namaMahasiswa.forEach(function(e, i){
    console.log("Mahasiswa ke-" + (i + 1) + " adalah " + e);
})

//map
let ang = [1, 2, 3, 4, 5, 6, 7, 8];
let ang2 = ang.map(function(e){
    return e * 2;
})
console.log(ang2.join(" "));

//sort
let ang_forSort = [1, 3, 2, 9, 4, 6];
ang_forSort.sort();
console.log(ang_forSort.join(" "));

let ang_khusus = [1, 10, 50, 2, 7, 4];
ang_khusus.sort();
console.log(ang_khusus.join(" "));

//harus diginiin agar hasilnya ga 1 10 2 4 50 7
ang_khusus.sort(function(a, b){
    return a - b;
})
console.log(ang_khusus.join(" "));

//filter
let ang_filter = [1, 2, 10, 5, 20, 3, 6, 8, 4];
let ang_filter2 = ang_filter.filter(
    function(x){ 
        return x > 5;
    }
);
console.log(ang_filter2.join("-"));

//find 
let ang_find = ang_filter.find(
    function(x){
        return x > 9;
    }
);
console.log(ang_find);

