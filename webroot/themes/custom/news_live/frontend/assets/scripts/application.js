(function($) {

    //Declaring variables
    var $techT = '.tech-title';
    var $lifeT = '.life-title';

    //Menu level variables
    var $mlevel2 = '.menu-level-2';

    //Menu item variables
    var $mitem1 = '.menu-item-1';
    var $mitem2 = '.menu-item-2';

    //Menu link variables
    var $mlink1 = '.menu-link-1';
    var $mlink2 = '.menu-link-2';

    //Sub-menu blocks
    var $allMenuBlocks = '#block-subfirstmenublock--2, #block-subsecondmenublock--2,#block-subthirdmenublock--2, #block-subfirstmenublock, #block-subsecondmenublock,#block-subthirdmenublock';
    var $healthBlock = '#block-subfirstmenublock, #block-subfirstmenublock--2';
    var $foodBlock = '#block-subsecondmenublock, #block-subsecondmenublock--2';
    var $travelBlock = '#block-subthirdmenublock, #block-subthirdmenublock--2';
    var $videoBlock = '#block-videomain, #block-videomain--2';
    var $lifeSub = '.htf-b';
    var $O = 'opened';

    var $screenSize = $(window).width();



    /**
     *  Behavior to addclass onClick to search form
     */
    Drupal.behaviors.mainNavSearch = {
        attach: function () {

            $('.search').on('click', function(){
                $('.block-search').toggleClass('search-me');
            });

        }
    };

    /**
     *  Behavior to add functionality to front page popupar news block
     */
    Drupal.behaviors.popularTabs = {
        attach: function () {

            $('.popular-news-front .technology').addClass('selected-tab');
            $($techT).addClass('title');

            /**
             * Showing technology tab
             */
            $($techT).on('click', function () {
                $(this).addClass('title');
                $($lifeT).removeClass('title');
                $('.technology').fadeIn(300);
                $('.lifestyle').fadeOut(300);
            });

            /**
             * Showing lifestyle tab
             */
            $($lifeT).on('click', function () {
                $(this).addClass('title');
                $($techT).removeClass('title');
                $('.technology').fadeOut(300);
                $('.lifestyle').fadeIn(300);
            });


        }
    };



    /**
     * Behavior for scroll to top button
     */
    Drupal.behaviors.scrollToTop = {
        attach: function () {

            $(window).scroll(function() {
                if ($(this).scrollTop()) {
                    $('.toTop').fadeIn();
                } else {
                    $('.toTop').fadeOut();
                }
            });
            $('.toTop').click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        }
    };



    /**
     * Behavior for contact us page accordian
     */
    Drupal.behaviors.contactUs = {
        attach: function () {
            /**
             * Showing and hiding block with info and with map
             */
            $('.block-info').on('click',function () {
                $(this).find('.info').toggleClass('shown');
            });

        }
    };

    $(document).ready(function(){
        //Showing site content when page finishes loading
        $('.title-slider-wrapper, .login-form-block, .register-form-block,' +
            ' .layout-container , body, .trending-news-slide').show();

        $('#edit-field-password-0-value, #edit-field-confirm-password-0-value').attr("type","password");

        if ($screenSize <= 992) {

            $('.menu-item-1 > .menu-level-2').closest('li').addClass('has_sub');
            $('.menu-item-2 > .menu-level-3').closest('li').addClass('has_sub_sub');

            $('.has_sub').prepend('<span class="sub-toggle"></span>');
            $('.has_sub_sub').prepend('<span class="sub-sub-toggle"></span>');

            $('.sub-toggle').on('click', function () {
                $($(this)).closest('.menu-item-1').toggleClass('drop');
                $('.has_sub_sub.drop-drop').removeClass('drop-drop');
            });
            $('.sub-sub-toggle').on('click', function () {
                $($(this)).closest('.menu-item-2').toggleClass('drop-drop');
            });

            $('span.open').on('click', function () {
                $('.wrapper').addClass('slide-in');
                $('.overlay-m').addClass('activated-l');
            });

            //Mobile menu close
            $('.menu--main').append('<span class="close"></span>');
            //Close function
            $('.close').on('click', function () {
                $('.wrapper').removeClass('slide-in');
                $('.overlay-m').removeClass('activated-l');
                $('.has_sub').removeClass('drop');
                $('.has_sub.drop').removeClass('drop');
                $('.has_sub_sub.drop-drop').removeClass('drop-drop');
            });

        } else {

            //Main desktop navigation
            //Adding active class from link to li
            $('a.is-active').closest('li').addClass('is-active');
            //Adding link value to li

            $($mlink2).filter(function () {
                if($(this).text().indexOf('Health') !==-1) {
                    $(this).parent().first().addClass('h-b');
                } else if($(this).text().indexOf('Travel') !==-1) {
                    $(this).parent().first().addClass('t-b');
                } else if($(this).text().indexOf('Food') !==-1){
                    $(this).parent().first().addClass('f-b');
                }
            });

            $($mlink1).filter(function () {
                if($(this).text().indexOf('Video') !==-1) {
                    $(this).parent().first().addClass('v-b');
                }
            });


            $($mitem1).has('.menu-item-2.h-b').addClass('htf-b');

            $($mitem1).has('ul.menu-level-3').addClass('has_drop');
            $($mitem2).has('ul.menu-level-3').addClass('has_sub');

            $($lifeSub).mouseenter(function () {
                $(this).addClass('sub-active');
                $($healthBlock).addClass($O);
            });
            $('.h-b').mouseenter(function () {
                $($healthBlock).addClass($O);
                $($foodBlock).removeClass($O);
                $($travelBlock).removeClass($O);
            });
            $('.t-b').mouseenter(function () {
                $($travelBlock).addClass($O);
                $($foodBlock).removeClass($O);
                $($healthBlock).removeClass($O);
            });
            $('.f-b').mouseenter(function () {
                $($foodBlock).addClass($O);
                $($healthBlock).removeClass($O);
                $($travelBlock).removeClass($O);
            });


            $($allMenuBlocks).mouseenter(function () {
                $($lifeSub).addClass('sub-active');
            });

            $($healthBlock).mouseenter(function () {
                $(this).addClass($O);
            });
            $($foodBlock).mouseenter(function () {
                $(this).addClass($O);
            });
            $($travelBlock).mouseenter(function () {
                $(this).addClass($O);
            });

            $($mlevel2).mouseleave(function () {
                $($lifeSub).removeClass('sub-active');
                $($allMenuBlocks).removeClass($O);
            });
            $($allMenuBlocks).mouseleave(function () {
                $(this).removeClass($O);
                $($lifeSub).removeClass('sub-active');
            });
            $($lifeSub).mouseleave(function () {
                $(this).removeClass('sub-active');
                $($allMenuBlocks).removeClass($O);
            });

            $('.v-b').mouseenter(function () {
                $('.v-b .menu-link-1').addClass('is-active');
                $($videoBlock).addClass($O);
            });
            $('.v-b').mouseleave(function () {
                $('.v-b .menu-link-1').removeClass('is-active');
                $($videoBlock).removeClass($O);
            });
            $($videoBlock).mouseenter(function () {
                $('.v-b .menu-link-1').addClass('is-active');
                $(this).addClass($O);
            });
            $($videoBlock).mouseleave(function () {
                $(this).removeClass($O);
                $('.v-b .menu-link-1').removeClass('is-active');
            });

            $('.has_drop').mouseenter(function () {
                $(this).addClass('drop-open');
            });

            $('.has_drop').mouseleave(function () {
                $(this).removeClass('drop-open');
            });

            $('.has_sub').mouseenter(function () {
                $(this).toggleClass('drop-open');
            });

            $('.has_sub').mouseleave(function () {
                $(this).toggleClass('drop-open');
            });
        }



        //Wrapping elements in join us and follow us sidebar block
        $('.field--name-field-icons .field__item, .item-list--linkicon li').each(function($index,$elem){
            var $newClass = $($elem).find('.linkicon__text').text().toLowerCase().replace('+', '');
            $($elem).addClass($newClass);
        });

        $('.a2a_count').css("height","54px");

        //Adding icon to submit
        $('.search-page-form .js-form-type-textfield').append('<span class="search-icon"></span>');

        //Search page checkboxes
        $('#edit-lifestyles').change(function() {
            $('#edit-lifestyle-terms').toggleClass('lifeS');
        });
        $('#edit-technologies').change(function () {
            $('#edit-technology-terms').toggleClass('techS');
        });

        $('.front-page-slider').on('mouseover', function () {
            $('.bx-controls-direction').fadeIn(500);
        });
        $('.front-page-slider').on('mouseleave', function () {
            $('.bx-controls-direction').fadeOut(500);
        });

        var $reHeTopOver = '.region-header-top, .overlay-m';

        /**
         * Login popup
         */
        $('.lock').on('click',function (e) {
            e.preventDefault();
            $($reHeTopOver).addClass('activated-l');
        });

        /**
         * Register popup
         */
        $('.key').on('click',function (e) {
            e.preventDefault();
            $($reHeTopOver).addClass('activated-r');
        });


        /**
         * Overlay which activates when login or register or mobile navigation is opened
         */
        $('.overlay-m').on('click',function () {
            $($reHeTopOver).removeClass('activated-l activated-r');
            $('.wrapper').removeClass('slide-in');
        });


        /**
         * Trending news block slider
         */
        $('#side-slide').cycle({
            fx:     'scrollHorz',
            prev:   '#prev-slide',
            next:   '#next-slide',
            timeout: 0,
            rev: true
        });

    });

    /**
     * Behavior for title slider, home page slider
     */
    Drupal.behaviors.sliders = {
        attach: function () {
            /**
             * Title slider
             */
            $('.title-slider').cycle({
                fx:     'fade',
                prev:   '#slide-left',
                next:   '#slide-right',
                timeout: 0,
                rev: true
            });

            /**
             * Home page slider
             */
            $(function(){
                $('#slideshow').bxSlider({
                    mode: 'fade',
                    auto: true,
                    responsive: true,
                    pager: false,
                    slideWidth: 800
                });
            });

        }
    };

    /**
     * Behavior for hiding password from exposure
     */
    Drupal.behaviors.userRegisterPasswordField = {
        attach: function () {
            $('#edit-field-password-0-value, #edit-field-confirm-password-0-value').load( function () {
                $(this).attr("type","password");
            });
        }
    };

})(jQuery);
//# sourceMappingURL=../scripts/application.js.map
