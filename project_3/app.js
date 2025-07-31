let dateOfB=document.querySelector("#DOB");
let buton= document.querySelector("#btn");
let stateMent=document.querySelector("#statement");


function ageCalculator(){
    let currentDate= new Date();
    let doB=  new Date(dateOfB.value);
    let age=currentDate.getFullYear() - doB.getFullYear();
    stateMent.textContent = `Your age is ${age} years old`
}

buton.addEventListener("click",ageCalculator);