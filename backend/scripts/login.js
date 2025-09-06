const email = document.getElementById('email');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('login-form');
const errorMsg = document.getElementById('errorMsg');

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelectorAll('.toggle-password')
    toggle.forEach((toggle) => {
        toggle.addEventListener('click', function () {
            const targetId = this.dataset.target;
            const input = document.getElementById(targetId);
            const icon = this.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            }
        });
    });
})
 email.addEventListener('blur', validateEmail);
 function validateEmail() {
    
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!re.test(email.value)) {
        const emailError = document.getElementById('emailErr')
        emailError.textContent= 'Please input a valid Email';
    }
    if (email.classList.contains('error')) {
        if (re.test(email.value)) {
          email.classList.remove('error');
          emailError.textContent = "";
        }
      }
   
}
password.addEventListener('blur', validatePassword);
 function validatePassword() {
    
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

    if (!re.test(password.value)) {
  const passwordError = document.getElementById('passwordErr')
        passwordError.textContent= 'Password should be at least 6 characters long and include a mix of uppercase and lowercase letters, numbers, and symbols';
    }  
    if (password.classList.contains('error')) {
        if (re.test(password.value)) {
          password.classList.remove('error');
          passwordError.textContent = "";
        }
      }
    
}