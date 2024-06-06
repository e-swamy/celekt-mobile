(function ($) {
    "use strict"; // Start of use strict

    // Preloader
    $(window).on('load', function () {
        $('.preloader').fadeOut(2000);
    });

    // preloadModal
    $(document).ready(function () {
        $("#preloadModal").modal('show');
    });

    //Sticky-navbar js
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".main-navbar").removeClass("fixed-top");
        } else {
            $(".main-navbar").addClass("fixed-top");
        }
    });

    $(".compare_product h6 i").on('click', function () {
        $(".compare_product").toggleClass("icon");
        $(".compare_product h6 i").toggleClass("bx-minus bx-plus");
    });

    // Toggle the side navigation
    $(document).ready(function () {

        // $(".navbar-collapse").mCustomScrollbar({
        //     theme: "minimal"
        // });

        $("#productQuickView .product_description").mCustomScrollbar({
            autoHideScrollbar: true,
            theme: "dark-thin",
        });


        $('#dismiss, .overlay').on('click', function () {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    });

    // increase decrease JS
    $('#inc').click(function () {
        $('.output').html(function (i, val) { return val * 1 + 1 });
    });
    $('#dec').click(function () {
        $('.output').html(function (i, val) { return val * 1 <= 1 ? 1 : val * 1 - 1 });
    });

    // Floating Label JS
    $(document).ready(function () {
        $(".form-control, .custom-select").focus(function () {
            $(this).parent().find(".custom-label").addClass('label-active');
        });
        $(".form-control").focusout(function () {
            if ($(this).val() == '') {
                $(this).parent().find(".custom-label").removeClass('label-active');
            };
        });

    });

    // scrollUp JS
    $('#scrollUp').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });
    $('#scrollUp').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });

})(jQuery); // End of use strict