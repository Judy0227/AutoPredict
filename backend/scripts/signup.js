const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const firstName = document.getElementById('fname');  
const signupForm = document.getElementById('signup-form'); 

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelectorAll('.toggle-password');
  toggle.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      const targetId = this.dataset.target;
      const input = document.getElementById(targetId);
      const icon = this.querySelector('i');
      if (input.type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        input.type = 'text';
      } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        input.type = 'password';
      }
    });
  });
});

// Email validation
email.addEventListener('blur', validateEmail);
function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  const emailError = document.getElementById('emailErr');

  if (!re.test(email.value)) {
    emailError.textContent = 'Please input a valid Email';
    email.classList.add('error');
  } else {
    email.classList.remove('error');
    emailError.textContent = '';
  }
}

// Password validation
password.addEventListener('blur', validatePassword);
function validatePassword() {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  const passwordError = document.getElementById('passwordErr');

  if (!re.test(password.value)) {
    passwordError.textContent =
      'Password must be at least 6 chars, include upper/lowercase, number, and symbol';
    password.classList.add('error');
  } else {
    password.classList.remove('error');
    passwordError.textContent = '';
  }
}

// Confirm password validation
confirmPassword.addEventListener('blur', validateConfirmPassword);
function validateConfirmPassword() {
  const confirmError = document.getElementById('confirmPasswordErr');

  if (password.value !== confirmPassword.value) {
    confirmError.textContent = 'Password does not match';
    confirmPassword.classList.add('error');
  } else {
    confirmPassword.classList.remove('error');
    confirmError.textContent = '';
  }
}

// Submit handler
signupForm.addEventListener('Sign Up', async (e) => {
  e.preventDefault();

  const formData = {
    firstName: firstName.value,
    email: email.value,
    password: password.value,
  };

  try {
    const response = await fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Signup successful!');
      console.log(data);
      // redirect if needed
      window.location.href = "..views/login.ejs";
    } else {
      alert(data || 'Signup failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong');
  }
});
