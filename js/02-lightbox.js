import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// vars
const galary = document.querySelector('.gallery');
let activModal; 

//gallery creating
const galleryItem = galleryItems.map(({ preview, original, description })=> { 
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}).join('');

galary.innerHTML = galleryItem;

var lightbox = new SimpleLightbox('.gallery a');

// galary.addEventListener('click', imgShow);

// function imgShow(ev) {
//     event.preventDefault(); 
//     if (ev.target.nodeName === "IMG") {
//         lightbox.open (ev.target.src);
//     } 
// }
// // events
// galary.addEventListener('click', openModal);
// window.addEventListener('keydown', closeImgLightHouse);

// //lightBox modal window open
// function openModal (event) {

//    const evTarget = event.target;

//    event.preventDefault();  

//    if (evTarget.nodeName === "IMG") {

//      const imageRef = evTarget.dataset.source;
//      activModal = createLightBox (imageRef);
//      activModal.show();

//    }
// }

// //Create lightBox instance
// function createLightBox (imgUrl) {
//     return basicLightbox.create(`
//     <img src="${imgUrl}">
//     `);
// }

// //lightBox modal window close by Escape
// function closeImgLightHouse (e) {
//     if (e.key !== "Escape") {
//         return;
//     }

//     // if (basicLightbox.visible()) {
//     //     activModal.close();
//     // }
// }