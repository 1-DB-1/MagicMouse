/***************************************************
==================== JS INDEX ======================
****************************************************
01. ScrollToTop Js
02. Smooth Scroll
03. WOW Js
04. NiceSelect
05. Number Input
06. Mean-menu Navbar
07. OwlCarousel for home page 
08. Sticky Menu 
09. CounterUp
10. Isotope Js for Project
11. Fancy Box
12. Search Box
13. Info bar
14. OwlCarousel for project home 01 
15. OwlCarousel for testimonial home 01
16. OwlCarousel for news home 01
17. OwlCarousel for team home 03
18. Counter Js home 01
19. Counter Js home 03
20. OwlCarousel for testimonial home 02
21. OwlCarousel for testimonial home 03
22. Progress-skill
23. Preloader Js
****************************************************/


(function ($) {
    "use strict";


    ////////////////////////////////////////////////////
    // 01. ScrollToTop Js
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    ////////////////////////////////////////////////////
    // 02. Smooth Scroll
    $('a.smooth-scroll').on('click', function (event) {
        event.preventDefault();
        var section_smooth = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section_smooth).offset().top
        }, 1250, 'easeInOutExpo');
    });


    ////////////////////////////////////////////////////
    // 03. WOW Js
    new WOW().init();


    ////////////////////////////////////////////////////
    // 04. NiceSelect
    $('select').niceSelect();


    ////////////////////////////////////////////////////
    // 05. Number Input
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-plus"></i></div><div class="quantity-button quantity-down"><i class="fas fa-minus"></i></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });


    //////////////////////////////////////////////////////
    // 06. Mean-menu Navbar
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991"
    });


    ////////////////////////////////////////////////////
    // 07. OwlCarousel for home page  
    function homeSlider() {
        var slider = $('.slider1__active');
        slider.owlCarousel({
            loop: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            smartSpeed: 1200,
            autoplayTimeout: 9000,
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
        });
        slider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var slider_animation = $(this).data('animation');
                $(this).removeClass('animated ' + slider_animation).css('opacity', '0');
            });
        });
        $("[data-delay]").each(function () {
            var animation_delay = $(this).data('delay');
            $(this).css('animation-delay', animation_delay);
        });
        $("[data-duration]").each(function () {
            var animation_dutation = $(this).data('duration');
            $(this).css('animation-duration', animation_dutation);
        });
        slider.on('translated.owl.carousel', function () {
            var layer = slider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var slider_animation = $(this).data('animation');
                $(this).addClass('animated ' + slider_animation).css('opacity', '1');
            });
        });
    }
    homeSlider();


    ////////////////////////////////////////////////////
    // 08. Sticky Menu 
    if (screen.width >= 992) {
        $(document).on('scroll', function (e) {
            var scrollPos = $(this).scrollTop();
            if (scrollPos > 400) {
                $('.header__menu-wrapper').addClass('menu_sticky');
                $('.header__menu-wrapper').addClass('animated');
                $('.header__menu-wrapper').addClass('slideInDown');
            } else {
                $('.header__menu-wrapper').removeClass('menu_sticky');
                $('.header__menu-wrapper').removeClass('animated');
                $('.header__menu-wrapper').removeClass('slideInDown');
            }
        });
    };


    ////////////////////////////////////////////////////
    // 09. CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });


    ////////////////////////////////////////////////////
    // 10. Isotope Js for Project
    $('.projects2__active button').on('click', function () {
        $(".projects2__active button").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: selector
        });
    });
    $(window).on("load", function () {
        $("#isotope-container").isotope();
    });

    $('.projects3__active button').on('click', function () {
        $(".projects3__active button").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: selector
        });
    });
    $(window).on("load", function () {
        $("#isotope-container").isotope();
    });


    //////////////////////////////////////////////////
    // 11. Fancy Box
    $('[data-fancybox="gallery_1"]').fancybox({
        loop: true,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        animationEffect: "zoom-in-out",
        transitionEffect: "circular"
    });


    ////////////////////////////////////////////////////
    // 12. Search Box
    if ($(".search_box_container").length) {
        var searchToggleBtn = $(".search_btn");
        var searchContent = $(".search_form");
        var body = $("body");

        searchToggleBtn.on("click", function (e) {
            searchContent.toggleClass("search_form_toggle");
            e.stopPropagation();
        });

        body.on("click", function () {
            searchContent.removeClass("search_form_toggle");
        }).find(searchContent).on("click", function (e) {
            e.stopPropagation();
        });
    };


    ////////////////////////////////////////////////////
    // 13. Info bar
    $(".extra_info_btn").on("click", function () {
        $(".extra_info").addClass("extra_info_open");
    });

    $(".extra_info_close").on("click", function () {
        $(".extra_info").removeClass("extra_info_open");
    });


    ////////////////////////////////////////////////////
    // 14. OwlCarousel for project home 01 
    $('.projects1__carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        margin: 30,
        autoplayTimeout: 6000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });


    ////////////////////////////////////////////////////
    // 15. OwlCarousel for testimonial home 01
    $('.testimonial1__carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        margin: 0,
        autoplayTimeout: 6000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    ////////////////////////////////////////////////////
    // 16. OwlCarousel for news home 01
    $('.news1__carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        margin: 30,
        autoplayTimeout: 8000,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i> PREV', 'NEXT <i class="fas fa-chevron-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });


    ////////////////////////////////////////////////////
    // 17. OwlCarousel for team home 03
    $('.team1__carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        margin: 30,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['PREV', 'NEXT'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });


    ////////////////////////////////////////////////////
    // 18. Counter Js home 01
    $("#counter1").waypoint(function () {
        // circle-1
        $('#circle-1').circleProgress({
            value: 0.78,
            size: 200,
            thickness: 10,
            // lineCap: 'round',
            emptyFill: "#f4f4f4",
            fill: '#86BC25'
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.counter1__percentage').html(Math.round(78 * progress) + '<i>%</i>');
        });
        // circle-2
        $('#circle-2').circleProgress({
            value: 0.90,
            size: 200,
            thickness: 10,
            emptyFill: "#f4f4f4",
            fill: '#86BC25'
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.counter1__percentage').html(Math.round(90 * progress) + '<i>%</i>');
        });
        // circle-3
        $('#circle-3').circleProgress({
            value: 0.62,
            size: 200,
            thickness: 10,
            emptyFill: "#f4f4f4",
            fill: '#86BC25'
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.counter1__percentage').html(Math.round(62 * progress) + '<i>%</i>');
        });
        // circle-4
        $('#circle-4').circleProgress({
            value: 0.85,
            size: 200,
            thickness: 10,
            emptyFill: "#f4f4f4",
            fill: '#86BC25'
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.counter1__percentage').html(Math.round(85 * progress) + '<i>%</i>');
        });
    }, {
        offset: 'bottom-in-view'
    });


    ////////////////////////////////////////////////////
    // 19. Counter Js home 03
    $("#counter2").waypoint(function () {
        // circle-1
        $('#circle-1').circleProgress({
            value: 0.78,
            size: 200,
            thickness: 10,
            // lineCap: 'round',
            emptyFill: "#314D79",
            fill: '#ff5e14'
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.counter1__percentage').html(Math.round(78 * progress) + '<i>%</i>');
        });
        // circle-2
        $('#circle-2').circleProgress({
            value: 0.90,
            size: 200,
            thickness: 10,
            emptyFill: "#314D79",
            fill: '#ff5e14'
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.counter1__percentage').html(Math.round(90 * progress) + '<i>%</i>');
        });
        // circle-3
        $('#circle-3').circleProgress({
            value: 0.62,
            size: 200,
            thickness: 10,
            emptyFill: "#314D79",
            fill: '#ff5e14'
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.counter1__percentage').html(Math.round(62 * progress) + '<i>%</i>');
        });
        // circle-4
        $('#circle-4').circleProgress({
            value: 0.85,
            size: 200,
            thickness: 10,
            emptyFill: "#314D79",
            fill: '#ff5e14'
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.counter1__percentage').html(Math.round(85 * progress) + '<i>%</i>');
        });
    }, {
        offset: 'bottom-in-view'
    });


    ////////////////////////////////////////////////////
    // 20. OwlCarousel for testimonial home 02
    $('.testimonial2__carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        margin: 0,
        autoplayTimeout: 6000,
        nav: false,
        dots: true,
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
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });


    ////////////////////////////////////////////////////
    // 21. OwlCarousel for testimonial home 03
    $('.testimonial3__sponsor').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        autoplayHoverPause: true,
        margin: 30,
        autoplayTimeout: 5000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            641: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    ////////////////////////////////////////////////////
    // 22. Progress-skill
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        })
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });





    //////////////////////////////////////////////////////
    // window load function
    $(window).on("load", function () {

        //////////////////////////////////////////////////////
        // 23. Preloader Js
        $(".preloader").delay(350).fadeOut('slow');

    });


})(jQuery);