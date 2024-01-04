const btnAddEmail = document.getElementById("btn_add-email");
const emailTextField = document.getElementById("textfield_add-email");
const emailDropdown = document.getElementById("email-address-dropdown")
const currentEmailText = document.getElementById("current-email-text");
const btnAddImage = document.getElementById("btn_add-image");

let userArray = [];

function populateDropdown() {
    //alert("test");
    if (checkEmail()) {
        let text = emailTextField.value;
        let newOption = document.createElement("OPTION");
        let newOptionVal = document.createTextNode(text);
        
        createUser(text);
        
        newOption.appendChild(newOptionVal);
        emailDropdown.insertBefore(newOption, emailDropdown.lastChild);
        emailTextField.value = null; // resets the textfield to blank
    }
}

function populateEmailText() {
    let dropDownValue = emailDropdown.options[emailDropdown.selectedIndex].value;
    currentEmailText.textContent = dropDownValue;
}



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


// Toast Notification with Progress Bar provided by https://codepen.io/alvarotrigo/pen/YzvKNvo
const button = document.querySelector("#btn_add-email"),
  toast = document.querySelector(".toast");
  toastContent = document.querySelector("#toast-circle");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

    console.log("toast");
    button.addEventListener("click", () => {
        if (checkEmail()) 
        {
            toastContent.classList.add("icon-check");
            toastContent.classList.remove("icon-x");
            $(".fas").css("backgroundColor", "blue");
            generateToast("Success!", "Email Address has been Added!");
        }
        else
        {
            toastContent.classList.add("icon-x");
            toastContent.classList.remove("icon-check");
            $(".fas").css("backgroundColor", "red");   
            generateToast("Error!", "Email Address is not valid!");   
        }
        
      });
      
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
      
        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);
      
        clearTimeout(timer1);
        clearTimeout(timer2);
      });

function generateToast(title, desc)
{
    console.log("toast email validated");
    toast.classList.add("active");
    progress.classList.add("active");
        
    timer1 = setTimeout(() => {
    toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds
        
    timer2 = setTimeout(() => {
    progress.classList.remove("active");
    }, 5300);

    messageOne = document.querySelector(".text-1");
    messageTwo = document.querySelector(".text-2");

    messageOne.textContent = title;
    messageTwo.textContent = desc;
}      

btnAddEmail.addEventListener('click', populateDropdown);
btnAddImage.addEventListener('click', function () {
    document.querySelector(".image-displayer").innerHTML = `
    <ul>
        ${addImage(userArray)}
    </ul>
    `;
});

emailDropdown.addEventListener('change', populateEmailText);

function createUser(userEmail) {
    let user = {
        email: `${userEmail}`,
        images: []
    };
    userArray.push(user);
    console.log(user);
}

function addImage(arr) {
    let html = "";

    if (arr.length === 0)
    {
        alert("Error, no emails have been entered");
        html = "";
    }
    else
    {
       

        for (let i = 0; i < arr.length; i++)
        {
            html += `<li>${arr[i].email}</li>`
            console.log(html);
        }
        return html;
    }

    
}

