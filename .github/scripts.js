function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scroll effect
    });
}


function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = gallery.clientWidth; // Scroll by the width of the gallery

    if (direction === 1) {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Scroll forward
    } else if (direction === -1) {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // Scroll backward
    }
}