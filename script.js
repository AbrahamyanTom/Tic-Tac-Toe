
function reset(){
    for(let k = 0; k < 9; k++){
        block[k].innerHTML = "";
    }
}

function isFull(block){
    for(let i = 0; i < 9; i++){
       if(block[i].innerHTML === ""){
            return false;
        }
    }
    return true;
}





let wrapper = document.querySelector(".tictactoe");
let block = document.querySelectorAll(".block");

let player = "X";
var playerInfo = document.querySelector(".player");

console.log(playerInfo);
playerInfo.innerHTML = "Հիմա քայլը " + player;
let j = 0;
while(j < 9){
    block[j].addEventListener('click', function(){
        
        if(this.innerHTML !== ""){
            alert("Պրձ էս էլ հարամիր");
            reset();
        }else{
            this.innerHTML = player;
        }

        if(isFull(block)){
            alert("Ոչ ոքի!");
            reset();
        }
        
        if((block[0].innerHTML === player && block[1].innerHTML === player && block[2].innerHTML === player) || (block[3].innerHTML === player && block[4].innerHTML === player && block[5].innerHTML === player) || (block[6].innerHTML === player && block[7].innerHTML === player && block[8].innerHTML === player) || (block[0].innerHTML === player && block[4].innerHTML === player && block[8].innerHTML === player) || (block[2].innerHTML === player && block[4].innerHTML === player && block[6].innerHTML === player) || (block[0].innerHTML === player && block[3].innerHTML === player && block[6].innerHTML === player) || (block[1].innerHTML === player && block[4].innerHTML === player && block[7].innerHTML === player) || (block[2].innerHTML === player && block[5].innerHTML === player && block[8].innerHTML === player)){    
            alert("Ոպշեմ " + player + " դու հաղթիր!");
            reset();
        }else if(block[0].innerHTML === player && block[1].innerHTML === player && block[2].innerHTML === player && block[3].innerHTML === player && block[4].innerHTML === player && block[5].innerHTML === player && block[6].innerHTML === player && block[7].innerHTML === player && block[8].innerHTML === player){
            alert("Helanq");
        }
        
        
        if(player === "X"){
            player = "O";
        }else{
            player = "X";
        }
        playerInfo.innerHTML = "Հիմա քայլը " + player;
    });
  
    j++;    
   
}











