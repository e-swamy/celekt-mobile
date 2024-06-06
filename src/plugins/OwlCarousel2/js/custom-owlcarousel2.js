$(document).ready(function () {
    $('.main-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 450,
        nav: false,
        navText: ['<i class="bx bxs-chevron-left"></i>', '<i class="bx bxs-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    // $('.today-deals-slider').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });

    $('.today-deals-slider').owlCarousel({
        loop: false,
        margin: 20,
        autoplay: false,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 530,
        // touchDrag: true,
        // mouseDrag: false,
        nav: false,
        dots: false,
        navText: ['<i class="bx bxs-chevron-left"></i>', '<i class="bx bxs-chevron-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 5
            },
            1920: {
                items: 6
            }
        }
    });
    
    $('.mainoffers-one').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 350,
        nav: false,
        dots: false,
        navText: ['<i class="bx bxs-chevron-left"></i>', '<i class="bx bxs-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });
    $('.smart-product-sliders').owlCarousel({
        loop: false,
        margin: 20,
        autoplay: false,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 630,
        nav: false,
        dots: false,
        navText: ['<i class="bx bxs-chevron-left"></i>', '<i class="bx bxs-chevron-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 5
            },
            1920: {
                items: 6
            }
        }
    });
    $('.recentlyviewed-product-sliders').owlCarousel({
        loop: false,
        margin: 20,
        autoplay: false,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 630,
        nav: false,
        dots: false,
        navText: ['<i class="bx bxs-chevron-left"></i>', '<i class="bx bxs-chevron-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 5
            },
            1920: {
                items: 6
            }
        }
    });
    $('.top-brands-sliders').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 630,
        nav: false,
        dots: false,
        navText: ['<i class="bx bxs-chevron-left"></i>', '<i class="bx bxs-chevron-right"></i>'],
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 4
            },
            991: {
                items: 5
            },
            1200: {
                items: 6
            },
            1920: {
                items: 8
            }
        }
    });
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1020,
        nav: false,
        dots: true,
        navText: ['<i class="bx bxs-chevron-left"></i>', '<i class="bx bxs-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 2
            },
            1200: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    });

});