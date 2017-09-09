var operation = prompt

var operation = prompt('Welcome to Java Calculator. Please select an operator:' + '\n ' + '\n [a] for Addition'+ '\n [s] for Subtraction' + '\n [d] for Division' + '\n [m] for Multiplication' + '\n [ad] for Advanced Operators');


if (operation === "a") {
	var no1 = prompt('Enter First Number');
	var no2 = prompt('Enter Second Number');
	no1 = parseFloat(no1)
	no2 = parseFloat(no2)
	alert ("The sum is " + (no1 + no2) + ("!"))


} else if (operation === "s") {
	var no1 = prompt('Enter First Number');
	var no2 = prompt('Enter number to subract');
	no1 = parseFloat(no1)
	no2 = parseFloat(no2)
	alert ("The answer is " + (no1 - no2) "!")


} else if (operation === "d") {
	var no1 = prompt('Enter Number to be divided');
	var no2 = prompt('Enter number to divide by');
	no1 = parseFloat(no1)
	no2 = parseFloat(no2)
	alert ("The answer is " + (no1 / no2) + "!")




} else if (functio === d) {
  prompt('Enter First Number');
} else if (functio === m) {
	prompt('Enter First Number')
}else {
  alert('Please select a valid operator!');
} 

// if (functio = a) {
// 	alert('wooo');
// }

// var function = (a || s || d || m || ad);

// if (functio = a|| s || d || m || ad) {
// 	alert("Please choose a valid operator!") 
// }

