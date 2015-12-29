$(document).ready(function(){
for (var i = 1; i <= 100; i++) {
	var isDividibleByThree = i % 3 === 0;
	var isDivisibleByFive = i % 5 === 0;

	if (isDividibleByThree && isDivisibleByFive) {
		document.write('FizzBuzz<br />');
	}
	else if (isDividibleByThree) {
		document.write('Fizz<br />');
	}
	else if (isDivisibleByFive) {
		document.write('Buzz<br />');
	}
	else {
		document.write(i.toString()+'<br />');
	}
}
})