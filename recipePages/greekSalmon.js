const closeBtn = document.querySelectorAll('.closeBtn');
const popup  = document.querySelectorAll('.imageOverlay');

closeBtn.forEach(closeBtn => closeBtn.addEventListener('click', () => {
    popup.forEach(popup => popup.style.display = "none")
}))