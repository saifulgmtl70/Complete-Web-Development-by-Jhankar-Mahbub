document.getElementById("submit").addEventListener("click",function(){
    const email = document.getElementById("mailBox");
    const password = document.getElementById("passBox");
    const emailResult = email.value;
    const passresult = password.value;

    
    const showMail = document.getElementById("emailresult");
    showMail.innerText = "Your Email is : " + emailResult;
    const showPass = document.getElementById("passResult");
    showPass.innerText = document.getElementById("Your result is: " + passresult);


    email.value = '';
    passresult.value = '';

});

