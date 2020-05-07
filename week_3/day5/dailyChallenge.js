// Daily Challenge : Letter Count
// 1. Ask the user for several words and save them. Check if the words given are strings
// 2. Determine which word has the greatest number of repeated letters and console.log this word.


userInput = prompt ("Please type in several random words")


var words = userInput.split(" ");
console.log(words);  

var lgth = 0;
var longest;

for(var i=0; i < words.length; i++){
    if(words[i].length > lgth){
        var lgth = words[i].length;
        longest = words[i];
    }      
} 
alert ( "the longest word is " + longest)