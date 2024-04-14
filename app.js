let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('.btn');
let p=document.querySelector('.statusText');
let turnO= true;
let moves=0;
const winningCd=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function generating(){
      
}

 boxes.forEach((box) => {
        box.addEventListener('click', () => {
           
                if (turnO) {
                    box.innerText = 'O';
                    turnO = false;
                } else {
                    box.innerText = 'X';
                    turnO = true;
                }
                box.disabled=true;
                
                moves++;
                
                checkWinner();
                
                drawGame(moves);
                

            

        });

    });
function checkWinner(){
    for(pattern of winningCd){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=''&&pos2!=''&&pos3!=''){
            if(pos1===pos2&&pos2===pos3){
               p.innerText=`winner ${pos1}`;
               disableboxes();
               return true
            }       
        }
    }
}
function resetgame(){
    turnO=true;
    for(box of boxes){
        box.innerText='';
        box.disabled=false;
    }
    p.innerText='';
     
}
resetbtn.addEventListener('click',()=>{
    resetgame();
});
function disableboxes(){
    for(box of boxes){
        box.disabled=true;  
      }
}
function drawGame(moves){
    
    
    if(moves===9 && !checkWinner()){
        p.innerText = "Game was draw!";
    }
    
}

