// Question 25: Alien Colors #1
var alien_color1 = "green";
if (alien_color1 === "green") {
    console.log("You earned 5 points!");
}
// Version that fails (no output)
var alien_color2 = "red";
if (alien_color2 === "green") {
    console.log("You earned 5 points!");
}
// Question 26: Alien Colors #2
var alien_color3 = "green";
if (alien_color3 === "green") {
    console.log("You earned 5 points for shooting the alien!");
}
else {
    console.log("You earned 10 points!");
}
// Version that runs the else block
var alien_color4 = "red";
if (alien_color4 === "green") {
    console.log("You earned 5 points for shooting the alien!");
}
else {
    console.log("You earned 10 points!");
}
// Question 27: Alien Colors #3
var alien_color5 = "yellow";
if (alien_color5 === "green") {
    console.log("You earned 5 points!");
}
else if (alien_color5 === "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color5 === "red") {
    console.log("You earned 15 points!");
}
// Version for green alien
var alien_color6 = "green";
if (alien_color6 === "green") {
    console.log("You earned 5 points!");
}
else if (alien_color6 === "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color6 === "red") {
    console.log("You earned 15 points!");
}
// Question 28: Stages of Life
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29: Favorite Fruit
var favorite_fruits = ["apple", "banana", "orange"];
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf("grape") !== -1) {
    console.log("You really like grapes!");
}
// Question 30: Hello Admin
var usernames = ["admin", "user1", "user2", "user3", "user4"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// Question 31: No Users
var usernames2 = [];
if (usernames2.length === 0) {
    console.log("We need to find some users!");
}
// Question 32: Checking Usernames
var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["User1", "user6", "user7", "user8", "user9"];
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    var lower_new_user = new_user.toLowerCase();
    if (current_users.indexOf(lower_new_user) !== -1) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " username is available."));
    }
}
// Question 33: Ordinal Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    var ending = "";
    if (number === 1) {
        ending = "st";
    }
    else if (number === 2) {
        ending = "nd";
    }
    else if (number === 3) {
        ending = "rd";
    }
    else {
        ending = "th";
    }
    console.log("".concat(number).concat(ending));
}
// Question 34: Pizzas
var favorite_pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (var _c = 0, favorite_pizzas_1 = favorite_pizzas; _c < favorite_pizzas_1.length; _c++) {
    var pizza = favorite_pizzas_1[_c];
    console.log("I like ".concat(pizza, " pizza."));
}
