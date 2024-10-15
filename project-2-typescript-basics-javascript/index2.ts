let myName = "Bob";
const myOtherName = "John";

type userRole = "admin" | "member" | "guest";
let loggedInUser: userRole = "guest";

// -----

const gameScores = [10, 20, 30, 40, 50];
const favouriteThings = ["Pizza", "Ice Cream", "Coffee"];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 35 },
];

// Generic type
function getLastItem<TypeParameter>(array: TypeParameter[]): TypeParameter {
  console.log(typeof array[0]);
  return array[array.length - 1];
}

getLastItem(gameScores);
getLastItem(favouriteThings);
getLastItem(voters);

// Generic type
function mergeArrays<T, U>(array1: T[], array2: U[]): (T | U)[] {
  return [...array1, ...array2];
}

console.log(mergeArrays<number, string>(gameScores, favouriteThings));
console.log(mergeArrays<number, number>(gameScores, gameScores));
