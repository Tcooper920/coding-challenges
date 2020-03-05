// 1. Write a function that takes three arguments - all numbers - adds them together, split the result in 3 and displays the result on the console.

function addDivide(numOne, numTwo, numThree) {
var equation = ((numOne + numTwo + numThree)/3);
console.log(equation);
}

addDivide(3, 3, 3);

// 2. Write a function that takes an array of numbers as an argument. Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log(“Sorry, no 3-divisible numbers”). (Think of push() method)

var newListArray = [];

function listNumbers(myArray) {
	for (var i = 0; i < myArray.length; i++) {
		if (myArray[i] % 3 === 0) {
			newListArray.push(myArray[i]);
		}

	}
	console.log(newListArray);

	if (newListArray == 0) {
		console.log("Sorry, no 3-divisible numbers")
	}
}

listNumbers([1,2,3,4,5,6,7,8,9,10]);