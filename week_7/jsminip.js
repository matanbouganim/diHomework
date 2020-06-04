
const tictactoegame = new TicTacToeGame();

tictactoegame.start();

function TicTacToeGame(){
	const board = new Board();
	const humanplayer = new HumanPlayer(board);
	const computerplayer = new ComputerPlayer(board);
	let turn = 0;

this.start = function(){
   const config = {childList: true};
   const observer = new MutationObserver (()=> takeTurn());
   board.positions.forEach((el)=>observer.observe(el, config));
   takeTurn();
}
 function takeTurn(){
 	if(turn % 2 === 0){
 		humanplayer.takeTurn()
 	}
 	else {
 		computerplayer.takeTurn();

 	}

turn++;

 }
}

function Board(){
this.positions = Array.from(document.querySelectorAll('.col'));

}

function HumanPlayer(board){
this.takeTurn = function(){

board.positions.forEach(el=> el.addEventListener('click', handleTurnTaken));

 }

 function handleTurnTaken(event){
 	event.target.innerText = 'X ';
 	board.positions.forEach(el=> el.removeEventListener('click', handleTurnTaken));
 }
}

function ComputerPlayer(board){

this.takeTurn = function(){ 
	
 }
}  

