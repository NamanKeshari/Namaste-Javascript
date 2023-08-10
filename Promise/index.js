const cart = ["Shoes", "Pants", "Kurta"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateWalletBalance();
//     });
//   });
// });

// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then(() => updateWalletBalance());

const githubAPI = "https://api.github.com/users/NamanKeshari";

async function callApi() {
  const userData = await fetch(githubAPI);
  const user = await userData.json();
  console.log(userData);
  console.log(user);
}

callApi();

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(() => {
    console.log("No matter what this will be called");
  });

// Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validate cart
    // orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "12354";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}
