let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is close"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected `))
  .then(() => {
    return order(0000, () => console.log("Production has started"));
  })

  .then(() => {
    return order(2000, () => console.log("The fruit has been chopped"));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`Ice cream placed on ${stocks.holder[1]}`)
    );
  })

  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
  })

  .then(() => {
    return order(2000, () => console.log("serve Ice cream"));
  })

  .catch(() => {
    console.log("costumer left");
  })

  .finally(() => {
    console.log("day ended, meet tomorrow again. thanks :)");
  });
