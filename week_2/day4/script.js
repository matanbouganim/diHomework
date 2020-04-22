//alert("Javascript is loaded, open console");
// Daily challenge :
// Write a function that takes a list of strings and prints them,
// one per line, in a rectangular frame. For example the list 
//[“Hello”, “World”, “in”, “a”, “frame”] gets printed as:

// console.log("*********")
// console.log("* Hello *")
// console.log("* World *")
// console.log("* in    *")
// console.log("* a     *")
// console.log("* frame *")
// console.log("*********")



let msg1 =["*********" , "* Hello *" , "* World *" , "* in *" , "*a*" , "*frame*" , "*********"]
let msg2 =["Hello" , "World" , "in" , "a" , "frame"]

//stars1(msg1);


function stars1 (astr) {
	var i;
	for(i = 0; i < astr.length; i++) {
 		console.log(astr[i])
  	}
 }

stars2(msg2);


function stars2 (astr) {
	var i;
	var f="*********" 
	console.log(f)
	for(i = 0; i < astr.length; i++) {
		var s 
		s = "* "+astr[i]+ ' '.repeat(f.length-astr[i].length-4)+" *"
 		console.log(s)
  	}
  	console.log(f)

 }
