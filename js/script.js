const menuHamburger = document.querySelector("#menuh")
const navLinks = document.querySelector('.navlinks')
document.addEventListener('DOMContentLoaded', function() {
  // Votre code ici
  menuHamburger.addEventListener('click',()=>{
  navLinks.classList.toggle('mobile-menu')
  console.log('menuHamburger');
})
});


const videos = document.querySelectorAll('.class');

function showVideo(index) {
  videos.forEach(video => video.style.display = 'none');
videos[index].style.display = 'block';
};
