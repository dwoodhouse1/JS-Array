//https://picsum.photos/200/300
//https://dog.ceo/api/breeds/image/random
//'https://api.unsplash.com/photos/random'

const imageContainer = document.getElementById("image-fetcher__image-container");
const btnRandomImage = document.getElementById("random-img");
const apiKey = 'tJTJmyfzjWKJEFP4tUYl3hQTTCLEPHtvnoQv3yvWp9k';
const apiURL = 'https://api.unsplash.com/photos/random?client_id=';

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
            
}

fetchData(`${apiURL}${apiKey}`)
    .then(data => generateImage(data.urls.small))


function generateImage(data) {
    const html = `<img src='${data}' alt>`;
    imageContainer.innerHTML = html;
}

function fetchImage() {
    const img = imageContainer.querySelector("img");


    fetchData(`${apiURL}${apiKey}`)
        .then(data => {
            console.log(data);
            img.src = data.urls.small; 
            img.alt = data.alt_description;
            img.height = 200;
            img.width = 200;
        })
}

btnRandomImage.addEventListener('click', fetchImage);