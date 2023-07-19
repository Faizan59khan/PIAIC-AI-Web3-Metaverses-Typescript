// 45) Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
	manufacturer: string;
	modelName: string;
	[key: string]: any; // Allow any additional properties with string keys
}

function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Car {
	const car: Car = {
		manufacturer,
		modelName,
	};

	options?.forEach(([key, value]) => {
		car[key] = value;
	});

	return car;
}

const carInfo: Car = createCar("Toyota", "Camry", ["color", "Silver"], ["year", "2023"]);
const carInfo2: Car = createCar("Toyota", "Camry");

console.log(carInfo);
console.log(carInfo2);
