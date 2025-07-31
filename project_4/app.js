let givenWeight=document.querySelector("#pounds");
let weightinkgs=document.querySelector(".inkms");

function weightConverter(){
    let WeightInP=givenWeight.value;
    let weightInKg= (WeightInP/2.20462);
    weightinkgs.textContent=`your weight in kgs is:${weightInKg.toFixed(2)}`;
}
addEventListener("input",weightConverter);