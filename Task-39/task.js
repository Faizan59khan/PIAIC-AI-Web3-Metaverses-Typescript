// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
var cityCountry = function (city, country) {
    var _a, _b;
    return "".concat((_a = city[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase().concat(city === null || city === void 0 ? void 0 : city.slice(1)), ", ").concat((_b = country[0]) === null || _b === void 0 ? void 0 : _b.toUpperCase().concat(country.slice(1)));
};
console.log(cityCountry("Karachi", "pakistan"));
