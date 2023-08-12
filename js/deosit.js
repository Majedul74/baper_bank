//step-1 add event listener to the diposite button

document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-2 get the deposit amount from the diposit input field

    const depositField = document.getElementById('user-diposit');
    const newDepositAmountString = depositField.value;

    // convert type of value
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3 get the current deposite amount
    // for non-input
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;

    // convert type of value
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4 add total deposit ammount
    const currentTotalDeposit = previousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = currentTotalDeposit;

    //step-5 get balance current total

    const balanceTotalAmount = document.getElementById('balance-total')

    const previousTotalBalaceString = balanceTotalAmount.innerText;
    // covert type of value
    const previousTotalBalace = parseFloat(previousTotalBalaceString);
    //step-5 add total balance amount
    const currentTotalBalance = previousTotalBalace + newDepositAmount;

    //set the total balance
    balanceTotalAmount.innerText = currentTotalBalance;


    //step 7 clear deposit box

    depositField.value = '';

})