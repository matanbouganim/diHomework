

var numBottles = prompt("enter any number greater than zero") 
while (isNaN(numBottles)|| numBottles < 1) { 
	numBottles = prompt("enter any number greater than zero") 
}
var iterator = 1 
var singleBott = "bottle"
var multiBott = "bottles"
var bott = (numBottles ==1 ? singleBott : multiBott);
while (numBottles > 0 ){

	console.log(numBottles + " " + bott + " of beer on the wall")
	console.log(numBottles + " " + bott + " of beer")
	if (numBottles - iterator >= 0) {
		console.log("Take " + iterator + " down, pass it around")
	}	

	numBottles = numBottles - iterator
	iterator++ 
	bott = (numBottles ==1 ? singleBott : multiBott);

	if (numBottles > 0) {
		console.log(numBottles + " " + bott + " of beer on the wall")
	}	
	if (numBottles <= 0) {
		console.log(" No more bottles of beer!")
	}
	
}


/* 
psudo code:
accept number of bottles from the user. Make sure the number is a numeric number > 0
declare local variable to be used as an iterator - set its initial value to 0
loop with condition and the condition should be as long as number of bottles remaining is > 0
	inside the loop, we need to print the song lines showing the current number of bottles
	increase number of the iterator 
	decrease the number of bottles

keep in mind. the last iteration, if the remaining bottles == 1, line must change grammer 
*/

// Daily challenge :
// You know the infamous song “99 Bottle of Beer?”

// You have to code the song to appear on the page.
// Ask the user to input a starting number of bottles of beer, and start the bottles falling.
// But instead of 1 falling each time, the number falling goes up by one each time.

// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall
// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall
// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ==============================

// How will you choose to make the song end?
// Make sure you get the grammer right…
// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around