new Swiper('.sliders', {

    spaceBetween: 30,
    breakpoints: {
        870: {
            slidesPerView: 3,
        },
        730: {
            slidesPerView: 2.3,
        },
        600: {
            slidesPerView: 1.6,
        },
        520:  {
            slidesPerView: 2.4
        },
        380: {
            slidesPerView: 1.5
        },

        320: {
            slidesPerView: 1.3
        }
    }
})






let lazy_images = document.querySelectorAll('img[data-src]')
let windowHeight = document.documentElement.clientHeight
let coords = []

lazy_images.forEach(item => {
    coords.push(item.getBoundingClientRect().top + pageYOffset)
    lazyScrollCheck()
})

window.addEventListener('scroll', lazyScrollCheck   )

function lazyScrollCheck(){
    let imgIndex = coords.findIndex(
        item => pageYOffset > item - windowHeight
    )
    if (imgIndex >= 0) {
        if (lazy_images[imgIndex].dataset.src){
            lazy_images[imgIndex].src = lazy_images[imgIndex].dataset.src;
            lazy_images[imgIndex].removeAttribute('data-srcset');
        }

        delete coords[imgIndex]
    }
}




let nav_btn = document.querySelector('.check__nav');
let nav_open = document.querySelector('.blog__navbar ul');

nav_btn.addEventListener('change', () => {
    if (nav_btn.checked) {
        nav_open.style.height = '225px';
        nav_open.style.padding = '10px 0 0 0'
    }
    else{
        nav_open.style.height = '0';
        nav_open.style.padding = '0 0 0 0'
    }
})
