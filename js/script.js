function readMore() {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML="Подробнее ...";
        more.style.display="none";
    } else {
        dots.style.display = "none";
        btn.innerHTML="Cкрыть";
        more.style.display="inline";
    }
}

function readMore2() {
    let dots2 = document.getElementById("dots2");
    let more2 = document.getElementById("more2");
    let btn2 = document.getElementById("btn2");

    if(dots2.style.display === "none") {
        dots2.style.display = "inline";
        btn2.innerHTML="Подробнее ...";
        more2.style.display="none";
    } else {
        dots2.style.display = "none";
        btn2.innerHTML="Cкрыть";
        more2.style.display="inline";
    }
}

function readMore3() {
    let dots3 = document.getElementById("dots3");
    let more3 = document.getElementById("more3");
    let btn3 = document.getElementById("btn3");

    if(dots3.style.display === "none") {
        dots3.style.display = "inline";
        btn3.innerHTML="Подробнее ...";
        more3.style.display="none";
    } else {
        dots3.style.display = "none";
        btn3.innerHTML="Cкрыть";
        more3.style.display="inline";
    }
}

// swipper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 3000,
      },
      effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


// burger menu
// определение устройства пользователя

"use strict"


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('touch');

    let menuArrows = document.querySelectorAll('.menu-arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            let menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('active-arrow');
            });
        }
    }

  } else {
    document.body.classList.add('pc');
}

// menu burger

const iconMenu = document.querySelector('.burger-menu');
const menuBody = document.querySelector('.menu-body');
if (iconMenu) {
   
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('cross');
        menuBody.classList.toggle('active');
    });
}




// плавный скролл

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;


            if (iconMenu.classList.contains('cross')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('cross');
                menuBody.classList.remove('active');
            }

            window.scroll({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


