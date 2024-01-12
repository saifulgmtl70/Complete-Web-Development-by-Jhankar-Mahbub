var input = "";

function CalculatorFunc(value){{}
    input += value

    document.getElementById("display").value = input;
}



function calculate(){
    try{
        input
        const result = eval(input);
        document.getElementById("display").value = result;
        input = result.toString();
    }

    catch(error){
        alert("Error");
        input = "";
        document.getElementById("display").value = input;
    }
}

function deleteDisplay(){
    try{
        input = input.slice(0, -1);
        document.getElementById("display").value = input
    }
    
    catch(error){
        alert("Nothing else to delete");
    }
}

function clearDisplay(){
    input = "";
    document.getElementById("display").value = input;
}