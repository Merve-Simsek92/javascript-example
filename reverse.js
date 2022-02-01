
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

function add_ly(word){

    return word+"ly"
}
function add_less(word){
    return word+"less"
}  
console.log(add_ly("hopeless")) ;
console.log(add_less("ruth")); 