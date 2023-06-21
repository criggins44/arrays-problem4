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
//an empty array that will store elements based on the conditions below

	array.forEach(element => {
		if(!noDuplicatesArray.includes(element)){noDuplicatesArray.push(element)}
	});
/*if each element being stored in the noDuplicatesArray is not already included,
	it will be added to the array using the push method
*/
		return noDuplicatesArray;
/*returns the words that don't already exist in the array that is being filled with 
		elements from the array passed into the function
		*/
}

console.log(myFunction(myArray));
