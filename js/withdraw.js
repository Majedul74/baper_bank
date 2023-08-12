document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value;

    // convert type of value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step 7 clear deposit box

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    //step-3 get the current deposite amount
    // for non-input
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-5 get balance current total

    const balanceTotalAmount = document.getElementById('balance-total')
    const previousTotalBalaceString = balanceTotalAmount.innerText;
    const previousTotalBalace = parseFloat(previousTotalBalaceString);



    if (newWithdrawAmount > previousTotalBalace) {
        alert('Baper Bank a eto taka nai');
        return;
    }

    //step-4 add total deposit ammount
    const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentTotalWithdraw;

    //step-6 add total balance amount
    const currentTotalBalance = previousTotalBalace - newWithdrawAmount;

    //set the total balance
    balanceTotalAmount.innerText = currentTotalBalance;






})