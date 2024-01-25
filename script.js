const checkBtn = document.getElementById("check-btn"),
clearBtn = document.getElementById("clear-btn"),
userInput = document.getElementById("user-input"),
resultsDiv = document.getElementById("results-div");
  
checkBtn.addEventListener('click', () => {
    if (userInput.value === '') {
        alert('Please provide a phone number.');
    } else {
        resultsDiv.innerHTML = `${telephoneCheck(userInput.value) ? 'Valid' : 'Invalid'} US number: ${userInput.value}`
    }
})
  
clearBtn.addEventListener('click', () => {
    userInput.value = '';
    resultsDiv.innerHTML = '';
})

function telephoneCheck(num) {
    return /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(num);
}