function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputValue = parseInt(inputFieldValue);

    inputField.value = '';
    return inputValue;

}

function getTextElementById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementVBalue = textElement.innerText;
    const elementValue = parseInt(textElementVBalue);
    return elementValue;
}

document.getElementById("btn_deposit").addEventListener("click", function(){
    
    const newDepositAmount = getInputValueById("depositField");


    const prevDepositTotal = getTextElementById("balance_total");
    const newDepositTotal = prevDepositTotal + newDepositAmount;

    console.log(newDepositTotal);
    
})