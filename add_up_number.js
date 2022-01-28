

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

function sevenBoom(arr){
    for (let i of arr){
        for (let j of i.tostring()){
            if(7==j){

                
            }else{
                "there is no 7 in the array"
            }
            
        }
    }
} 
console.log(sevenBoom([1,2,7]));
