{/* <script src="https://unpkg.com/scrollreveal@4.0.0"></script>

    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-im', {origin: 'left'}); */}
function previewImage(imagePath) {
    document.getElementById('previewImage').src = imagePath;
    document.getElementById('imagePreview').style.display = 'flex';
}

function closeImagePreview() {
    document.getElementById('imagePreview').style.display = 'none';
}