const images = ["astronomy-1867616_1920.jpg", "aurora-1197753_1920.jpg", "beach-418742_1920.jpg", "beach-832346.jpg", "books-1655783_1920.jpg","maldives-1993704.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.id = "backgroundimg";
document.body.appendChild(bgImage);