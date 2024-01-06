// const imageContainer = document.getElementById("image-fetcher__image-container");
// const apiKey = 'tJTJmyfzjWKJEFP4tUYl3hQTTCLEPHtvnoQv3yvWp9k';
// const apiURL = 'https://api.unsplash.com/photos/random?client_id=';

// let currentImage;
// let userAndImages = [];
// let emailInput;

// document.addEventListener('load', fetchData());
// function fetchData() { // returns a promise once data is retrieved from the web server and passed as json
//    fetch(`${apiURL}${apiKey}`) // full URL: https://api.unsplash.com/photos/random?client_id=tJTJmyfzjWKJEFP4tUYl3hQTTCLEPHtvnoQv3yvWp9k
//     .then(data => {
//         console.log(data);
//         currentImage = data.url;
//         console.log(currentImage);
//         imageContainer.innerHTML = `<img src=${currentImage}>`;
//     })
//     //.then(json => imageList = json)
//     //.then(log => console.log(imageList))
//     .catch(error => console.log("Error, there was a problem", error))    
// }

// //console.log(currentImage);