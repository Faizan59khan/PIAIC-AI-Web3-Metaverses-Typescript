// 2) Personal Message
const personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// 3) Name Cases
const personName1: string = "John Doe";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());

// 4) Famous Quote
const famousQuote: string = "A person who never made a mistake never tried anything new.";
const author: string = "Albert Einstein";
console.log(`${author} once said, "${famousQuote}"`);

// 5) Famous Quote 2
const famous_person: string = "Albert Einstein";
const message: string = `${famous_person} once said, "${famousQuote}"`;
console.log(message);

// 6) Stripping Names
const personNameWithWhitespace: string = "\t   John Doe \n";
console.log("With Whitespace:", personNameWithWhitespace);
console.log("Stripped Name:", personNameWithWhitespace.trim());

// 7) Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// 8) You should create four lines that look like this:
console.log(5 + 3);

// 9) Favorite Number
const favoriteNumber: number = 42;
console.log(`My favorite number is: ${favoriteNumber}`);

// 10) Adding Comments
// This program prints a greeting message to a person.
const personNameGreeting: string = "John";
console.log(`Hello, ${personNameGreeting}!`);

// 11) Names
const names: string[] = ["Alice", "Bob", "Charlie"];

// Printing each person's name one at a time
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// 12) Greetings
const namesGreetings: string[] = ["Alice", "Bob", "Charlie"];

// Personalized greeting message to each person
console.log(`Hello, ${namesGreetings[0]}!`);
console.log(`Hello, ${namesGreetings[1]}!`);
console.log(`Hello, ${namesGreetings[2]}!`);

// 13) Your Own Array
const transportationModes: string[] = ["car", "motorcycle", "bicycle"];

// Printing statements about each item
console.log(`I would like to own a ${transportationModes[0]}.`);
console.log(`I enjoy riding a ${transportationModes[1]}.`);
console.log(`I use a ${transportationModes[2]} for short distances.`);

// 14) Guest List
const guestList: string[] = ["Albert Einstein", "Nelson Mandela", "Marie Curie"];

// Inviting each person to dinner
console.log(`Dear ${guestList[0]}, you are invited to dinner.`);
console.log(`Dear ${guestList[1]}, you are invited to dinner.`);
console.log(`Dear ${guestList[2]}, you are invited to dinner.`);
