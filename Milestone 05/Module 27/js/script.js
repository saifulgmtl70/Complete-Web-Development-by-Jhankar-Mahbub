// document.getElementById("btn_deposit").addEventListener("click", function(){
//     const depostiField = document.getElementById("depositField");
//     const newDepositAmountString = depostiField.value;
//     const newDepositAmount = parseInt(newDepositAmountString);

//     const depositTotalElement = document.getElementById("deposit_total");
//     const prevDepositTotalString = depositTotalElement.innerText;
//     const prevDepositTotal = parseInt(prevDepositTotalString);

//     const newDepositTotal = prevDepositTotal + newDepositAmount;

//     depositTotalElement.innerText = newDepositTotal;


//     depostiField.value = '';
// })


document.getElementById("btn_deposit").addEventListener("click", function(){
    const depositField = document.getElementById("depositField");
    const newDepositAmount = depositField.value;

    const depositTotal = document.getElementById("deposit_total");
    const prevDepositAmount = depositTotal.innerText;
    const newDeposit = parseInt(prevDepositAmount) + parseInt(newDepositAmount);
    depositTotal.innerText = newDeposit;


    depositField.value = '';



    const totalBalanceElement = document.getElementById("balance_total");
    const prevTotalBalance = totalBalanceElement.innerText;

    const newTotalBalance = parseInt(prevTotalBalance) + parseInt(newDepositAmount);
    totalBalanceElement.innerText = newTotalBalance;
})