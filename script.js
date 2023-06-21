//Arrays Problem 4
/*
Write a JavaScript function to remove duplicate numbers from an array of numbers.

Example array: [1,2,2,4,5,4,7,8,7,3,6]

NOTE: Do NOT use the Set method.
*/

const myArray = [1,2,2,4,5,4,7,8,7,3,6];
const secondArray = ['red', 'red', 'white', 'blue', 'blue', 'white', 'green'];

myFunction = array => {
	let noDuplicatesArray = [];

	array.forEach(element => {
		if(!noDuplicatesArray.includes(element)){noDuplicatesArray.push(element)}
	});
		return noDuplicatesArray;
}
console.log(myFunction(myArray));
