// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

const cityCountry = (city: string, country: string): string => {
	return `${city[0]?.toUpperCase().concat(city?.slice(1))}, ${country[0]
		?.toUpperCase()
		.concat(country.slice(1))}`;
};

console.log(cityCountry("Karachi", "pakistan"));
console.log(cityCountry("lahore", "india"));
console.log(cityCountry("new york", "united states"));
