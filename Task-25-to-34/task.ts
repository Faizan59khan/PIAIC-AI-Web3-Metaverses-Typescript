// Question 25: Alien Colors #1
const alien_color1: string = "green";

if (alien_color1 === "green") {
	console.log("You earned 5 points!");
}

// Version that fails (no output)
const alien_color2: string = "red";
if (alien_color2 === "green") {
	console.log("You earned 5 points!");
}

// Question 26: Alien Colors #2
const alien_color3: string = "green";

if (alien_color3 === "green") {
	console.log("You earned 5 points for shooting the alien!");
} else {
	console.log("You earned 10 points!");
}

// Version that runs the else block
const alien_color4: string = "red";
if (alien_color4 === "green") {
	console.log("You earned 5 points for shooting the alien!");
} else {
	console.log("You earned 10 points!");
}

// Question 27: Alien Colors #3
const alien_color5: string = "yellow";

if (alien_color5 === "green") {
	console.log("You earned 5 points!");
} else if (alien_color5 === "yellow") {
	console.log("You earned 10 points!");
} else if (alien_color5 === "red") {
	console.log("You earned 15 points!");
}

// Version for green alien
const alien_color6: string = "green";

if (alien_color6 === "green") {
	console.log("You earned 5 points!");
} else if (alien_color6 === "yellow") {
	console.log("You earned 10 points!");
} else if (alien_color6 === "red") {
	console.log("You earned 15 points!");
}

// Question 28: Stages of Life
const age: number = 30;

if (age < 2) {
	console.log("The person is a baby.");
} else if (age < 4) {
	console.log("The person is a toddler.");
} else if (age < 13) {
	console.log("The person is a kid.");
} else if (age < 20) {
	console.log("The person is a teenager.");
} else if (age < 65) {
	console.log("The person is an adult.");
} else {
	console.log("The person is an elder.");
}

// Question 29: Favorite Fruit
const favorite_fruits: string[] = ["apple", "banana", "orange"];

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
const usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

for (const username of usernames) {
	if (username === "admin") {
		console.log("Hello admin, would you like to see a status report?");
	} else {
		console.log(`Hello ${username}, thank you for logging in again.`);
	}
}

// Question 31: No Users
const usernames2: string[] = [];

if (usernames2.length === 0) {
	console.log("We need to find some users!");
}

// Question 32: Checking Usernames
const current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];
const new_users: string[] = ["User1", "user6", "user7", "user8", "user9"];

for (const new_user of new_users) {
	const lower_new_user: string = new_user.toLowerCase();
	if (current_users.indexOf(lower_new_user) !== -1) {
		console.log(`${new_user} will need to enter a new username.`);
	} else {
		console.log(`${new_user} username is available.`);
	}
}

// Question 33: Ordinal Numbers
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
	let ending: string = "";
	if (number === 1) {
		ending = "st";
	} else if (number === 2) {
		ending = "nd";
	} else if (number === 3) {
		ending = "rd";
	} else {
		ending = "th";
	}
	console.log(`${number}${ending}`);
}

// Question 34: Pizzas
const favorite_pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (const pizza of favorite_pizzas) {
	console.log(`I like ${pizza} pizza.`);
}
