//Arrays Problem 4
/*
Write a JavaScript function to remove duplicate numbers from an array of numbers.

Example array: [1,2,2,4,5,4,7,8,7,3,6]

NOTE: Do NOT use the Set method.
*/

const myArray = [1,2,2,4,5,4,7,8,7,3,6];
const secondArray = ['red', 'red', 'white', 'blue', 'blue', 'white', 'green'];

let arr = ["scale", "happy", "strength",
            "peace", "happy", "happy"];
 
    function removeDuplicates(arr) {
        let unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
 
    //console.log(removeDuplicates(secondArray));

    myFunction = array => {
    	let noDuplicateArray = [];
    	array.forEach(element => {
    		if(!noDuplicateArray.includes(element)) {
    			noDuplicateArray.push(element);
    		}
    	});
    	return noDuplicateArray;
    }

    //console.log(myFunction(secondArray));
    console.log(secondArray.forEach(element + ' ball');