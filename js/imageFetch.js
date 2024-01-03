//https://picsum.photos/200/300
//https://dog.ceo/api/breeds/image/random
//'https://api.unsplash.com/photos/random'

const imageContainer = document.getElementById("image-fetcher__image-container");
const btnRandomImage = document.getElementById("random-img");
const apiKey = 'tJTJmyfzjWKJEFP4tUYl3hQTTCLEPHtvnoQv3yvWp9k';

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
            
}

fetchData(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
    .then(data => generateImage(data.message))


function generateImage(data) {
    const html = `<img src='${data}' alt>`;
    imageContainer.innerHTML = html;
}

function fetchImage() {
    const img = imageContainer.querySelector("img");


    fetchData(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        .then(data => {
            if (!data.ok) {
                console.log(data);
                throw new Error("HTTP Error, Status: " + data.status);
            }
            img.src = data.message;
            img.alt = "random image";
        })
}

btnRandomImage.addEventListener('click', fetchImage);