let emailInput = document.getElementById('email');
let submitBtn = document.getElementById('submitBtn');
let errorMsg = document.getElementById('error-msg');
let successMsg = document.getElementById('success-msg');

submitBtn.addEventListener('click', ()=>{
  if(emailInput.value=='' || emailInput.value.length < 8 || emailInput.value.match(/@/g) == null ) {
    emailInput.classList.add("error-input");
    errorMsg.innerHTML = "Please provide a valid email";
  }
  else {
    successMsg.innerHTML = "Thank you for login in";
  }
})

emailInput.addEventListener('click', ()=> {
  emailInput.classList.remove("error-input");
  emailInput.value="";
  errorMsg.innerHTML="";
  successMsg.innerHTML="";
})