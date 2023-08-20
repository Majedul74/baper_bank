document.getElementById('btn-withdraw').addEventListener('click', function () {

    /*
   1. get the element by id
   2. get the value from the element
   3. convert string value to a number
   */

    const newWithdrawAmount = getInputFieldValueByid('user-withdraw');
    const previousWithdrawAmount = getTaxtElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setTextElementById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTaxtElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    setTextElementById('balance-total', newBalanceTotal);
})