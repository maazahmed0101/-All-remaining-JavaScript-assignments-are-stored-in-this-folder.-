// let function1 = ()=>{
//     let currentTime = new Date();
//     console.log(currentTime);
// }
// let ok = function1()
// let geo = function1()

// QUECCTION--2;
// let secound = ()=>{
//     let firstname = 'maaz';
//     let secoundname = 'ahmed'
//     let update = `welcome ${firstname}${secoundname}`
//     console.log(update)
//     return;
// }
// let geo = secound();

// // QUECTION--3;
// let third = ()=>{
// let num1 = 12;
// let num2 = 23;
// let total = num1+num2;
// console.log(total)
// }
// let geo = third()

// QUECTION--4;
// let four = ()=>{
// let num1 = 23;
// let num2 = 34;
// let operater = '%'

// if(operater=== '+'){
//   console.log(num1+num2)
// }else if(operater=== '-'){
//     console.log(num1-num2);
// }else if(operater==='*'){
//     console.log(num1*num2)
// }else if(operater=== '%'){
//     console.log(num1%num2)
// }
// }

// let khaternak = four()

// auection--5;
// let five = ()=>{
//     let num1 = 23;
//     let num2 = 34;
//     let ok = num1*num2;
//     console.log(ok)
//     return;
// }
// let ok = five()

// quection--6;
// let six = (n)=>{
//     let ok = 1;
//     for(let i = 1;i<=n;i++){
//         ok = ok*i
//     }
//     return ok;
// }
// let ok = six()
// console.log(six(5))

// QUECTION--7;
// let seven = (base,prependicular)=>{

//     const square  = (num)=>{
//         return num*num
//     }
//     let sum = square(base) + square(prependicular);
//     return Math.sqrt(sum)

// }
// console.log(seven(6,8))

// quection--9;
// Function to calculate rectangle area
function areaRectangle(width, height) {
    return width * height;
}

// i. Arguments as value
console.log("Area with direct values: " + areaRectangle(5, 10));

// ii. Arguments as variables
let w = 6;
let h = 8;
console.log("Area with variables: " + areaRectangle(w, h));


// quection--10;
function isPalindrome(str) {
    let reversed = str.split('').reverse().join(''); // string ko reverse karo
    return str === reversed; // check karo original = reversed
}

// Test
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// quection--11;
function capitalizeWords(str) {
    let words = str.split(' '); // string ko words me tod do
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// Test
console.log(capitalizeWords('the quick brown fox')); // 'The Quick Brown Fox'

// quection--12
function findLongestWord(str) {
    let words = str.split(' '); // string ko words me tod do
    let longest = '';
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

// Test
console.log(findLongestWord('Web Development Tutorial')); // 'Development'


// quection--13;
function countLetter(str, letter) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count++;
        }
    }
    return count;
}

// Test
console.log(countLetter('JSResourceS.com', 'o')); // 2

// quection--14;
// Function to calculate circumference
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
}

// Function to calculate area
function calcArea(radius) {
    let area = Math.PI * radius * radius;
    console.log("The area is " + area);
}

// Test
calcCircumference(5); // example radius 5
calcArea(5);
