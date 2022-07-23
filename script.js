let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmpassword');

function checkError() {
  console.log(password);
  pass1 = password.value;
  pass2 = confirmPassword.value;
  if (pass1 === pass2) {
    console.log('right');
    password.setAttribute('class', 'correct');
    confirmPassword.setAttribute('class', 'correct');
  } else {
    console.log('wrong')
    password.setAttribute('class', 'error');
    confirmPassword.setAttribute('class', 'error');
  }
}

password.addEventListener('focusout', checkError);
confirmPassword.addEventListener('focusout', checkError);
