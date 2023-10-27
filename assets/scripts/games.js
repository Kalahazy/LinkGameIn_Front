var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    spaceBetween: 10,


    breakpoints: {
        400: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }
});