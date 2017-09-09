var operation = prompt

var operation = prompt('Welcome to Java Calculator. Please select an operator:' + '\n ' + '\n [a] for Addition'+ '\n [s] for Subtraction' + '\n [d] for Division' + '\n [m] for Multiplication' + '\n [ad] for Advanced Operators');


if (operation === "a") {
	var no1 = prompt('Enter First Number');
	var no2 = prompt('Enter Second Number');
	no1 = parseFloat(no1)
	no2 = parseFloat(no2)
	alert ("The sum is " + (no1 + no2) + ("!"));


} else if (operation === "s") {
	var no1 = prompt('Enter First Number');
	var no2 = prompt('Enter number to subract');
	no1 = parseFloat(no1)
	no2 = parseFloat(no2)
	alert ("The answer is " + (no1 - no2) + "!");


} else if (operation === "d") {
	var no1 = prompt('Enter Number to be divided');
	var no2 = prompt('Enter number to divide by');
	no1 = parseFloat(no1)
	no2 = parseFloat(no2)
	alert ("The answer is " + (no1 / no2) + "!");

} else if (operation === "m") {
	var no1 = prompt('Enter First Number');
	var no2 = prompt('Enter Second Number');
	no1 = parseFloat(no1)
	no2 = parseFloat(no2)
	alert ("The answer is " + (no1 * no2) + "!");

} else if (operation === "ad") {
	var adop = prompt('Please select an advanced operator:' + '\n ' + '\n [p] to square your number ( x^2 )' + '\n [r] to find the square root')

	if  (adop === "p") {
	var no1 = prompt('Enter number to be squared');
	no1 = parseFloat(no1)
	alert ("The square is " + (no1 ** 2) + "!");

	} else if (adop === "r") {
	var no1 = prompt('Enter number to be squared');
	no1 = parseFloat(no1)
	alert ("The square is " + ( no1) + "!");


// } else 
//   alert('Please select a valid operator!');

