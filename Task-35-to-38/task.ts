// Task 35: Animals
// Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Modify your program to print a statement about each animal, such as "A dog would make a great pet."
// Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as "Any of these animals would make a great pet!"

const animals = ["Dog", "Cat", "Rabbit"];

console.log("Animals:");
for (const animal of animals) {
	console.log(`- A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// Task 36: T-Shirt
// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.

function makeShirt(size: string, message: string): void {
	console.log(`Shirt size: ${size}, Message: "${message}"`);
}

makeShirt("Large", "I love TypeScript");

// Task 37: Large Shirts
// Modify the make_shirt() function so that shirts are large by default with a message that reads "I love TypeScript".
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirtWithDefault(size: string = "Large", message: string = "I love TypeScript"): void {
	console.log(`Shirt size: ${size}, Message: "${message}"`);
}

makeShirtWithDefault();
makeShirtWithDefault("Medium");
makeShirtWithDefault("Small", "Hello, World!");

// Task 38: Cities
// Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as "Karachi is in Pakistan."
// Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.

//default countery is Unknown
function describeCity(city: string, country: string = "Unknown"): void {
	console.log(`${city} is in ${country}.`);
}

describeCity("Karachi", "Pakistan");
describeCity("London", "United Kingdom");
describeCity("Sydney");
