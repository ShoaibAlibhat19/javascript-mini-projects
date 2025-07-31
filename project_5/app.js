let result= document.querySelector("#multi");
let btn=document.querySelector("#buton");
let equation= document.querySelector("#que");
let marks= document.querySelector("#cou");
let Line=document.querySelector("#statement")

let score=0;
let multiple=0;

function genNum(){
let number1= Math.floor(Math.random()*10)+1;
let number2= Math.floor(Math.random()*10)+1;
equation.textContent= `What is ${number1} multiply by ${number2}?`;
multiple= number1 * number2;
}
genNum();
function multiply(event){
    // event.preventDefault();
    if(Number(result.value)=== multiple){
        score++;
        // Line.textContent=`CONGRATS! YOU ARE CORRECT`;
      
    }else{
        score--;
        // Line.textContent=`00PS WRONG! TRY AGAIN`;
    }
    marks.textContent=`Score : ${score}` ;
    result.value = ""; // clear input for next question
    genNum();

}

btn.addEventListener("click",multiply);
   

