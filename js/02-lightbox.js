import { galleryItems } from './gallery-items.js';
// Change code below this line

// vars
const galary = document.querySelector('.gallery');
let activModal; 

//gallery creating
const galleryItem = galleryItems.map(({ preview, original, description })=> { 
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>`
}).join('');

galary.innerHTML = galleryItem;

//SimpleLightbox inicialization.
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,    
});