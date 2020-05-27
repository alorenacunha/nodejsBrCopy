console.log("Hello world");

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: "Laura",
      birthday: new Date(),
      address: "rua dos bobos",
    });
  }, 1000);
}

function getPhone(id, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: "9083240-2342",
      ddd: 31,
    });
  }, 1000);
}

function getAddress(id, callback) {
  setTimeout(() => {
    return callback(null, {
      address: "opa",
    });
  });
}

getUser(function resolveUser(error, user) {
  if (error) {
    console.error("error", error);
    return;
  }

  getPhone(user.id, function resolvePhone(error1, phone) {
    if (error1) {
      console.error("error phone", error1);
      return;
    }
    getAddress(user.id, function resolveAddress(error2, address) {
      if (error2) {
        console.log("error address", error2);
        return;
      }

      console.log("user", user);
      console.log("phone", phone);
      console.log("address", address);
    });
  });
});
