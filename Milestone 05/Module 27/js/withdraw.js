document.getElementById("btn_withdraw").addEventListener("click", function(){
    const wihtdrawField = document.getElementById("withdrawField");
    const newWithdrawAmount = wihtdrawField.value;


    const WithdrawTotalElement = document.getElementById("withdraw_total");
    const prevWithdrawTotal = WithdrawTotalElement.innerText;

    const currentWithdrawTotal = parseInt(prevWithdrawTotal) + parseInt(newWithdrawAmount);
    WithdrawTotalElement.innerText = currentWithdrawTotal;


    const prevBalanceTotalElement = document.getElementById("balance_total");
    const prevBalanceTotal = prevBalanceTotalElement.innerText;


    const newBalanceTotal = parseInt(prevBalanceTotal) - newWithdrawAmount;
    prevBalanceTotalElement.innerText = newBalanceTotal;


    wihtdrawField.value = '';
})