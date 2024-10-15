// =========== 🍕 Global variables 🍕 ===========

let orderNumber = 0;
let pizzaId = 1;

// =========== 🍕 Types 🍕 ===========

// Custom type: object structure
type Pizza = {
  id: number;
  name: string;
  price: number;
};

// Union type
type orderStatus = "ordered" | "completed";

// Custom type: object structure
type Order = {
  id: number;
  pizza: Pizza;
  status: orderStatus;
};

// =========== 🍕 Initialisations 🍕 ===========

// Array of custom types
const menu: Pizza[] = [
  { id: pizzaId++, name: "Margherita", price: 8.99 },
  { id: pizzaId++, name: "Peperoni", price: 10.99 },
  { id: pizzaId++, name: "Hawaiian", price: 12.99 },
  { id: pizzaId++, name: "Veggie", price: 11.99 },
];

// Inferred type
let cashInRegister = 100;

// Array of custom types
const orderQueue: Order[] = [];

// =========== 🍕 Functions 🍕 ===========

// Function signature using the Omit<Type, Keys> utility type
function addNewPizza(pizzaObject: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = { id: pizzaId++, ...pizzaObject };
  menu.push(newPizza);

  return newPizza;
}

// Function signature
function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    // Type narrowing 'identifier' to string -> pizza name
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLocaleLowerCase()
    );
  } else if (typeof identifier === "number") {
    // By using an 'else if' to check for the other possible type we are making our function more robust
    // Type narrowing 'identifier' to number -> pizza id
    return menu.find((pizza) => pizza.id === identifier);
  }

  throw new TypeError(
    "Parameter 'identifier' must either be a string or a number"
  );
}

// Function signature
function placeOrder(pizzaName: string): Order | undefined {
  const pizzaObject = menu.find((pizza) => pizza.name === pizzaName);

  if (!pizzaObject) return;

  cashInRegister += pizzaObject.price;

  orderNumber += 1;
  const orderObject: Order = {
    id: orderNumber,
    pizza: pizzaObject,
    status: "ordered",
  };
  orderQueue.push(orderObject);

  return orderObject;
}

// Function signature with return types
function completeOrder(orderId: number): Order | undefined {
  const orderToComplete = orderQueue.find((order) => order.id === orderId);

  if (!orderToComplete) return;

  orderToComplete.status = "completed";

  return orderToComplete;
}

// =========== 🍕 Outputs 🍕 ===========

addNewPizza({ name: "Sauron's Fiery Feast", price: 15.0 });
addNewPizza({ name: "Elven Garden Delight", price: 9.99 });
addNewPizza({ name: "Gondor's White Tree Supreme", price: 13.99 });

console.log(">>> Menu:", menu);
console.log(">>> Cash in register:", cashInRegister);
console.log(">>> Order placed:", placeOrder("Sauron's Fiery Feast"));
console.log(">>> Order completed:", completeOrder(1));
console.log(">>> Orders in Queue:", orderQueue);
console.log(">>> Last pizza ID:", pizzaId);
