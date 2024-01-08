const emailTextField = document.getElementById("textfield_add-email");


const showError = (input, message) => {
    
    
    //making the border red when email is incorrect format
    $(".textfield_add-email").css("border-color", "red");

    //displays the error message in the small tag
    const error = document.querySelector("small");
    error.textContent = message;
}

const showSuccess = (input) => {
    //get the form-field element
    
    
    //making the border green when email is correct format
    $(".textfield_add-email").css("border-color", "green");

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
    
    if (isEmailValid(email) && !checkExistingEmail(email))
    {
        showSuccess(emailTextField);
        valid = true;
    }
    else 
    {
        showError(emailTextField, "Email format invalid or it already exists");
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

function checkExistingEmail(emailText) {
    for (let i = 0; i < userArray.length; i++)
    {
        console.log(userArray[i].email);
        if (userArray[i].email === emailText)
        {
            return true;
        }
    }
    return false;
}