document.getElementById("openMenu").addEventListener("click", () => {
    document.getElementById("colMenu").style.display = "block";
    document.getElementById("colMenu").style.position = "fixed";
})
document.getElementById("closeMenu").addEventListener("click", () => {
    document.getElementById("colMenu").style.display = "none";
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 8500,
    },
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5
        }
    },
    centeredSlides: true,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});