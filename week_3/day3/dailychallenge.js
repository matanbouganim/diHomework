// //   Create a string that has the word “not” and “bad” inside
// // Create another variable that should find the first appearance of the substring ‘not’ and ‘bad’.
// // If the ‘bad’ follows the ‘not’, then it should replace the whole ‘not’…’bad’ 
// 		substring with ‘good’ than console.log the result.
// // If it doesn’t find ‘not’ and ‘bad’ in the right sequence (or at all), just console.log
// 		 the original sentence.
//example://
// //   Your string is : 'This dinner is not that bad!', the result is : 'This dinner is good!'
// //   Your string is : 'This movie is not so bad!' the result is : 'This movie is good!'
// //   Your string is : 'This dinner is bad!' the result is : 'This dinner is bad!'**



var movieSentence = "This movie is not so bad!"
var dinnerSentence = "This dinner is not that bad!"
var subNot = "not";
var subBad = "bad";



if (movieSentence.includes(subNot)) {
	console.log(movieSentence)
	console.log("This movie is good!")
}
else{
	console.log("sorry you didnt enjoy your movie")
}

if (dinnerSentence.includes(subNot)){

console.log(dinnerSentence)
console.log("This dinner is good!")
}
else {
console.log("sorry it was bad")}
