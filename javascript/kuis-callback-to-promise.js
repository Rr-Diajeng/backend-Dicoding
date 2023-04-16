/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */


function getProvinces(countryId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (countryId === 'id') {

                bla = [
                    { id: 'id-jk', name: 'Jakarta' },
                    { id: 'id-bt', name: 'Banten' },
                    { id: 'id-jr', name: 'Jawa Barat' },
                ];

                resolve(bla);

              return;
            }
        
            reject(new Error('Country not found'));
          }, 1000);

    });
};

getProvinces("id")
    .then(bla => console.log(bla))
    .catch(err => console.log(err.message));

  
  module.exports = { getProvinces: getProvinces };

