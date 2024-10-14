let ORDER_NUMBER = 0;

type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const menu: Pizza[] = [
  { name: "Margherita", price: 8.99 },
  { name: "Peperoni", price: 10.99 },
  { name: "Hawaiian", price: 12.99 },
  { name: "Veggie", price: 11.99 },
];

let cashInRegister = 100;

const orderQueue: Order[] = [];

function addNewPizza(pizzaObject: Pizza) {
  menu.push(pizzaObject);
}

function placeOrder(pizzaName: string) {
  const pizzaObject = menu.find((pizza) => pizza.name === pizzaName);

  if (!pizzaObject) return;

  cashInRegister += pizzaObject.price;

  ORDER_NUMBER += 1;
  const orderObject = {
    id: ORDER_NUMBER,
    pizza: pizzaObject,
    status: "ordered",
  };
  orderQueue.push(orderObject);

  return orderObject;
}

function completeOrder(orderId: number) {
  const orderToComplete = orderQueue.find((order) => order.id === orderId);

  if (!orderToComplete) return;

  orderToComplete.status = "completed";

  return orderToComplete;
}

// ////// OUTPUTS ////// //

addNewPizza({ name: "Sauron's Fiery Feast", price: 15.0 });
addNewPizza({ name: "Elven Garden Delight", price: 9.99 });
addNewPizza({ name: "Gondor's White Tree Supreme", price: 13.99 });

console.log(">>> Menu:", menu);
console.log(">>> Cash in register:", cashInRegister);
console.log(">>> Order placed:", placeOrder("Sauron's Fiery Feast"));
console.log(">>> Order completed:", completeOrder(1));
console.log(">>> Orders in Queue", orderQueue);
