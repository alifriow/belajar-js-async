//synchronous

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

//asynchronous

// console.log("1");
// console.log("2");

// // console.log("3");
// setTimeout(() => {
//   console.log("3");
// }, 2000);

// // setInterval(() => {
// //   console.log("3");
// // }, 2000);

// console.log("4");
// console.log("5");

//calbacks
// => we can pass function as an argument

// function one(two) {
//   console.log("step 1 complete.");
//   two();
// }

// function two() {
//   console.log("step 2 loading....");
// }

// one(two);

// ===> Make ice cream in async

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruitName, production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruitName]}`);
    production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);
