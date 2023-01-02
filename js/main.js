/*----------- Progress Start Here -----------*/
$(document).ready(function () {
    $('.wordpress').animate({
        width: '85%'
    }, 2000);
    $('.graphic').animate({
        width: '60%'
    }, 2000);
    $('.web').animate({
        width: '60%'
    }, 2000);
    $('.seo').animate({
        width: '70%'
    }, 2000);
    $('.email').animate({
        width: '70%'
    }, 2000);
});
/*----------- Progress End Here -----------*/


/*----------- Portfolio Start Here -----------*/
jQuery(".filter-button").click(function () {
    jQuery(".filter-button").removeClass('active');
    jQuery(this).toggleClass('active');
});

$('#slider1').on('change', function () {
    $('img').css('width', this.value);
});
/*----------- Portfolio End Here -----------*/


/*----------- Owl Carousel Start Here -----------*/
$(document).ready(function () {
    $('.slider-active').owlCarousel({
        loop: true,
        navText: ['<i class="fa fa-arrow-circle-left"></i>', '<i class="fa fa-arrow-circle-right"></i>'],
        nav: true,
        pagination: false,
        navigation: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        animateOut: 'bounceOutRight',
        animateIn: 'bounceInLeft',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});
/*----------- Owl Carousel End Here -----------*/


/*----------- Sticky Navbar Start Here -----------*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.navbar-inverse').addClass("sticky");
    } else {
        $('.navbar-inverse').removeClass("sticky");
    }
});
/*----------- Sticky Navbar End Here -----------*/
