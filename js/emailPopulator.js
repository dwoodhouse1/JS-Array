const btnAddEmail = document.getElementById("btn_add-email");

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

        newOption.appendChild(newOptionVal);
        emailDropdown.insertBefore(newOption, emailDropdown.lastChild);
        emailTextField.value = null; // resets the textfield to blank

        createUser(text, currentImgURL);
    }
}

function populateEmailText() {
    let dropDownValue = emailDropdown.options[emailDropdown.selectedIndex].value;
    currentEmailText.textContent = dropDownValue;
}

btnAddEmail.addEventListener('click', populateDropdown);
btnAddImage.addEventListener('click', function () {
    console.log(userArray.images);
    let img = addImage(userArray);
    if (img === undefined)
    {
        alert("Error, no image available");
    }
    else
    {
        document.querySelector("#image-displayer").innerHTML = `
        <ul>
            ${addImage(userArray)}  
        </ul>
        `;
    }
    
});

emailDropdown.addEventListener('change', populateEmailText);

function createUser(userEmail, userImage) {
    let user = {
        email: `${userEmail}`,
        images: [`${userImage}`],
         //`${userImage}` stays blank until user selects an image
    };
    //user.images.push("hello");
    userArray.push(user);
    console.log(user);
    console.log(userArray);
}

function addImage(arr) {
    let html = "";
    console.log(arr);
    if (arr.length === 0)
    {
        alert("Error, no emails have been entered");
        html = "";
    }
    else
    {
        for (let i = 0; i < arr.length; i++)
        {
            html += `<li><img src=${arr[i]} width=200 height=200></li>`
            console.log(html);
        }
        return html;
    }

    
}

