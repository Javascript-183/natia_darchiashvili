// @ts-check
"use strict";

// მაგალითი 1: 1.	შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს
//  ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
let i = 0;

while (i <= myArray.length) {
    newArray.push(myArray[i]); i = i + 3
}

// მაგალითი 2: 2.	შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს.
// მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
let myArray1 = [];
let number = 10;

while (number <= 10 && number >= 1) {
    myArray1.push(number); number = number - 1
}

//მაგალითი 3: მოცემული მასივიდან ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე.
//  შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით,
//  ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let myArray3 = ['John', 'Nick', 'Mary', 'Sue', 'Ann', 'Bob']

function removeBob(myArray3) {
    for (let i = 0; i < myArray3.length; i++) {
        if (myArray3[i] === 'Bob') {
            myArray3.splice(i, 1);
            break
        }
    }
    return myArray3;
}

//ან 
let myArray3 = ['John', 'Nick', 'Mary', 'Sue', 'Ann', 'Bob']

console.log(myArray3);
const index = myArray3.indexOf('Bob');
myArray3.splice(index, 1);
console.log(myArray3);

//მაგალითი 4: 4.	ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია,
// რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს,
// მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power,
//  მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

let number = 5;
let power = 3;

function fun(number, power) {
    if (isNaN(number) || isNaN(power)) {
        console.log("Use only Numbers")
    } else {
        let result = 1;
        while (power >= 1) {
            result *= number;
            power--;
        }
        console.log(result);
    }
}

fun(5, 3);


//მაგალით 5: შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე
//  უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz,
//  ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz,
// ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

function myFunction() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz.");
        } else if (i % 3 === 0) {
            console.log(i + "  Fizz");
        } else if (i % 5 === 0) {
            console.log(i + " Buzz");
        }
    }
}
myFunction();

//მაგალითი 6: შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს
// და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120

function factorialCalculator(number) {
    if (number < 0)
        return -1;
    else if (number == 0)
        return 1;
    else {
        return (number * factorialCalculator(number - 1));
    }
}
factorialCalculator(5);

//მაგალითი 7: შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს
//  მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function capitalizeSringFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
console.log(capitalizeSringFirstLetter("javascrpt"))

//მაგალითი 8: შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი.
// მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია
// this string is not blank-ს თუ ცარიელი არაა.

function blankStringChecker(checkstring) {
    if (!checkstring || checkstring.length === 0) {
        return "String is empty"
    }
    else {
        return "Not Empty String"
    }
}

let myString = "javascript";
console.log(blankStringChecker("myString"))

//მაგალითი 9: შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად.
// მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში.
//  [“Hello”, “World”]

function stringToArray(testString) {
    let array = testString.split(" ")
    return array
}

console.log(stringToArray("Hello, World"))

//მაგალითი 10: შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში:
// მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com,
// თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

function getMsakedEmail(email) {
    let skipFirstChars = 5;
    let firstThreeChar = email.slice(0, skipFirstChars);

    let domainIndexStart = email.lastIndexOf("@");
    let maskedEmail = email.slice(skipFirstChars, domainIndexStart)
    maskedEmail = maskedEmail.replace(/./g, '*')
    let domain = email.slice(domainIndexStart, email.length);

    return firstThreeChar.concat(maskedEmail).concat(domain);
}

let email = " beqa.beqauri@gmail.com";
console.log(getMsakedEmail(email));



// მაგალითი 11: შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

let string = 'Javascript is not as easy as I thought it would be';

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log(longestWord(string))


//მაგალითი 12: შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად.
// num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები
// სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს,
// რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი.
// ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით



