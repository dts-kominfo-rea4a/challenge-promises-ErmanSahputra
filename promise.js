const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (parameter) => {
  const merged = [...await promiseTheaterIXX(), ...await promiseTheaterVGC()];
  let counter = 0;
  merged.forEach(jumlah => {
    if (jumlah.hasil === parameter) {
      counter++;
    }
  });
  return counter;
};
  
module.exports = {
  promiseOutput,
};
