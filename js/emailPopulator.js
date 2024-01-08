const btnAddEmail = document.getElementById("btn_add-email");
const emailDropdown = document.getElementById("email-address-dropdown")
const currentEmailText = document.getElementById("current-email-text");
const btnAddImage = document.getElementById("btn_add-image");
const imageDisplayer = document.querySelector("#image-displayer");

let userArray = [];

btnAddImage.disabled = true;

if (currentEmailText.textContent === "Enter an email address above")
    {
        imageDisplayer.innerHTML = `
        <ul>
            <li>Select an email first to start seeing images here</li>
        </ul>
        `;
    }

function populateDropdown() {
    if (checkEmail()) { // if the entered email address has passed validation, populate the dropdown with the email address.
        let text = emailTextField.value;
        let newOption = document.createElement("OPTION");
        let newOptionVal = document.createTextNode(text);

        newOption.appendChild(newOptionVal);
        emailDropdown.insertBefore(newOption, emailDropdown.lastChild);
        emailTextField.value = null; // resets the textfield to blank

        createUser(text);
    }
}

function populateEmailText() {
    let dropDownValue = emailDropdown.options[emailDropdown.selectedIndex].value;
    currentEmailText.textContent = dropDownValue;
    
    if (dropDownValue === "Please select an email address.")
    {
        btnAddImage.disabled = true;
    }
    else
    {
        btnAddImage.disabled = false;
    }
}

btnAddEmail.addEventListener('click', populateDropdown); // click 'Add Email'

btnAddImage.addEventListener('click', function () { // click 'Add Another Image'
    addImage(currentEmailText.textContent);
    regenerateImages();
});

emailDropdown.addEventListener('change', populateEmailText); // value change in the dropdown
emailDropdown.addEventListener('change', regenerateImages); // value change in the dropdown

// Creates an object literal containing an email and images property. This is then pushed into an array.
function createUser(userEmail) {
    let user = {
        email: `${userEmail}`,
        images: [],
        
    };
    
    userArray.push(user);
}

function addImage(emailText) {
   
    if (emailText.length === 0) // Double security measure just in case the user finds a way to access the 'Add Current Images' button without any email values in the array (should never be called)
    {
        alert("Error: No emails can be found"); 
    }
    else
    {
        for (let i = 0; i < userArray.length; i++)
        {
            if(userArray[i].email === emailText)
            {
                userArray[i].images.push(`<li><img src=${currentImgURL} alt='${currentImgDesc}' width=200 height=200></li>`) // Adds the HTML required to add the image to a selected email address within the userArray
                
                fetchImage(); // Refreshes the Image Fetcher with a new image once the current image is stored.
            }
        }
    }
    
}

function generateImagesHTML(emailText) { // Returns the HTML of all image values contained within the selected email property
    let html = "";
    for (let i = 0; i < userArray.length; i++)
    {
        if(userArray[i].email === emailText)
        {
            for (const image of userArray[i].images)
            {
                html += image;
            }
            return html;
        }
    }
}

function regenerateImages() { // Recreates the HTML containing the images for the selected email address in the dropdown.
    

    imageDisplayer.innerHTML = `
    <ul>
        ${generateImagesHTML(currentEmailText.textContent)} 
    </ul>
    `;

    if (currentEmailText.textContent === "Please select an email address.")
    {
        imageDisplayer.innerHTML = `
        <ul>
            <li>Select an Email Address to see Images.</li>
        </ul>
        `;
    }
    
   
}



