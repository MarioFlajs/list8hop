const dinoHop = document.getElementById('player');
const snake = document.getElementById('snake');
const snake2 = document.getElementById('snake2');
let clock = document.getElementById('clock');
const gameOver = document.getElementById('gameOv');
let m =  0;

function dino() { 
    if(dinoHop.classList != "dino"){

    
    dinoHop.classList.add("dino");
    setTimeout(function(){
            dinoHop.classList.remove("dino");
        },  600 );  

    }
} 

let isAlive = setInterval(function() {

    let dinotop = parseInt(window.getComputedStyle(dinoHop).getPropertyValue('top'));
    console.log(dinotop);

    let snakeLeft = parseInt(window.getComputedStyle(snake).getPropertyValue('left'));
    let snakeLeft2 = parseInt(window.getComputedStyle(snake2).getPropertyValue('left'));
    
    if(snakeLeft2 <90 && snakeLeft2 > 30 && dinotop >= 160  ){
        document.getElementById("gameOv").innerHTML =   "Game Over... Total score " + clock ;
        document.getElementById('snake2').style.animationDuration = '0s';
        document.getElementById('snake').style.animationDuration = '0s';
        document.getElementById('bac').style.animationDuration = '0s';;
    } 

    if(snakeLeft <90 && snakeLeft > 30 && dinotop >= 160  ){  
        document.getElementById("gameOv").innerHTML =   "Game Over... Total score " + clock ;
        document.getElementById('snake2').style.animationDuration = '0s';
        document.getElementById('snake').style.animationDuration = '0s';
        document.getElementById('bac').style.animationDuration = '0s'
    } 
  
    
 
},10);



document.addEventListener("keydown", function(e){
    if (e.code === "Space") {
        dino();
    } 
});


let time = setInterval(() => {
    clock = m++;
    if(isAlive !== true){
        document.getElementById("clock").innerHTML = `${clock}m`; 

    }
    if(document.getElementById('snake2').style.animationDuration === '0s'){
        document.getElementById("clock").innerHTML = '0m';
        m = 0;
    }
    

    

    
}, 100); 
 

document.getElementById("gameOv").addEventListener("click", function() {
    
    document.getElementById('snake2').style.animationDuration = null;
    document.getElementById('snake').style.animationDuration = null;
    document.getElementById('bac').style.animationDuration = null;
    document.getElementById("gameOv").innerHTML = ''; 
    document.getElementById("clock").ariaValueText = '0';
    

    return setInterval
    
  });
 