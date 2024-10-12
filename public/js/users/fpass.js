const elements = document.querySelectorAll(".button");
const form = document.querySelector("form");

elements.forEach(button => {
    button.addEventListener('click', e => {
        button.classList.add('processing');
        e.preventDefault();
        setTimeout(
            sendForm, 4000
        )

        function sendForm(){
            form.submit()
        }
    });
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
