
// hero Gallery' automatic slide show 

let scrollContainer = document.querySelector(".grid-container");
let bckBtn = document.getElementById("back-btn");
let nxtBtn = document.getElementById("next-btn");

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
})

nxtBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

bckBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

// Hero Gallery's light box 

const gridImages = document.querySelectorAll('.grid-container img');

gridImages.forEach(image => {
    image.addEventListener('click', () => {
    
        lightboxImage.src = image.src;

        lightbox.style.display = 'block';
    });
});


// Full gallery section's toggle function

const viewGallery = document.getElementById('view-gallery');
const galleryContainer = document.getElementById('gallery-container');

viewGallery.addEventListener('click', () => {
    if (galleryContainer.style.display === 'none' || galleryContainer.style.display === '') {
       
        galleryContainer.style.display = 'flex';
    } else {
    
        galleryContainer.style.display = 'none';
    }
});

// Full gallery section's Write loop 
function pause(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['Full Gallery  ', 'More awesome photos '  , 'Cool sceneries  ', 'All snaps  '];
const element = document.getElementById('text-b');

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            element.innerText = curWord.substring(0, i);
            await pause(sleepTime);
        }

        await pause(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            element.innerText = curWord.substring(0, i);
            await pause(sleepTime);
        }

      
        curPhraseIndex = (curPhraseIndex + 1) % phrases.length;

      
        await pause(sleepTime * 10);
    }
};

// Call the writeLoop function to start the animation
writeLoop();

// Lightbox feature 

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('lightboxExit');
const galleryImages = document.querySelectorAll('.gallery-img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightbox.style.display = 'block';
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Hamburger- Responsive Nav bar

const toggleButton = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});






