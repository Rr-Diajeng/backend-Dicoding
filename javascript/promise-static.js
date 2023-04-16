/** Promise all
 * Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel. 
 * Method ini menerima sebuah array yang berisi beberapa Promise sebagai argumen. 
 * Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai yang di-resolve dalam masing-masing Promise yang diletakkan pada array argumen.
 */

const promise1a = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2a = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3a = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1a, promise2a, promise3a]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik

console.log();

//Jika terdapat rejection pada salah satu Promise, Promise.all() akan langsung menghasilkan rejected tanpa mengembalikan nilai Promise lain yang statusnya fulfilled.
const promise1b = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2b = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
const promise3b = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1b, promise2b, promise3b])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // upss


/** promise race
 * Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all(). 
 * Namun, ia hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.
 */

const promise1c = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2c = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3c = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1c, promise2c, promise3c])
  .then((value) => console.log(value)); // 1 setelah 1 detik

//rejection
// Jika proses rejection merupakan proses yang paling cepat, ia akan mengembalikan rejection tersebut. Jika rejection tidak kalah cepat dengan proses lain yang nilainya fulfilled, ia akan tetap mengembalikan nilai resolved tercepat.

const promise1d = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise2d = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3d = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1d, promise2d, promise3d])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // Ups

/** Promise all settled
 * Promise.allSettled() bekerja mirip seperti Promise.all(). 
 * Namun, Promise.allSettled() mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object
 * Dari struktur objek yang dihasilkan, Anda bisa melihat bahwa Promise.allSettled() akan mengembalikan seluruh nilai Promise yang dijalankan, baik yang statusnya fulfilled ataupun rejected.
 */

const promise1e = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2e = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
const promise3e = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1e, promise2e, promise3e])
 .then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik

/** Promise any
 *  Cara kerja method ini mirip seperti Promise.race(), tetapi hanya mengembalikan nilai tercepat yang berstatus fulfilled. 
 * Jika seluruh Promise berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”.
 */

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected
