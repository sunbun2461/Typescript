"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2;
    return "hello"; // there is no error because you did not declare the function to only return a number
}
//to be extra safe
function addTwoV2(num) {
    return num + 2;
    // return "hello" //if someone trys to add this here, it won't work, if they tried above it would
}
function getUpper(val) {
    return val.toUpperCase;
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var loginUserV2 = function (name, email, isPaid) { };
addTwo(5);
getUpper('thomas');
signUpUser('thomas', 'a@a.com', false);
loginUser("t", "a@a.com");
// union types exists shown quickly below (more on this later)
function getValue(myVale) {
    if (myVale > 5) {
        return true;
    }
    return "200 OK";
}
// in arrow function 
var getHello = function (name) {
    return "Hello " + name;
};
// const heros = ['thor', 'spiderman', 'ironman']
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "The hero is ".concat(hero);
});
// documentation 
function consoleError(errmsg) {
    console.log(errmsg);
    // return 1 // from what I can gather, this :void makes it so in case someone happens to add something like return 1, or return anything, it makes it so they cannot, void seems to mean, never return. 
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
