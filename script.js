let win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
let buttons = document.querySelectorAll(".bot");
  
let result = document.querySelector(".result");
let res = document.querySelector(".res");
res.style.borderRadius = "20px";
res.style.width = "70px";
res.style.height = "30px";

let sta = document.querySelector(".sta");
sta.style.borderRadius = "20px";
sta.style.width = "70px";
sta.style.height = "30px";
let player1 = "player1";
let player2 = "player2";
let currentplayer = player1;
buttons.forEach(function but(st){
  st.disabled = true;
})
buttons.forEach(function myfu(button){
     button.style.color = "rgb(110, 15, 110)";
     button.addEventListener("click",function myfu(){
       button.style.backgroundColor = "rgb(243, 125, 198)";
       if(button.innerText=== "")
       {
         if(currentplayer === player1)
         {
          button.innerText= "o";
           currentplayer = player2;
         }
         else if(currentplayer === player2)
         {
          button.innerText= "x";
           currentplayer = player1;
         }
         winer();
        }
     });
});

function winer()
{
win.forEach(function myf(val){
let pos1 =val[0];
let pos2 = val[1];
let pos3 = val[2];
if(buttons[pos1].innerText !==""&& 
  buttons[pos1].innerText=== buttons[pos2].innerText &&
  buttons[pos2].innerText===buttons[pos3].innerText)
  {
      let wan = buttons[pos1].innerText;
      result.innerText = `THE WINNER IS : ${wan}`;
      buttons.forEach(function mybu(boot){
      boot.disabled = true;
});
  
}
})
    }
sta.addEventListener("click", function sta(){
  buttons.forEach(function mys(s){
   s.disabled = false;
  })
})
res.addEventListener("click", function star(){
  
  buttons.forEach(function myre(s){
   s.disabled = false;
   s.innerText = "";
currentplayer = player1;
 s.style.backgroundColor = "white";

  })
})

