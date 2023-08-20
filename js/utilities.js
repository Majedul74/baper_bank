function getInputFieldValueByid(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTaxtElementValueById(elimentId) {
    const textElement = document.getElementById(elimentId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;

}

function setTextElementById(elimentId, newDepositTotal) {
    const textElement = document.getElementById(elimentId);
    textElement.innerText = newDepositTotal;

}