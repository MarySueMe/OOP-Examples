function Pizza(price) {

  this.price = 10;

  Pizza.prototype.getPrice = function () {
    return this.price;
  }
}

function ExtraCheese(pizza) {
  let prevPrice = pizza.price;

  pizza.price = prevPrice + 1;
}

function Pineapple(pizza) {
  let prevPrice = pizza.price;
  pizza.price = prevPrice + 2;
}

let myPizza = new Pizza(10);
P
Pineapple(myPizza);

  console.log(`"Cost of Pizza:  $" + ${myPizza.price});

