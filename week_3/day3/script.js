// //ex1//

// let addressNumber = "5519"
// let addressStreet = "Lewis" 
// let country = "USA"

// let global_address = addressNumber +" "+ addressStreet +" "+ country

// console.log(global_address)



// //ex2//


// let birthYear = 1991
// let futureYear = 2025
// let futureAge = futureYear - birthYear

// console.log ("i will be " +  futureAge + " " + "in" + " 2025")

// //ex 3//

// let pets = ['cat','dog','fish','rabbit','cow']

// console.log (pets[1])

// pets.splice(3,1, "horse")

// pets.length
// console.log()

//ex1 next lesson//
// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

prompt("how old are you?") = userAge

if (userAge == 18) {
console.log ("Congratulations on your first year of driving!")
}
else if  (userAge > 18 ){
	console.log ("Powering on, Enjoy the ride!")
}
else if (userAge <18) { 
Console.log ("sorry you are too young")
}
