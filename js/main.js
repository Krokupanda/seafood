$(function () {

    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="previous button"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="previous button"></button>',
        vertical: true,
        responsive: [
            {
                breakpoint: 371,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });

    $('.product__name').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerPadding: '58px',
        asNavFor: '.product__content',
        vertical: true,
        centerMode: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="previous button"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="previous button"></button>',
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    arrows: false,
                    vertical: false,
                    slidesToShow: 3,
                    dots: true
                }
            },
            {
                breakpoint: 461,
                settings: {
                    arrows: false,
                    vertical: false,
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});