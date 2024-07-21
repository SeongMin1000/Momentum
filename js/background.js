const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

const chooseImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")
bgImage.src = `img/${chooseImage}`
bgImage.id = "background-image";
document.body.prepend(bgImage)