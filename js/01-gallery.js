import { galleryItems } from './gallery-items.js';

// Change code below this line

// vars
const galary = document.querySelector('.gallery');
let activModal; 

//gallery creating
const galleryItem = galleryItems.map(({ preview, original, description })=> { 
    return `<div class="gallery__item"> 
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </div>`
}).join('');
galary.innerHTML = galleryItem;

// events
galary.addEventListener('click', openModal);
window.addEventListener('keydown', closeImgLightHouse);

//lightBox modal window open
function openModal (event) {

   const evTarget = event.target;

   event.preventDefault();  

   if (evTarget.nodeName === "IMG") {

     const imageRef = evTarget.dataset.source;
     activModal = createLightBox (imageRef);
     activModal.show();

   }
}

//Create lightBox instance
function createLightBox (imgUrl) {
    return basicLightbox.create(`
    <img src="${imgUrl}">
    `);
}

//lightBox modal window close by Escape
function closeImgLightHouse (e) {
    if (e.key !== "Escape") {
        return;
    }

    if (basicLightbox.visible()) {
        activModal.close();
    }
}