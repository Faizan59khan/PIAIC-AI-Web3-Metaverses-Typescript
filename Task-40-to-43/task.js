// Task 40: Album
// Write a function called make_album() that builds an object describing a music album.
// The function should take in an artist name and an album title, and it should return an object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s object.
// Make at least one new function call that includes the number of tracks on an album.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function makeAlbum(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Artist 1", "Album 1", 10);
var album2 = makeAlbum("Artist 2", "Album 2");
var album3 = makeAlbum("Artist 3", "Album 3", 15);
console.log(album1);
console.log(album2);
console.log(album3);
// Task 41: Magicians
// Make an array of magician's names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magiciansArray = ["Magician 1", "Magician 2", "Magician 3"];
showMagicians(magiciansArray);
// Task 42: Great Magicians
// Start with a copy of your program from Task 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase "the Great" to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
var magiciansWithGreat = makeGreat(magiciansArray);
showMagicians(magiciansWithGreat);
// Task 43: Unchanged Magicians
// Start with your work from Task 40.
// Call the function make_great() with a copy of the array of magicians' names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with "the Great" added to each magician’s name.
function makeGreatAndReturnNewArray(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
var newMagicArray = makeGreatAndReturnNewArray(__spreadArray([], magiciansArray, true));
showMagicians(magiciansArray);
showMagicians(newMagicArray);
