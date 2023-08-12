//step-1 add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {

    //User-Email

    //step-2 get the email adress inside the email input field
    //step-3 always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //User-Password
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    console.log(email, password)

    // "DO NOT VERIFY EMAIL PASSORD ON THE CLIENT SITE"

    //step-4 verify email and password

    if (email === 'arif@gmail.com' && password === '1234a') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Wrong email-address or password')
    }


})
