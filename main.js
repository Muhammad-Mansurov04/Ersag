$(function(){


    $('.header-slider').slick({
        dots: true,
        dots: 'slick-dots',
        prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev" src="images/navigate-up-arrow.png" alt="" width="24">Previous</button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slick-next" src="images/arrow-down-sign-to-navigate.png" alt="" width="24">Next</button>',
        fade: true
    });


});
$(function(){


    $('.header-slider').slick({
        arrow: false,
        dots: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img class="slick-prev" src="images/navigate-up-arrow.png" alt="" width="24">Previous</button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slick-next" src="images/arrow-down-sign-to-navigate.png" alt="" width="24">Next</button>',
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });


});