document.getElementById('regForm').addEventListener('submit', function (event) {

    event.preventDefault();
    displayInputs();

});
function displayInputs() {
    let isValid = true;
    // EERROR WARNINGS
    const userData = {};
    const cardNumberInput = document.getElementById('cardNumber');
    const warning3 = document.getElementById('warning3');
    const warning4 = document.getElementById('warning4');
    const warning2 = document.getElementById('warning2');
    const warning1 = document.getElementById('warning1');
    const warning5 = document.getElementById('warning5');
    const warning6 = document.getElementById('warning6');
    const warning7 = document.getElementById('warning7');
    const warning8 = document.getElementById('warning8');
    const cardNameInput = document.getElementById('cardName');
    const cardYearInput = document.getElementById('expiryYear');
    const cvcInput = document.getElementById('cvc')
    const warning = document.getElementById('warning');
    const inputContainer = cardNameInput.parentElement;
    const monthSelection = document.getElementById('months')

    // WARNINGS FOR CARDNAME
    if (cardNameInput.value == "") {
        warning.textContent = "Please enter your full name";
        warning.style.display = "block";
        warning.style.color = "red";
        cardNameInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning, cardNameInput)
    }
    else if (!isNaN(cardNameInput.value)) {
        warning1.textContent = "Only letters are allowed"
        warning1.style.display = "block";
        warning1.style.color = "red";
        cardNumberInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning1, cardNumberInput)
    }
    // WARNINGS FOR CARDNUMBER
    if (cardNumberInput.value === "") {
        warning2.style.display = "block";
        warning2.style.color = "red";
        warning2.textContent = "Please enter your Card Number";
        cardNumberInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning2, cardNumberInput)
    }
    else if (cardNumberInput.value.length !== 3) {
        warning3.textContent = "card number must be 3 digit"
        warning3.style.display = "block";
        warning3.style.color = "red";
        cardNumberInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning3, cardNumberInput)
    }
    else if (isNaN(cardNumberInput.value)) {
        warning4.textContent = "Wrong format, numbers only"
        warning4.style.display = "block";
        warning4.style.color = "red";
        cardNumberInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning4, cardNumberInput)
    }
    // WARNINGS FOR CARD EXPIRY YEAR
    if (cardYearInput.value === "") {
        warning7.style.display = "block";
        warning7.style.color = "red";
        warning7.textContent = "Can't be Blank";
        cardYearInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning7, cardYearInput)
    }
    else if (isNaN(cardYearInput.value)) {
        warning5.textContent = "Wrong format, 2 numbers only";
        warning5.style.display = "block";
        warning5.style.color = "red";
        cardYearInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning5, cardYearInput)
    }
    // WARNINGS FOR CARD CVC
    if (cvcInput.value === "") {
        warning8.style.display = "block";
        warning8.style.color = "red";
        warning8.textContent = "Can't be Blank";
        cvcInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning8, cvcInput)
    }
    else if (isNaN(cvcInput.value)) {
        warning6.textContent = "Only numberss areeee allowed"
        warning6.style.display = "block";
        warning6.style.color = "red";
        cvcInput.style.border = "1px solid red";
        isValid = false;
        hideErrorMessage(warning6, cvcInput)
    }
    // VALIDATION and FIELD MAPPING
    if (isValid) {
        const fieldMapping = {
            'cardName': 'cardNameDisplay',
            'cardNumber': 'cardNumberDisplay',
            'months': 'expiryMonthDisplay',
            'expiryYear': 'expiryYearDisplay',
            'cvc': 'cvcDisplay'
        };
        //   CHATGPT CODE
        for (const inputID in fieldMapping) {
            const inputValue = document.getElementById(inputID).value;
            console.log(inputValue)
            console.log(inputID)
            const displayElementID = fieldMapping[inputID];
            document.getElementById(displayElementID).textContent = inputValue;
        }
        document.getElementById('regForm').style.display = 'none';
        document.getElementById('successPage').style.display = 'block';
    }
}
function hideErrorMessage(errorMessage, inputField) {
    setTimeout(() => {
        errorMessage.style.display = "none";
        inputField.style.border = "";
    }, 2000)
}
document.getElementById('btnReload').addEventListener('click', function () {
    window.location.reload();
});
