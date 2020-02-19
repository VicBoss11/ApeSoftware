$(document).ready(function () {
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    var slogan1 = "\"La imaginación";
    var slogan2 = "en funcionamiento\"";
    var i = 0;
    var j = 0;

    typeWriter();

    function typeWriter() {
        if (i == slogan1.length && j == 0) {
            $('.slogan').append('<span>');
        }

        if (i < slogan1.length) {
            $('.slogan').append(slogan1[i++]);
            setTimeout(typeWriter, 65);
        } else if (j < slogan2.length) {
            $('.slogan span').append(slogan2[j++]);
            setTimeout(typeWriter, 65);
        }
    }

    $(".sidebar-menu > div > a").on("click", function () {
        $(".sidebar-menu").find(".active").removeClass("active");

        if ($(this).siblings('.collapse').length == 0) {
            $(this).parent().addClass("active");
        }
    });

    $(".collapse a").on("click", function () {
        $(".sidebar-menu").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $('#sidebarCollapse').on('click', function () {
        $('.sidebar, .content').toggleClass('active-sidebar');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#close-accessibility-box').on('click', function () {
        $('#accessibility-box').addClass('animated fadeOutDown').one(animationEnd, function () {
            $(this).css('display', 'none');
        });
    });

    $('#switch-1:checkbox').change(function () {
        if ($(this).is(":checked")) {
            $('.bg-section-img').addClass('no-parallax');
        } else {
            $('.bg-section-img').removeClass('no-parallax');
        }
    });

    $('#switch-1:checkbox').change(function () {
        if ($(this).is(":checked")) {
            $('.bg-section-img').addClass('no-parallax');
        } else {
            $('.bg-section-img').removeClass('no-parallax');
        }
    });

    $('#switch-2:checkbox').change(function () {
        if ($(this).is(":checked")) {
            $('.corporate-governance').animate({
                "height": "+=300px"
            });

            $('.container').animate({
                "font-size": "+=0.5em"
            });
        } else {
            $('.corporate-governance').animate({
                "height": "-=300px"
            });
            
            $('.container').animate({
                "font-size": "-=0.5em"
            });
        }
    });

    $('#switch-3:checkbox').change(function () {
        if ($(this).is(":checked")) {
            $('html').addClass('black-and-white');
        } else {
            $('html').removeClass('black-and-white');
        }
    });

    $('#my-videogames-list').click(function () {
        window.location = "https://www.google.com";
    });
});