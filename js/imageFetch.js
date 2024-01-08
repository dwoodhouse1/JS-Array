//https://picsum.photos/200/300
//https://dog.ceo/api/breeds/image/random
//'https://api.unsplash.com/photos/random'

const imageContainer = document.getElementById("image-fetcher__image-container");
const btnRandomImage = document.getElementById("random-img");
const apiKey = 'tJTJmyfzjWKJEFP4tUYl3hQTTCLEPHtvnoQv3yvWp9k';
const apiURL = 'https://api.unsplash.com/photos/random?client_id=';

let userAndImages = [];
let currentImgURL = "";
let currentImgDesc = "";

fetchData(`${apiURL}${apiKey}`) // full URL: https://api.unsplash.com/photos/random?client_id=tJTJmyfzjWKJEFP4tUYl3hQTTCLEPHtvnoQv3yvWp9k
    .then(data => generateImage(data.urls.small, data.alt_description))


    function fetchData(url) { // returns a promise once data is retrieved from the web server and passed as json
    return fetch(url)
        .then(checkStatus)
        .then(response => response.json())
        .catch(error => console.log("Error, there was a problem", error))    
}

function generateImage(data, desc) { // Original Image on page load
    const html = `<img src='${data}' alt='${desc}' height='200' width='200'>`;
    imageContainer.innerHTML = html;
    currentImgURL = data;
    currentImgDesc = desc;
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
        console.log(currentImgDesc);   
        
}

function checkStatus(response) { // If the fetch response is sucessful, a resolved promise is returned, else its rejected.
    if (response.ok) 
    {
        return Promise.resolve(response);
    }
    else
    {
        return Promise.reject(new Error(response.statusText));
    }
}



