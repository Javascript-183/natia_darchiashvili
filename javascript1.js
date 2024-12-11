// @ts-check
"use strict";

//მაგალითი1: რიცხვის კვადრატი

//let number = prompt('Enter number: ')
//function squareNumber(number) {
//    return number * number;
//}

//alert(`Answer is ${squareNumber(number)}`)


//მაგალითი2: ცელსიუსები გადავა ფარენჰეიტებში:

//let celsius = prompt("Enter temperature in Celsius: ");
//let fahrenheit = (celsius * 9 / 5) + 32;
//alert(`The temperature in Fahrenheit is ${fahrenheit.toFixed(2)}`);


//მაგალითი 4: ნაკიანი წელის გადამოწმება:

//const year = prompt('Enter a year:');

//checkLeapYear(year);

//function checkLeapYear(year) {

//    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//       console.log(year + ' is a leap year');
//    } else {
//        console.log(year + ' is not a leap year');
//    }
//}

//მაგალითი 5:კალკულატორი :

const number1 = parseFloat(prompt('Enter  number 1: '));
const action = prompt('Enter action ( either +, -, * or / ): ');
const number2 = parseFloat(prompt('Enter  number 2: '));

let result;

if (action == '+') {
    result = number1 + number2;
}
else if (action == '-') {
    result = number1 - number2;
}
else if (action == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${action} ${number2} = ${result}`);


//მაგალითი 3:

function inRange(number, startNumber, lastNumber) {
    if (number >= startNumber && number <= lastNumber) {
        return `number is in the range`;
    }
    else {
        return `number in not in the range`;
    }
}



