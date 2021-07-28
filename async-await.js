let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected `);

    await time(0000);
    console.log("Production has started");

    await time(2000);
    console.log("The fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`Ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("serve Ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}

kitchen();
