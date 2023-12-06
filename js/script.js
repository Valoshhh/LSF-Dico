const menuHamburger = document.querySelector("#menuh")
const navLinks = document.querySelector('.navlinks')
document.addEventListener('DOMContentLoaded', function() {
  // Votre code ici
  menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
  })
});

document.addEventListener('DOMContentLoaded', function() {
  const words = document.querySelectorAll('.color-change span');

  setInterval(() => {
    words.forEach(word => {
      word.style.color = getRandomColor();
    });
  }, 1000);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

document.getElementById('main').addEventListener('mouseenter', function () {
  this.src = './Asset/jetaime.jpg';
});
document.getElementById('main').addEventListener('mouseleave', function() {
  this.src = './Asset/mainbonjour.jpg';
});



function showVideo(index) {
  let videoSelect = document.querySelector('.video-iframe' + index);
  let video1 = document.querySelector('.video-iframe1');
  let video2 = document.querySelector('.video-iframe2');
  let video3 = document.querySelector('.video-iframe3');
  let video4 = document.querySelector('.video-iframe4');

    // Ajoutez la classe de transition à toutes les vidéos
    let allVideos = document.querySelectorAll('.video-iframe');
    allVideos.forEach(video => {
      video.classList.add('video-transition');
    });


  switch (index) {
    case 1:
      videoSelect.style.left = '40%';
      videoSelect.style.zIndex = '4';
      videoSelect.style.opacity = "1";
      videoSelect.style.top='0%';

      video2.style.left= '15%' ;
      video2.style.zIndex = '2';
      video2.style.top='-230px';
      video2.style.opacity = "0.7";
      
      video3.style.left= '65%' ;
      video3.style.zIndex = '2';
      video3.style.top='-440px';
      video3.style.opacity = "0.7";

      video4.style.left= '40%' ;
      video4.style.zIndex = '1';
      video4.style.top='-750px';
      video4.style.opacity = "0.5";

      break;
      
      case 2:
        videoSelect.style.left = '40%';
        videoSelect.style.zIndex = '4';
        videoSelect.style.top = "-200px";
        videoSelect.style.opacity = "1";

      video1.style.left= '15%' ;
      video1.style.zIndex = '2';
      video1.style.top='-40px';
      video1.style.opacity = "0.7";

      video3.style.left= '65%' ;
      video3.style.zIndex = '2';
      video3.style.top='-440px';
      video3.style.opacity = "0.7";

      video4.style.left= '40%' ;
      video4.style.zIndex = '1';
      video4.style.top='-750px%';
      video4.style.opacity = "0.5";

      break;

    case 3:
      videoSelect.style.left = '40%';
      videoSelect.style.zIndex = '4';
      videoSelect.style.top = "-400px";
      videoSelect.style.opacity = "1";

      video1.style.left= '15%' ;
      video1.style.zIndex = '2';
      video1.style.top='-40px';
      video1.style.opacity = "0.7";

      video2.style.left= '65%' ;
      video2.style.zIndex = '2';
      video2.style.top='-240px';
      video2.style.opacity = "0.7";


      video4.style.left= '40%' ;
      video4.style.zIndex = '1';
      video4.style.top='-750px';
      video4.style.opacity = "0.5";


      break;

    case 4:
      videoSelect.style.left = '40%';
      videoSelect.style.zIndex = '4';
      videoSelect.style.top='-600px';
      videoSelect.style.opacity = "1";


      video1.style.left= '15%' ;
      video1.style.zIndex = '2';
      video1.style.top='-40px';
      video1.style.opacity = "0.7";

      video2.style.left= '65%' ;
      video2.style.zIndex = '2';
      video2.style.top='-240px';
      video2.style.opacity = "0.7";

      video3.style.left= '40%' ;
      video3.style.zIndex = '1';
      video3.style.top='-540px';
      video3.style.opacity = "0.5";
      break;
  }
};

const carousel = document.querySelector('.carousel');
let currdeg = 0;

document.querySelector('.next').addEventListener('click', function() {
  rotate('n');
});

document.querySelector('.prev').addEventListener('click', function() {
  rotate('p');
});

function rotate(direction) {
  if (direction === 'n') {
    currdeg -= 60;
  }
  if (direction === 'p') {
    currdeg += 60;
  }
  
  carousel.style.transform = `rotateY(${currdeg}deg)`;
};



// document.addEventListener('scroll', function() {
//   const timelineItems = document.querySelectorAll('.timeline-item');

//   function checkTimelineItems() {
//     timelineItems.forEach((item) => {
//       if (isElementInViewport(item)) {
//         item.classList.add('active');
//       }
//     });
//   }

//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   checkTimelineItems();
// });





// document.addEventListener('DOMContentLoaded', function() {
//   const sectionTitle = document.querySelector('.section-title');
//   const aboutUsContent = document.querySelector('.about-us-content');

//   function checkVisibility() {
//     const sectionTitleTop = sectionTitle.getBoundingClientRect().top;
//     const aboutUsContentTop = aboutUsContent.getBoundingClientRect().top;

//     if (sectionTitleTop < window.innerHeight) {
//       sectionTitle.classList.add('active');
//     }

//     if (aboutUsContentTop < window.innerHeight) {
//       aboutUsContent.classList.add('active');
//     }
//   }

//   // Vérifiez la visibilité lors du chargement de la page
//   checkVisibility();

//   // Vérifiez la visibilité lors du défilement
//   window.addEventListener('scroll', checkVisibility);
// });

document.addEventListener('scroll', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const sectionTitle = document.querySelector('.section-title');
  const aboutUsContent = document.querySelector('.about-us-content');

  function checkVisibility(el, className) {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < window.innerHeight) {
      el.classList.add(className);
    }
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkTimelineItems() {
    timelineItems.forEach((item) => {
      if (isElementInViewport(item)) {
        item.classList.add('active');
      }
    });

    checkVisibility(sectionTitle, 'active');
    checkVisibility(aboutUsContent, 'active');
  }

  // Utilisation du throttling avec Lodash
  checkTimelineItems();
});

// Vous pouvez toujours conserver la gestion du défilement pour la fonction checkTimelineItems




