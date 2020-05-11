function playTheGame(){
	alert("GAME PLAYED")
			var computerNumber = Math.floor((Math.random() * 10) + 1);
	
function confirm(){
	var yesorno = prompt("Hello, Do you wish to play a game? please type 'yes' or 'no' ")
	
	if (yesorno == "yes") {
		  userNum = prompt("Excellent, please enter a number between 0-10")
	} 

	else {
		alert ("No Problem, Goodbye!")
	}

	if (userNum<0 || userNum>10){
	alert ("sorry, thats not a good number. Bye!")
}
else {
	playTheGame()
}



//execution//

confirm();