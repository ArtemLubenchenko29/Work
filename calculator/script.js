var numberOne = 0;
var numberTwo = 0;
var result = 0;


function num1(){
    numberOne = document.getElementById("num1").value;
    return Number(numberOne);
}

function num2(){
    numberTwo = document.getElementById("num2").value;
    return Number(numberTwo);    
}

function plus(){
    numberOne = num1();
    numberTwo = num2();
    result = numberOne + numberTwo;
    document.getElementById("result").innerHTML = result;
}

function minus(){
    numberOne = num1();
    numberTwo = num2();
    result = numberOne - numberTwo;
    document.getElementById("result").innerHTML = result;
}

function deleniye(){
    numberOne = num1();
    numberTwo = num2();
    if(numberTwo == 0){
        var err = "Делить на ноль нельзя"
        document.getElementById("result").innerHTML = err;
    }
    else{
        result = numberOne / numberTwo;
        document.getElementById("result").innerHTML = result;
    }
}

function umnozheniye(){
    numberOne = num1();
    numberTwo = num2();
    result = numberOne * numberTwo;
    document.getElementById("result").innerHTML = result;
}

function clean(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
