// Buena suerte!
const keyBoard = document.querySelector(".grid-container");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

function operation(event) {

    const button = event.target;
    const operacion = button.getAttribute("data-operator");
    const number = button.getAttribute("data-num");
    const equal = button.getAttribute("data-output");
    const del = button.getAttribute("data-delete");
    const reset = button.getAttribute("data-reset");

    if (number) {
        currentOperand.textContent += button.textContent;
    }

    else if (operacion) {
        previousOperand.textContent = currentOperand.textContent + operacion;
        currentOperand.textContent = "";
    }

    else if (del) {
        currentOperand.textContent = currentOperand.textContent.slice(0, -1);
    }

    else if (reset) { currentOperand.textContent = ""; previousOperand.textContent = ""; }

    else if (equal) {
        const total = eval(previousOperand.textContent + currentOperand.textContent);
        previousOperand.textContent = "";

        currentOperand.textContent = total;
    }
}

keyBoard.addEventListener("click", operation);