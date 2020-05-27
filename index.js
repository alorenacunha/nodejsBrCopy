const util = require("util");
const getAddressAsync = util.promisify(getAddress);
function getUser() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "Laura",
        birthday: new Date()
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
        number: "0",
    });
  }, 1000);
}

getUser()
  .then((user) => {
    return getPhone(user.id).then((phone) => {
      return {
        user,
        phone,
      };
    });
  })
  .then((result) => {
    return getAddressAsync(result.user.id).then((address) => {
      return {
        user: result.user,
        phone: result.phone,
        address,
      };
    });
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
5;
