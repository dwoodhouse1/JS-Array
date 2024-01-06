const emailTextField = document.getElementById("textfield_add-email");


const showError = (input, message) => {
    

    //adding error class
    emailTextField.classList.remove("success");
    emailTextField.classList.add("error");

    //displays the error message in the small tag
    const error = document.querySelector("small");
    error.textContent = message;
}

const showSuccess = (input) => {
    //get the form-field element
    

    //remove the success class
    emailTextField.classList.remove("error");
    emailTextField.classList.add("success");

    //hide the error message
    const error = document.querySelector("small");
    error.textContent = "";
}

const isEmailValid = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

const checkEmail = () => {
    let valid = false;

    const email = emailTextField.value.trim();

    
    if (!isEmailValid(email))
    {
        showError(emailTextField, "Email format invalid");
    }
    else
    {
        showSuccess(emailTextField);
        valid = true;
    }
    return valid;
}

emailTextField.addEventListener("input", function (e){
    switch (e.target.id)
    {
        case "textfield_add-email":
            checkEmail();
            break; 
    }
})