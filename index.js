const lightbox = document.querySelector('.gallery--lightbox');
const lightboxImg = document.querySelector('.gallery--lightbox--img');
const lightboxClose = document.querySelector('.gallery--lightbox--closeicon');
const galleryImages = document.querySelectorAll('.gallery--image');

galleryImages.forEach( img => {
    img.addEventListener('click', e => {
        lightboxOn()
        lightboxImg.src = img.src;
        } 
    )
})

lightbox.addEventListener ('click',e => {
    if ( e.target.className === 'gallery--lightbox') 
        lightboxOff()
})

lightboxClose.addEventListener('click',e => {
    lightboxOff()
})

const lightboxOn = () => lightbox.style.display = 'flex';
const lightboxOff = () => lightbox.style.display = 'none';