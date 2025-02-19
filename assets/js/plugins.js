$('.popular_course_owl_carousel')
    .owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
                nav: true,
                dots: false,
            },
            1200: {
                items: 3,
                nav: true,
                dots: false,
            }
        }
    });