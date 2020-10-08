let gcd;
// take input
let number1 = prompt('Enter a first positive integer: ');
let number2 = prompt('Enter a second positive integer: ');
let number3 = prompt('Enter a third positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2 && i<=number3; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0 && number3 % i == 0) {
        gcd = i;
    }
}

// display the gcd
document.write(`GCD of ${number1} , ${number2} and ${number3} is ${gcd}.`);