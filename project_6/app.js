let takingAmount=document.querySelector("#amount");
let intRAte=document.querySelector("#interest");
let loanTenure=document.querySelector("#months");
let stateMent=document.querySelector("#emi");


function loanCalculator(){
    let LoanAmount = takingAmount.value;
    let interestRate = intRAte.value;
    let MonthsToPay = loanTenure.value;
    let TotalAmount = LoanAmount * (1+(interestRate/100));
    let EMI= (TotalAmount / MonthsToPay);
    stateMent.textContent= ` Monthly payment: $ ${EMI}`;
}
addEventListener("input",loanCalculator);