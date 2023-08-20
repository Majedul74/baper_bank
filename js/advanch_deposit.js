document.getElementById('btn-deposit').addEventListener('click', function () {

    /*
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */

    const newDipositAmount = getInputFieldValueByid('user-deposit');
    const previousDepositTotal = getTaxtElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDipositAmount;
    setTextElementById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTaxtElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    setTextElementById('balance-total', newBalanceTotal);

}) 