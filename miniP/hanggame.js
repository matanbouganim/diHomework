//Create a hanging game:
// you must create a secret word of at least 8 letters and two similar letters.
// We will only be able to see in the console from the beginning of the game the first and last letter of the game, the other letters of the word will be replaced by “stars”,like this J********t no like this J, * , * , * ,  * , * , * , * , * , * , T
// We will only have 10 attempts to find this word by guessing letter by letter, use prompt() for user input that will ask for a single letter and not a number.
// When the player finds a similar letter (like ‘a’ in the word ‘javascript’ Ja*a*t ) it will have to replace the corresponding stars in a single move.
// A message will announce the player his victory and stop the game.

//secret word is the word for the hangman game, this code will work for any word.

var secretWord = "EREZCOFFEE"
var secretWord_arr = secretWord.split("")
var displayWord = secretWord_arr [0]+ "*".repeat(secretWord.length-2) + secretWord_arr [secretWord_arr.length-1]
var displayWord_arr = displayWord.split("")
console.log(displayWord_arr)
console.log(secretWord_arr)

//console.log(starsExist(secretWord_arr))
var cont = true 
var tries = 1 


function starsExist(arr){
	var i = arr.indexOf('*')
	return i > -1
}

console.log(displayWord_arr.join(''))

//while (cont == true && tries <11) {  
while (tries <11 && starsExist(displayWord_arr)){
	var letter = prompt("Please guess a single letter" + " attempt " + tries + " out of 10").toUpperCase() 
	var i = secretWord_arr.indexOf(letter) 

	if (i > -1) {
		if (displayWord_arr[i] = '*'){
			var j = i
			var tmp_arr = secretWord_arr
			while(j > -1){
				displayWord_arr[i] = letter[0]
				tmp_arr = tmp_arr.slice(j+1)
				console.log(j)
				console.log("display word =" + displayWord_arr.join(''))
				console.log("tmp_arr sliced =" + tmp_arr)
				j = tmp_arr.indexOf(letter[0])
				i = i+j+1
				
				
			}
		}
	}
	console.log("display word=" + displayWord_arr.join(''))
	tries++ 
}
if (starsExist(displayWord_arr))
	alert("Good luck next time")
else 
	alert("Great job!")


//explination of the process in english....
//var userInput = prompt("Please enter a letter")
/*
create a function "f" that returns true if we have * in display array
create a loop calling F while F returns true & number of tries <10 - we need to continue
Show displayWord_Arr
accept from user a single character 
search in the secret word for users single character if exists
if exists, replace * with letter
end of loop
*/