const util = require("util");
const getAddressAsync = util.promisify(getAddress);
function getUser() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "Laura",
        birthday: new Date(),
      });

      return reject(new Error("ops"));
    }, 1000);
  });
}

function getPhone(id) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        phone: "9083240-2342",
        ddd: 31,
      });
    }, 1000);
  });
}
function getAddress(id, callback) {
  setTimeout(() => {
    return callback(null, {
      street: "dumbie's",
      number: "zero",
    });
  }, 1000);
}

main();
async function main() {
  try {
    console.time("medida-promise");
    const user = await getUser();
    const result = await Promise.all([getPhone(user.id), getAddressAsync(user.id)]);
    const phone = result[0];
    const address = result[1];
    console.log(`
            user: ${user.name}
            birthday: ${user.birth}
            phone: ${phone.ddd}-${phone.phone}
            address: 
                street:${address.street}
                number:${address.number}
        `);
    console.timeEnd("medida-promise");
  } catch (eror) {
    console.log(error);
  }
}
