
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (e) {
        currentInput = "Error";
        updateDisplay();
    }
}
