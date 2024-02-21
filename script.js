const display = document.getElementById("display");

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        const input = button.textContent;
        appendToDisplay(input);
    });
});
function appendToDisplay(input) {
    // Check if input is a valid number
    if (!isNaN(input)) {
        display.value += input;
    }
} 

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        console.error(error);
    }
}
