// const buttonsSci = document.getElementById("buttons-sci");
// buttonsSci.style.visibility = "hidden";

const resultArea = document.getElementById("result-area");

function numberOneClick(){
    const button = document.getElementById("one");
    resultArea.value += button.textContent.trim();
}

function numberTwoClick(){
    const button = document.getElementById("two");
    resultArea.value += button.textContent.trim();
}

function numberThreeClick(){
    const button = document.getElementById("three");
    resultArea.value += button.textContent.trim();
}

function numberFourClick(){
    const button = document.getElementById("four");
    resultArea.value += button.textContent.trim();
}

function numberFiveClick(){
    const button = document.getElementById("five");
    resultArea.value += button.textContent.trim();
}

function numberSixClick(){
    const button = document.getElementById("six");
    resultArea.value += button.textContent.trim();
}

function numberSevenClick(){
    const button = document.getElementById("seven");
    resultArea.value += button.textContent.trim();
}

function numberEightClick(){
    const button = document.getElementById("eight");
    resultArea.value += button.textContent.trim();
}

function numberNineClick(){
    const button = document.getElementById("nine");
    resultArea.value += button.textContent.trim();
}

function numberZeroClick(){
    const button = document.getElementById("zero");
    resultArea.value += button.textContent.trim();
}

function sumClick(){
    const button = document.getElementById("sum");
    resultArea.value += button.textContent.trim();
}

function minusClick(){
    const button = document.getElementById("minus");
    resultArea.value += button.textContent.trim();
}

function multClick(){
    const button = document.getElementById("mult");
    resultArea.value += "*";
}

function divisionClick(){
    const button = document.getElementById("division");
    resultArea.value += button.textContent.trim();
}

function parenthesisOpenClick(){
    const button = document.getElementById("parenthesis-open");
    resultArea.value += button.textContent.trim();
}

function parenthesisCloseClick(){
    const button = document.getElementById("parenthesis-close");
    resultArea.value += button.textContent.trim();
}

function commaClick(){
    const button = document.getElementById("comma");
    resultArea.value += ".";
}

function percentClick(){
    const resultAreaValue = parseFloat(resultArea.textContent);
    const result = resultAreaValue / 100;
    resultArea.value = result;
}

function resultClick(){
    const result = eval(resultArea.value);
    resultArea.value = result;
}

function acClick(){
    resultArea.value = "";
}

function deleteClick(){
    
}

function sciClick(){
    const buttonsSci = document.getElementById("buttons-sci");
    const calculator = document.getElementById("calc");
    
    if(buttonsSci.style.opacity == 0){
        buttonsSci.style.opacity = 1;
        calculator.style.width = "1000px";
    }else{
        buttonsSci.style.opacity = 0;
        calculator.style.width = "680px";
    }
}