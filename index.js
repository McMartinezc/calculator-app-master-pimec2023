// Buena suerte!
const keyBoard = document.querySelector(".grid-container");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

function operation(event){

    const button = event.target;

    const operacion = button.getAttribute("data-operator");

    const number = button.getAttribute("data-num");
    console.log(number)

    const equal = button.getAttribute("data-output");

    const del = button.getAttribute("data-delete");



    const currentNumber = currentOperand.textContent += number + operacion;

    previousOperand.textContent = currentNumber;
    
    
    const result = eval(number )

}


keyBoard.addEventListener("click", operation);