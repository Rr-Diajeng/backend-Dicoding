/**
 * Kami menyediakan fungsi asynchronous untuk mendapatkan nilai daftar provinsi di Indonesia dengan nama getProvinces(). 
 * Fungsi tersebut akan mengembalikan daftar provinsi pada pemanggilan pertama dan menghasilkan error pada pemanggilan kedua. 
 * Fungsi getProvinces() hanya menerima satu argumen, yakni fungsi callback yang perlu Anda buat.

Cobalah panggil fungsi tersebut dan tangani proses asynchronous-nya dengan pola callback. 
Pastikan callback yang Anda buat dapat menangani proses yang gagal dan berhasil.
 */

const { getProvinces } = require('./utils');

// solution
function provincesCallback(error, provinces) {
    if (error) {
      console.log(error.message);
      return;
    }
  
    console.log(provinces);
  }
  
  getProvinces(provincesCallback);
  getProvinces(provincesCallback);