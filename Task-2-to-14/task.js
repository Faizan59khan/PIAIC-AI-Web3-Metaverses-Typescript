// 2) Personal Message
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
// 3) Name Cases
var personName1 = "John Doe";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
// 4) Famous Quote
var famousQuote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(famousQuote, "\""));
// 5) Famous Quote 2
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"").concat(famousQuote, "\"");
console.log(message);
// 6) Stripping Names
var personNameWithWhitespace = "\t   John Doe \n";
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
var favoriteNumber = 42;
console.log("My favorite number is: ".concat(favoriteNumber));
// 10) Adding Comments
// This program prints a greeting message to a person.
var personNameGreeting = "John";
console.log("Hello, ".concat(personNameGreeting, "!"));
// 11) Names
var names = ["Alice", "Bob", "Charlie"];
// Printing each person's name one at a time
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
// 12) Greetings
var namesGreetings = ["Alice", "Bob", "Charlie"];
// Personalized greeting message to each person
console.log("Hello, ".concat(namesGreetings[0], "!"));
console.log("Hello, ".concat(namesGreetings[1], "!"));
console.log("Hello, ".concat(namesGreetings[2], "!"));
// 13) Your Own Array
var transportationModes = ["car", "motorcycle", "bicycle"];
// Printing statements about each item
console.log("I would like to own a ".concat(transportationModes[0], "."));
console.log("I enjoy riding a ".concat(transportationModes[1], "."));
console.log("I use a ".concat(transportationModes[2], " for short distances."));
// 14) Guest List
var guestList = ["Albert Einstein", "Nelson Mandela", "Marie Curie"];
// Inviting each person to dinner
console.log("Dear ".concat(guestList[0], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are invited to dinner."));
