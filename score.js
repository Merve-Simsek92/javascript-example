let player1=document.querySelector(".player1")
let player2=document.querySelector(".player2")
let input=document.querySelector("#inputscore")

let score1=document.querySelector(".score1");
let score2=document.querySelector(".score2");
let reset=document.querySelector(".reset")
playerscore1=0;
playerscore2=0;
winscore=5;

player1.addEventListener("click",()=>{
    if(playerscore1<winscore){
        playerscore1++;
        score1.innerHTML=playerscore1;
    }if(playerscore1==winscore){
        
        player1.style.backgroundColor="green"
        player2.style.backgroundColor="red"
    }
})
player2.addEventListener("click",()=>{
    if(playerscore2<winscore){
        playerscore2++;
        score2.innerHTML=playerscore2;
    }
})
reset.addEventListener("click",()=>{
    playerscore1=0;
    score1.innerHTML=playerscore1;
    playerscore2=0;
    score2.innerHTML=playerscore2;
    player1.style.backgroundColor="white"
        player2.style.backgroundColor="white"
    }
)
