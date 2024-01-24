const checkBtn = document.getElementById("check-btn"),
clearBtn = document.getElementById("clear-btn"),
textInput = document.getElementById("user-input"),
resultsDiv = document.getElementById("results-div");


checkBtn.addEventListener('click', validateNumber);
clearBtn.addEventListener('click', clearDiv);

function validateNumber(num) {
    let userInput = document.getElementById("user-input").value;
    if (userInput === "") {
        alert('Please provide a phone number');
    }
    
};

function clearDiv() {
    resultsDiv.innerHTML = "";
};