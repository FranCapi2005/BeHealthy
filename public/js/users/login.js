/* Email Input */
const emailInput = document.getElementById('email');
const emailIcon = document.getElementById('envelope');

emailIcon.addEventListener('click', function() {
    emailInput.focus();
});


/* Password Input */
const passwordInput = document.getElementById('password');
const passwordIcon = document.getElementById('lock');

passwordIcon.addEventListener('click', function() {
    passwordInput.focus();
});