const audioElement = new Audio('typewriter.mp3'); // I am loading an audio file under the constant of audioElement

let lastWasResult = false; // Track if last action was a calculation

// Functions is a part of code that define things that gives thing a purpose  

// Clears the entire display
function allClear() {
    document.getElementById("display").value = ""; 
    audioElement.currentTime = 0;
    audioElement.play();
    lastWasResult = false; // Reset flag on clear
}

// Clear the last entry (backspace)
function clearEntry() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    audioElement.currentTime = 0;
    audioElement.play();
    lastWasResult = false; // Reset flag on clear
}

// Append a value (number/operator) to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
    audioElement.currentTime = 0;
    audioElement.play();
    lastWasResult = false; // Reset flag on input
}

// Evaluate the expression in the display
function calculateResult() {
    const display = document.getElementById("display");
    try {
        let expr = display.value;
        // Replace all occurrences of √number with Math.sqrt(number)
        expr = expr.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");
        display.value = eval(expr);
        lastWasResult = true; // Set flag after calculation
    } catch (error) {
        display.value = "Error";
        lastWasResult = true;
    }
}

// Calculate square root of the current value
function calculateSquareRoot() {
    const display = document.getElementById("display");
    try {
        let value = display.value.trim();
        // If value starts with "√", remove it
        if (value.startsWith("√")) {
            value = value.slice(1);
        }
        if (value === "") {
            display.value = "Error";
            return;
        }
        const num = eval(value);
        if (isNaN(num) || num < 0) {
            display.value = "Error";
            return;
        }
        display.value = Math.sqrt(num);
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate square of the current value
function calculateSquare() {
    const display = document.getElementById("display");
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate reciprocal of the current value
function calculateReciprocal() {
    const display = document.getElementById("display");
    try {
        display.value = 1 / eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate percentage of the current value
function calculatePercentage() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}

// Toggle the sign of the current value
function toggleSign() {
    const display = document.getElementById("display");
    try {
        display.value = -eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate factorial of the current value
function calculateFactorial() {
    const display = document.getElementById("display");
    try {
        let num = eval(display.value);
        if (num < 0) {
            display.value = "Error";
            return;
        }
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate power of the current value
function calculatePower() {
    const display = document.getElementById("display");
    try {
        let parts = display.value.split('^');
        if (parts.length !== 2) {
            display.value = "Error";
            return;
        }
        let base = eval(parts[0]);
        let exponent = eval(parts[1]);
        display.value = Math.pow(base, exponent);
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate logarithm (base 10) of the current value
function calculateLog() {
    const display = document.getElementById("display");
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate natural logarithm of the current value
function calculateLn() {
    const display = document.getElementById("display");
    try {
        display.value = Math.log(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate exponential of the current value
function calculateExp() {
    const display = document.getElementById("display");
    try {
        display.value = Math.exp(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

// Sine functions
function calculateSin() {
    const display = document.getElementById("display");
    try {
        display.value = Math.sin(eval(display.value) * (Math.PI / 180));
    } catch (error) {
        display.value = "Error";
    }
}

// Cosine function
function calculateCos() {
    const display = document.getElementById("display");
    try {
        display.value = Math.cos(eval(display.value) * (Math.PI / 180));
    } catch (error) {
        display.value = "Error";
    }
}

// Tangent function
function calculateTan() {
    const display = document.getElementById("display");
    try {
        display.value = Math.tan(eval(display.value) * (Math.PI / 180));
    } catch (error) {
        display.value = "Error";
    }
}

// Inverse Sine function
function calculateAsin() {
    const display = document.getElementById("display");
    try {
        display.value = Math.asin(eval(display.value)) * (180 / Math.PI);
    } catch (error) {
        display.value = "Error";
    }
}

// Inverse Cosine function
function calculateAcos() {
    const display = document.getElementById("display");
    try {
        display.value = Math.acos(eval(display.value)) * (180 / Math.PI);
    } catch (error) {
        display.value = "Error";
    }
}

// Inverse Tangent function
function calculateAtan() {
    const display = document.getElementById("display");
    try {
        display.value = Math.atan(eval(display.value)) * (180 / Math.PI);
    } catch (error) {
        display.value = "Error";
    }
}

// Calculate random number between 0 and 1
function calculateRandom() {
    const display = document.getElementById("display");
    display.value = Math.random();
}

// Calculate the value of Pi
function calculatePi() {
    const display = document.getElementById("display");
    display.value = Math.PI;
}

// Calculate the value of Euler's number
function calculateE() {
    const display = document.getElementById("display");
    display.value = Math.E;
}

// Listen for keydown events on the whole document
document.addEventListener('keydown', function(event) {
    const allowedKeys = '0123456789+-*/.=√%';
    if (allowedKeys.includes(event.key)) {
        document.getElementById("display").value += event.key;
        audioElement.currentTime = 0;
        audioElement.play();
        lastWasResult = false;
        event.preventDefault(); // Prevent default to avoid double input
    } else if (event.key === 'Backspace') {
        if (lastWasResult) {
            allClear();
        } else {
            clearEntry();
        }
        event.preventDefault();
    } else if (event.key === 'Enter') {
        calculateResult();
        event.preventDefault();
    }
});