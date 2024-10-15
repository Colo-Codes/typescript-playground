"use strict";
let myName = "Bob";
const myOtherName = "John";
let loggedInUser = "guest";
// -----
const gameScores = [10, 20, 30, 40, 50];
const favouriteThings = ["Pizza", "Ice Cream", "Coffee"];
const voters = [
    { name: "Alice", age: 42 },
    { name: "Bob", age: 35 },
];
// Generic type
function getLastItem(array) {
    console.log(typeof array[0]);
    return array[array.length - 1];
}
getLastItem(gameScores);
getLastItem(favouriteThings);
getLastItem(voters);
// Generic type
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}
console.log(mergeArrays(gameScores, favouriteThings));
console.log(mergeArrays(gameScores, gameScores));
