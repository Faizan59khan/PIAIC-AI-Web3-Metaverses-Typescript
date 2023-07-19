// 15) Changing Guest List
var guestList = ["Alice", "Bob", "Charlie", "David"];
console.log("Original Guest List:", guestList);
var guestUnableToAttend = guestList.pop(); // Removing last guest
if (guestUnableToAttend) {
    console.log(guestUnableToAttend, "can't make it.");
}
var newGuest = "Eve";
guestList.push(newGuest); // Adding new guest
console.log("Updated Guest List:", guestList);
// 16) More Guests
console.log("Good news! We found a bigger dinner table.");
var additionalGuests = ["Frank", "Grace", "Hannah"];
guestList.unshift.apply(guestList, additionalGuests); // Adding new guests at the beginning
console.log("Updated Guest List with Additional Guests:", guestList);
// 17) Shrinking Guest List
console.log("Unfortunately, the new dinner table won't arrive in time.");
console.log("Sorry,", guestList.pop(), "you're no longer invited."); // Removing last guest
console.log("Sorry,", guestList.pop(), "you're no longer invited."); // Removing last guest
console.log("Guest List after removing some guests:", guestList);
console.log("You're still invited,", guestList[0], "and", guestList[1] + ".");
guestList.length = 0; // Emptying the guest list
console.log("Empty Guest List:", guestList);
// 18) Seeing the World
var placesToVisit = ["Japan", "Italy", "Australia", "Canada", "Brazil"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", placesToVisit.slice().sort());
console.log("Still in Original Order:", placesToVisit);
console.log("Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse());
console.log("Still in Original Order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
console.log("Sorted Alphabetical Order:", placesToVisit.slice().sort());
console.log("Sorted Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse());
// 19) Dinner Guests
var numberOfGuests = guestList.length;
console.log("Number of Guests Invited:", numberOfGuests);
// 20) Array Example
var mountains = ["Everest", "Kilimanjaro", "Denali", "Mont Blanc"];
var rivers = ["Nile", "Amazon", "Yangtze", "Mississippi"];
var countries = ["Canada", "Australia", "India", "Brazil"];
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
};
var book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
};
// Add more objects as needed
// 22) Intentional Error
var fruits = ["apple", "orange", "banana"];
// Accessing an index that is out of bounds will produce an error
// Uncomment the line below to see the error
// console.log(fruits[3]);
// 23) Conditional Tests
var carType = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(carType == "subaru"); // Output: True
// Add more conditional tests as needed
// Sample conditional tests
console.log("Is car == 'honda'? I predict False.");
console.log(carType == "honda"); // Output: False
console.log("Is car !== 'audi'? I predict True.");
console.log(carType !== "audi"); // Output: True
