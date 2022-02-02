
function reversed(word){
    var result="";
    if(word.length>1){
        for(var i=word.length-1;i>=0;i--){
            result+=word[i]
        }return result
    }
}

console.log(reversed("merve"));

function reserved(str) {
       var result="";
    for(var i=str.length-1;i>=0;i--) {
            result+=str[i];
    
        }
  return result
        
 }
 console.log(reserved("merve"))

//  add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"

// function add_ly(word){

//     return word+"ly"
// }
// function add_less(word){
//     return word+"less"
// }  
// console.log(add_ly("hopeless")) ;
// console.log(add_less("ruth")); 

function sevenBoom(list){
    word=""
    result=[]
    for(let i of list){
        word+=i
    }result=word.split("")
    return result;
    for(let j of result){
        }
        
    }
    

    
        
    
        
       
        

    
    console.log(sevenBoom([1,2,3,4,7]));



    console.log((5).toString(2))

//     bitwiseAND(6, 23) ➞ 00000110

// bitwiseOR(6, 23) ➞ 00010111

// bitwiseXOR(6, 23) ➞ 00010001

function bitwiseAND(a,b){
    return (a).toString(2) & (b).toString(2);
}
console.log(bitwiseAND(6,23))

function bitwiseOR(a,b){
    return (a).toString(2) | (b).toString(2);
}
console.log(bitwiseOR(6,23))
function bitwiseXOR(a,b){
    return (a).toString(2) ^ (b).toString(2);
}
console.log(bitwiseXOR(6,23))

// numberSquares(2) ➞ 5

// numberSquares(4) ➞ 30

// numberSquares(5) ➞ 55
// Explanation
// If n = 0 then the number of squares is 0
// If n = 1 then the number of squares is 1 + 0 = 1
// If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
// If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
// As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.

// Notes
// Input is a positive integer.
// Square pyramidal number.

// function numberSquares(n){
//     if(n==0){
//         return 0;
//     }else if(n==1){
//         return 1;
//     }return  n*n + numberSquares(n-1);
// }
// console.log(numberSquares(5))


//  var l1=[1,2,3];
// let x=l1.reverse().join("")
// console.log(x)

// var addTwoNumbers = function(l1, l2) {
// var x=l1.reverse().join("");
//    var y=l2.reverse().join("");
//     var result=Number(x)+Number(y);
//     result2=String(result).split().reverse();
//     for(let i in result2){
        
//         result3=[].push(Number(i));

//     }return result3;
    
// }
// console.log(addTwoNumbers([2,4,3],[5,6,4]));

// var isPalindrome = function(x) {
//     if(x>0){
//     return String(x).split(" ").reverse()==String(x).split(" ") ? true : false}
//     else{
//         return false
//     }
// };
// console.log(isPalindrome(121))

// var isPalindrome = function(x) {
    
//     return String(x).split("")==String(x).split("");
    
        
//     }
// console.log(isPalindrome(121))



// var mergeTwoLists = function(list1, list2) {
//     var result=list1.concat(list2);
//     result.sort(function(x,y){
//         return x-y;})
//     return result
// };
// console.log(mergeTwoLists([1,2,3],[3,4,5]))


// var reverse = function(x) {
    
//  if (x > -10 && x < 10) return x

//   const sign = x < 0 ? -1 : 1
//   x = Math.abs(x)
//   let reversedStr = x.toString().split('').reverse().join('')
  
//   let reversedNumber = +reversedStr.replace(/^[0]+/, '') * sign

//   const limit = Math.pow(2, 31)
//   if (reversedNumber < -limit || reversedNumber > limit - 1) return 0
  
//   return reversedNumber 
    
// };

// A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.

// Create a function that takes an integer n and returns the nth tetrahedral number.

// Alternative Text

// Examples
// tetra(2) ➞ 4

// tetra(5) ➞ 35

// tetra(6) ➞ 56
// Notes
// There is a formula for the nth tetrahedral number.


function tetra(n){
    if(n==1){
        return 1;
    }
    return n*(n+1)/2 + tetra(n-1)
}
console.log(tetra(6))