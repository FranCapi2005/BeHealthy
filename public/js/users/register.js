/* Name Input */
const nameInput = document.getElementById('name')
const nameIcon = document.getElementById('user')

nameIcon.addEventListener('click', function() {
    nameInput.focus();
});


/* Lastname Input */
const lastnameInput = document.getElementById('lastname')
const lastnameIcon = document.getElementById('userLast')

lastnameIcon.addEventListener('click', function() {
    lastnameInput.focus();
});


/* Telephone Input */
const telephoneInput = document.getElementById('telephone')
const telephoneIcon = document.getElementById('tel')

telephoneIcon.addEventListener('click', function() {
    telephoneInput.focus();
});


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

/* Remember Me Input */

const rememberSpan = document.querySelector('.remember-label').addEventListener('click', function(){
    const rememberInput = document.getElementById('remember');
    rememberInput.checked = !rememberInput.checked
})