const closeBtn = document.querySelectorAll('.closeBtn');
const popup  = document.querySelectorAll('.imageOverlay');
const viewImage = document.querySelectorAll('.imageContainer');

closeBtn.forEach(closeBtn => closeBtn.addEventListener('click', () => {
    popup.forEach(popup => popup.style.display = "none")
}))

viewImage.forEach(viewImage => viewImage.addEventListener('click', ()=>{
    event.preventDefault();
    popup.forEach(popup => popup.style.display = "flex")
}))