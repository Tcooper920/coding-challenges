// 1. Write a function that takes three arguments - all numbers - adds them together, split the result in 3 and displays the result on the console.
/*
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

// 3. Write a function that takes an array of numbers as argument and lists in another array all numbers bigger than 10; if there are no numbers bigger than ten just console.log("no numbers bigger than 10");

var newListArray = [];

function listNumbers(myArray) {
	for (var i = 0; i < myArray.length; i++) {
		if (myArray[i] > 10) {
			newListArray.push(myArray[i]);
		}
	}

	console.log(newListArray);

	if (newListArray.length === 0) {
		console.log("No numbers bigger than 10")
	}
}

listNumbers([20,1,2,3,4,5,6,7,8,9,11,50,40]);


// 4. Write a function that takes a string as an argument and returns (console.logs) all the vowels in this string

function analyzeString(myString) {
	for (var i = 0; i < myString.length; i++) {
		var currentLetter = myString.charAt(i);
		if (currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u") {
			console.log(currentLetter);
		}
	}
}

analyzeString("Hello World");


// 5. Write a function that takes a string sentence as an argument and lists all the words that are longer than 5 characters in this sentence. IF there is no word longer than five characters console.log('very short words")

function myFunction(mySentence) {
	
	var sentenceArray = mySentence.split(" ");

	var wordList = [];

	for (var i = 0; i < sentenceArray.length; i++) {
		if (sentenceArray[i].length > 5) {
			console.log(sentenceArray[i]);
			wordList.push(sentenceArray[i]);
		}
	}
	if (wordList == 0) {
		console.log("Very short words.");
	}
}

myFunction("I am doing absolutely fantastic today");


// 6. Write a function that lists all the numbers from 0 to 100; If a number is divisible by 3 console.log("Fizz"); if a number is divisible by 5, console.log("Buzz"); if a number is divisible by both 3 and 5 console.log("FizzBuzz")

function numList() {
	for (var i = 0; i < 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log(i + " is divisible by 3 and 5 (FizzBuzz)");
		} else if (i % 3 == 0) {
			console.log(i + " is divisible by 3 (Fizz)");
		} else if (i % 5 == 0) {
			console.log(i + " is divisible by 5 (Buzz)");
		} else {
			console.log(i);
		}
	}
}

numList();

*/

// 7. Create a function that takes in a string of multiple words and returns the first word with “ish” added to the end. Example:
// ishFunc(“Soup is my favorite.“) -> “Soupish”

var wordList = [];

function firstWordIsh (myString) {
	wordList = myString.split(" ")
	console.log(wordList[0] + "ish");
}

firstWordIsh("Soup is my favorite food.");


// 8. Write a function that takes and array of numbers and adds the sum of them.

var sumOfNumbers = 0;

function addSum(myArray) {
	for (var i = 0; i < myArray.length; i++) {
		sumOfNumbers = sumOfNumbers + myArray[i];
	}
	console.log(sumOfNumbers);
}

addSum([1, 2, 5, 6, 50, 20, 1, 1, 9]);


// 9. Write a function that takes a string argument and returns all the instances of vowels ex. -> “whatever” - returns “aee”

var arrayOfVowels = [];

function getVowels(myWord) {
	for (var i = 0; i < myWord.length; i++) {
		var currentLetter = myWord.charAt(i);
		if (currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u") {
			arrayOfVowels.push(currentLetter);
		}
	}
	console.log(arrayOfVowels);
}

getVowels("Hello World");


// 10. Create an array. Using the .forEach() method on the array, print each element to  the console. If you are unsure on how to use .forEach(), Google it.

var elementList = ["hello", 1, 2, 5, "hi", 99, 20];

elementList.forEach(printElement);

function printElement(item) {
	console.log(item); 
}

// Oggi's example:
// array.forEach(function(name) {
// 	console.log(name);
// }

// 11. Create a function that takes an array. Check to see if it contains a 5 or 6. If it does, return true, otherwise return false. Example:

var numberOfQualifyingNumbers = [];

function checkForNumbers(myArray) {
	for (var i = 0; i < myArray.length; i++) {
		if (myArray[i] === 5 || myArray[i] === 6) {
			numberOfQualifyingNumbers.push(i);
		}
	}
	if (numberOfQualifyingNumbers.length > 0) {
		console.log("true");
	} else {
		console.log("false");
	}
}

checkForNumbers([1, 3, 7, 8, 9, 6, 5]);


