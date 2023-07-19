// Task 40: Album
// Write a function called make_album() that builds an object describing a music album.
// The function should take in an artist name and an album title, and it should return an object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s object.
// Make at least one new function call that includes the number of tracks on an album.

interface Album {
	artist: string;
	title: string;
	tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
	const album: Album = { artist, title };
	if (tracks !== undefined) {
		album.tracks = tracks;
	}
	return album;
}

const album1 = makeAlbum("Artist 1", "Album 1", 10);
const album2 = makeAlbum("Artist 2", "Album 2");
const album3 = makeAlbum("Artist 3", "Album 3", 15);

console.log(album1);
console.log(album2);
console.log(album3);

// Task 41: Magicians
// Make an array of magician's names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function showMagicians(magicians: string[]): void {
	for (const magician of magicians) {
		console.log(magician);
	}
}

const magiciansArray: string[] = ["Magician 1", "Magician 2", "Magician 3"];
showMagicians(magiciansArray);

// Task 42: Great Magicians
// Start with a copy of your program from Task 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase "the Great" to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

function makeGreat(magicians: string[]): string[] {
	const greatMagicians = magicians.map((magician) => `the Great ${magician}`);
	return greatMagicians;
}

const magiciansWithGreat = makeGreat(magiciansArray);
showMagicians(magiciansWithGreat);

// Task 43: Unchanged Magicians
// Start with your work from Task 40.
// Call the function make_great() with a copy of the array of magicians' names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with "the Great" added to each magician’s name.

function makeGreatAndReturnNewArray(magicians: string[]): string[] {
	const greatMagicians = magicians.map((magician) => `the Great ${magician}`);
	return greatMagicians;
}

const newMagicArray = makeGreatAndReturnNewArray([...magiciansArray]);
showMagicians(magiciansArray);
showMagicians(newMagicArray);
