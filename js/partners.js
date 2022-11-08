
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1 ,
    // centeredSlides: true,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1430: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1620: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1910: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
  });

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
      anchor.addEventListener("click", function(event) {
          event.preventDefault();
          const blockID = anchor.getAttribute('href')
          document.querySelector('' + blockID).scrollIntoView({
              behavior : 'smooth',
              block: 'start',
          })
      })
  }


  document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header')
    const headerMenu = document.querySelector('.header-memu__scroll')
 
     window.addEventListener('scroll', () => {
 
         let scrollTop = window.scrollY;
         let headerCenter = header.offsetHeight  / 1.1;
 
         if (scrollTop >= headerCenter) {
             headerMenu.classList.add('fixed')
           
            
         } else {
             headerMenu.classList.remove('fixed')
           
         }
         
     
     });
 });
