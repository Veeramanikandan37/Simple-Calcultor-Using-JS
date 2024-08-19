document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("td");
    const resultDisplay = document.getElementById("res");
    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText;

            if (value === "C") {
                expression = "0";
                resultDisplay.innerText = "0";
            } else if (value === "=") {
                try {
                    expression = expression.replace(/x/g, "*");  
                    const result = eval(expression);
                    resultDisplay.innerText = result;
                    expression = result.toString();  
                } catch (error) {
                    resultDisplay.innerText = "Error";
                    expression = "";
                }
            } else {
                if (expression === "0" && value !== ".") {
                    expression = value;
                } else {
                    expression += value;
                }
                resultDisplay.innerText = expression;
            }
        });
    });
});
