let amount= document.querySelector("#Bill");
let per=document.querySelector("#Tip");
let buttn= document.querySelector("#btn");
let finalSum=document.querySelector("#total")



function tipCalculator(){
   let billAmount=amount.value;
   let TiPper=per.value
   let totalAmount= billAmount * (1+TiPper/100);
   finalSum.innerText=totalAmount.toFixed(2);
    
}
buttn.addEventListener("click",tipCalculator)