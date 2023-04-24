// Add imports above this line
import { galleryItems } from './gallery-items';
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Change code below this line

document.addEventListener('DOMContentLoaded', () => {

    const gallery = document.querySelector('.gallery')

    const galleryMarkup = galleryItems
    
    .map (({ preview, original, description}) => `

    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `)
  .join('');
    
gallery.insertAdjacentHTML('beforeend', galleryMarkup)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });
    });
    
console.log(galleryItems);
