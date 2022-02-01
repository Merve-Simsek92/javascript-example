
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
    