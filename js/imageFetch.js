//https://picsum.photos/200/300
//https://dog.ceo/api/breeds/image/random
//'https://api.unsplash.com/photos/random'

const imageContainer = document.getElementById("image-fetcher__image-container");
const btnRandomImage = document.getElementById("random-img");
const apiKey = 'tJTJmyfzjWKJEFP4tUYl3hQTTCLEPHtvnoQv3yvWp9k';
const apiURL = 'https://api.unsplash.com/photos/random?client_id=';
const labelURL = document.getElementById("label-url");

let fetchedImage;
let imageList = [];
let userAndImages = [];
let currentImgURL = "";
let currentImgDesc = "";
let originalImgURL = "";

function fetchData(url) { // returns a promise once data is retrieved from the web server and passed as json
    return fetch(url)
        .then(checkStatus)
        .then(response => response.json())
        .then(json => imageList = json)
        //.then(log => console.log(imageList))
        .catch(error => console.log("Error, there was a problem", error))    
}


fetchData(`${apiURL}${apiKey}`) // full URL: https://api.unsplash.com/photos/random?client_id=tJTJmyfzjWKJEFP4tUYl3hQTTCLEPHtvnoQv3yvWp9k
    .then(data => generateImage(data.urls.small, data.alt_description))
    


function generateImage(data, desc) { // Original Image on page load
    const html = `<img src='${data}' alt='${desc}' height='200' width='200'>`;
    imageContainer.innerHTML = html;
    //userArray.push(html);
    originalImgURL = data;
    //createEmail(imageList.urls.small, currentImgURL);
}

btnRandomImage.addEventListener('click', fetchImage);

function fetchImage() { // Grabs another image from picsum and places it in the img tag in the img container
    const img = imageContainer.querySelector("img");
    

    fetchData(`${apiURL}${apiKey}`)
        .then(data => {
            console.log(data);
            img.src = data.urls.small; 
            img.alt = data.alt_description;
            img.height = 200;
            img.width = 200;
            currentImgURL = data.urls.small;
            currentImgDesc = data.alt_description;
            console.log(currentImgURL);
        });
        console.log(currentImgURL);   
        // console.log(currentImgURL);
        // labelURL.textContent = currentImgURL;
        // imageList.push(currentImgURL);
        // console.log(imageList);
}

function checkStatus(response) {
    if (response.ok) 
    {
        return Promise.resolve(response);
    }
    else
    {
        return Promise.reject(new Error(response.statusText));
    }
}

function createEmail(address, image) {
    let id = address;
    let div = document.createElement("div");
    div.setAttribute("id", id);
    document.getElementById("image-displayer").appendChild(div);

    document.getElementById(id).innerHTML = `<img src=${id}>`
}

// labelURL.addEventListener('click', test);

// function test()
// {
//     console.log("is this on?");
//     console.log(currentImgURL);
// }