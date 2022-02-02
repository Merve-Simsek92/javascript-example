

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

// let i=0;
// let sum=0;
// // while (i<6){
// //     sum+=i
// //     i++
// // }
// // console.log(sum)

// do {
//     sum+=i
//     i++
// }while(i<6){
//     sum+=i
//     i++
// }
// console.log({sum},{i})

// // let i=+prompt('bir sayı girin');
// // while (isNaN(i)){
// //     i=+prompt("bir sayı girin")
//}
// let str="clarusway"
// for (let i= 0;i <str.length;i++) {
//    if(i%5==0) continue;
//    console.log(i)
    
// }

// let x,y;
// let count=0;
// let cift=0;
// while(true){
//     x=Math.floor(Math.random()*6+1);
//     y=Math.trunc(Math.random()*6+1);
//     if(x==6 && y==6){
//         count++;
//         console.log(x,y,"kazandınız");
//         break;
//     }else if(x==y && x!=6){
//         cift++
//         console.log(x,y,'${cift}. cift zar' );
//         if (cift==3){
//             console.log('kaybettiniz');
//             break;
//         }

//     }
// }

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

// function generation(x,y) {
//     let f = {"-3":"great grandmother","-2":"grandmother","-1":"mother","0":"me!","1":"daughter","2":"granddaughter","3":"great granddaughter"}
//    let m = {"-3":"great grandfather","-2":"grandfather","-1":"father","0":"me!","1":"son","2":"grandson","3":"great grandson"}
//    if(y=='f')return f[x]
//    return m[x]
//    }
// The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// function concat(list) {
// 	result=[];
// 	for(let i of list){
// 		result=i.concat(result)
// 	}return  result
// }
// console.log(concat([1], [2], [3], [4], [5] ,[6], [7])

// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]

// function compact(list){
// 	result=[]
// 	for (let i of list){
// 	if(i!="" || i!=false || i!=0 ){
// 		result.push(i)
		 
	
// 	}}
	
// 	return result
// }
// console.log(compact([0, 1,false, 2, "", 3]));

// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.
// Examples
// whichIsLarger(() => 5, () => 10) ➞ "g"

// whichIsLarger(() => 25,  () => 25) ➞ "neither"

// whichIsLarger(() => 505050, () => 5050) ➞ "f"
// Notes
// This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).


// function whichIsLarger(f, g) {
// 	if(f>g){
// 		return "f"
// 	}else if(f==g){
// 		return "neither"
// 	}else if(f<g){
// 		return "g"
// 	}
// }
// console.log(whichIsLarger(5,10))


// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300
// //
// function addUp(n){
// 	if(n==1){ return 1}
//   return n + addUp(n-1)}
// console.log(addUp(4))


// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

// Examples

// // function binary(n){
// // 	let result=n.toString(2)
// // 	return result
// // }
// // console.log(binary(5))

// // function shiftToLeft(a,b){
// // 	return a*2**b
// // }
// // console.log(shiftToLeft(46,6))

// // // Calling makePlusFunction(5) returns a new function that takes an input,
// // // and returns the result when adding 5 to it.

// // const plusFive = makePlusFunction(5)

// // plusFive(2) ➞ 7

// // plusFive(-8) ➞ -3

// // // Calling makePlusFunction(10) returns a new function that takes an input,
// // // and returns the result when adding 10 to it.

// // const plusTen = makePlusFunction(10)

// // plusTen(0) ➞ 10

// // plusTen(188) ➞ 198

// // plusFive(plusTen(0)) ➞ 15

// plusadd=(a)=>
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false


//    function sortArray(list1){
//    list1.sort(function(x,y){
//            return x-y;     })
//    console.log(list1);}

//    function sortArray(list2){
//     list2.sort(function(x,y){
//             return x-y;     })
//     console.log(list2);}
 


//  function cannest(list1,list2){
//      if((list1[0]>list2[0])&& (list1[list1.length]<list2[list2.length]))
//  {return true}else{
//      false
//  }}
//  console.log(cannest([1, 2, 3, 4],[0, 6]))

//  sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

function sevenBoom(list){
    word=""
    for(let i of list){
        word+=i
    }return 
    for(let j in word) {
        console.log(j)
        
    
        
       
        }

    }
    

console.log(sevenBoom([1,2,3,4,7]));
