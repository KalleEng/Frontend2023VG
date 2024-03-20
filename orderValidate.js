 const form = document.getElementById('form');
 const nameField = document.getElementById('name');
 const emailField = document.getElementById("email")
 const numberField = document.getElementById('number');
 const addressField = document.getElementById("address")
 
 form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs();
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

    const setSuccess = element  => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.remove('error');
        inputControl.classList.add('success')
    
}


 const validateInputs = () => {
    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();
    const numberValue = nameField.value.trim();
    const addressValue = emailField.value.trim();
   

    if(nameValue === '') {
        setError(nameField, "Fill in your name.")
         }else {
        setSuccess(nameField);
    }
    
 
    if(emailValue === '') {
    setError(emailField, "Fill in your email address.")
  }else {
        setSuccess(emailField);
    }
   
  
    if(numberValue === '') {
        setError(numberField, "Fill in your phone number.")
         }else {
        setSuccess(numberField);
    }
    
  
    if(addressValue === '') {
    setError(addressField, "Fill in address.")
   }else {
        setSuccess(addressField);
    }

    
    

    
    
   
    

 }

   

