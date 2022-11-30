const images = [
    "gnr1.jpeg",
    "muse.webp",
    "ratm.jpeg",];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
