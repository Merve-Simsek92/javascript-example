

// 1.Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10



// function addup(n) {
//     sum=0;

//     for (i=0; i<n+1; i++) {
        
//         sum+=i;
//     }
//     console.log(sum);
    
// }
// addup(4);

// 2.Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.


// function cubes(num) {
//  console.log(num**3);
    
// }
// cubes(3);
    
// function reversed(str) {
//     result=""
//     for (i=-1;i>-(str.length);i--);
//       result+=str[i];
//       console.log(result)
//     }
// console.log(reversed("merve"));  


//Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436

// function matchHouses(step) {
//     return 6*step-(step-1)
    
// }
// console.log(matchHouses(87));

//Area of a Triangle

// function triArea(base,height) {
//     return base*height/2;
    
// }
// console.log(triArea(3,2));

//Power Calculator
// function circuitPower(voltage,current) {
//     return voltage*current
// }
// console.log(circuitPower(230,10))

//Return the Sum of Two Numbers

// function addition(num1,num2) {
//     return num1+num2;
    
// }
// console.log(addition(3,7));

//How Edabit Works;
// function hello() {
//     return "hello edabit.com"
    
// }
// console.log(hello())


//Return the First Element in an Array

// function getFirstValue(list) {
//     return list[0];

    
// }
// console.log(getFirstValue([1,2,3]))

//How Much is True?
//countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0


// function count(list) {
//     result=0;
//     for (let i of list){
//         if(i==true){
//             result+=1;
//         }
//     }
//    return result; 
// }
// console.log(count([false,true]))

// Convert Age to Days
// function calcAge(age) {
//     return age*365;
    
// }
// console.log(calcAge(20));

//Find Number of Digits in Number

// function num_of_digits(num) {
// count=0;
// for (let i of num.toString()) {
//     count+=1;
// }
// return count
// }
// console.log(num_of_digits(125000099999));

//Return Something to Me!
// function givemeSomething(str) {
    
//     return "something "+str;
    
// }
// console.log(givemeSomething("Bob Jane"))
//Is the Number Less than or Equal to Zero?
// function lessThanEqualTozero(num) {
//     if(num<=0){
//         return true;
//     }
//     else{
//         return false
//     }
// }
// console.log(lessThanEqualTozero(0))

//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// function sevenBoom(arr){
//     for (let i of arr){
//         for (let j of i.tostring()){
//             if(7==j){

                
//             }else{
//                 "there is no 7 in the array"
//             }
            
//         }
//     }
// } 
// console.log(sevenBoom([1,2,7]));

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.

// Examples
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

// function possibleBonus(a,b) {
//     if(a<b){
//         if(b-a<=6){
//             return true;
//         }else{
//             return false;
//         }
//     }else {
//         return false;

//     }
    
// }
// console.log(possibleBonus(1,9));

// The right shift operation is similar to floor division by powers of two.

// Sample calculation using the right shift operator ( >> ):

// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

// function reserved(str) {
//     var result="";
//     for(var i=str.length-1;i>=0;i--) {
//         result+=str[i];

//     }
//   return result
    
// }
// console.log(reserved("merve"))

// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true

// changeEnough([30, 40, 20, 5], 12.55) ➞ true

// changeEnough([10, 0, 0, 50], 3.85) ➞ false

// changeEnough([1, 0, 5, 219], 19.99) ➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

// function changeEnough(list,pocket) {
//   var result;
//   result=list[0]*0.25 + list[1]*0.10 +list[2]*0.05 +list[3]*0.01;
//   if(pocket>result){
//     return false;
//   }else{
//     return true
//   }
  
// }
// console.log(changeEnough([1, 0, 5, 219], 19.99))
    
// Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".

// const REGEXP = /blue|red/

// "red flag".match(REGEXP)  // red
// "blue flag".match(REGEXP)  // blue

// // Matches "blue" in "blue flag" and "red" in "red flag".
// Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

// Examples
// "red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

// "yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
