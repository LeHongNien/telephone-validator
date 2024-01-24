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
    let regex = []
    regex[0] = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/ /* 012-345-6789 */
    regex[1] = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/ /* (012)345-6789 */
    regex[2] = /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/ /* (012) 345-6789 */
    regex[3] = /^[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/ /* 012 345 6789 */
    regex[4] = /^[0-9]{10}$/ /* 0123456789 */
    regex[5] = /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/ /* 1 012 345 6789 */
    regex[6] = /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/ /* 1 012-345-6789 */
    regex[7] = /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/ /* 1 (012) 345 6789 */
    regex[8] = /^1\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/ /* 1 (012) 345-6789 */
  
    for (let i in regex) {
      // Return true if regex is matched
      let isValid = regex[i].test(num)
  
      if (isValid) {
        return resultsDiv.innerHTML = `Valid US number: ${userInput}`;
      } else {
        resultsDiv.innerHTML = `Invalid US number: ${userInput}`;
      }
    }
};

function clearDiv() {
    resultsDiv.innerHTML = "";
};