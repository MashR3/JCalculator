var operation = prompt('Welcome to Java Calculator. Please select an operator:' + '\n ' + '\n [a] for Addition'+ '\n [s] for Subtraction' + '\n [d] for Division' + '\n [m] for Multiplication' + '\n [ad] for Advanced Operators').toLowerCase();

if (operation === "a") {
	var no1 = parseFloat(prompt('Enter First Number'));
	var no2 = parseFloat(prompt('Enter Second Number'));
	alert ("The sum is " + (no1 + no2) + ("!"));


} else if (operation === "s") {
	var no1 = parseFloat(prompt('Enter First Number'));
	var no2 = parseFloat(prompt('Enter number to subract'));
	alert ("The answer is " + (no1 - no2) + "!");


} else if (operation === "d") {
	var no1 = parseFloat(prompt('Enter Number to be divided'));
	var no2 = parseFloat(prompt('Enter number to divide by'));
	alert ("The answer is " + (no1 / no2) + "!");

} else if (operation === "m") {
	var no1 = parseFloat(prompt('Enter First Number'));
	var no2 = parseFloat(prompt('Enter Second Number'));
	alert ("The answer is " + (no1 * no2) + "!");

} else if (operation === "ad") {
	var adop = prompt('Please select an advanced operator:' + '\n ' + '\n [sq] to square your number ( x^2 )' + '\n [r] to find the square root' + '\n [p] for power function (x^y)')

	if  (adop === "sq") {
		var no2 = parseFloat(prompt('Enter number to be squared'));
		alert ("The square is " + (no2 ** 2) + "!");
	

	} else if (adop === "r") {
		var no2 = parseFloat(prompt('Enter number to find the square root of'));
		alert ("The square root is " + (Math.sqrt(no2)) + "!");


	} else if (adop === "p") {
		var no2 = parseFloat(prompt('Enter base number'));
		var no3 = parseFloat(prompt('Enter number power'));
		alert ("The answer is " + (Math.pow(no2, no3)));

	} else {
  		alert('Please select a valid operator!');
}

} else
	alert('Please select a valid operator!');

