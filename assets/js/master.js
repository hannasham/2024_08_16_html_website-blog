// alert('js is connecterd');
document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu funtionality
    const toggle = document.getElementById('toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    // Popup window of the gallery
    if (document.body.classList.contains('gallery')) {
        const image = document.querySelector('.gallery_image');
        const popup = document.getElementById('popup');
        const popupContent = document.getElementById('popup_image');
        const close = document.getElementById('close');
    
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('gallery_image')) {
               const src = event.target.src;
               const img = document.createElement('img');
               img.src = src;
               popupContent.appendChild(img);
               popup.classList.add('open');
            }
        });
    
        close.addEventListener('click', function() {
            const img = popupContent.querySelector('img');
            if (img) {
                popupContent.removeChild(img);
            }
            popup.classList.remove('open');
        });
    }


});



