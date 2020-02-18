$(document).ready(function () {
    // $(".sidebar-menu").mCustomScrollbar({
    //     theme: "minimal"
    // }); //
    //"La imaginación <span>en funcionamiento"</span>

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

    $('#sidebarCollapse').on('click', function () {
        $('.sidebar, .content').toggleClass('active-sidebar');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#close-accessibility-box').on('click', function () {
        $('#accessibility-box').addClass('animated fadeOutDown').one(animationEnd, function () {
            $(this).css('display', 'none');
        });
    })
});

// // Para realizar operaciones en términos visuales utilizo JQuery ya que simplifica el código de JavaScript
// // Solo se ejecuta cuando el documento (HTML) está preparado
// $(function () {
//     // ####################################################################################################################
//     // Hacer visible el menú de navegación en función de la posición vertical de la página web.
//     // A partir del id = main-section-home del código html:
//     //      - si se va hacia abajo el menú de navegación y la barra de búsqueda se hacen visibles, 
//     //        además se fijará el menú de navegación en la parte de arriba
//     //      - si se va hacia arriba el menú de navegación se hace trasparente y se oculta la barra de búsqueda,
//     //        el menú de navegación no se fijará a la parte de arriba
//     $('#main-section-home').waypoint(function (direction) {
//         if (direction == "down") {
//             $('nav').addClass('fixed-top');
//             $('.navbar').removeClass('hide-navbar');
//         } else {
//             $('nav').removeClass('fixed-top');
//             $('.navbar').addClass('hide-navbar');
//         }
//     }, {
//         offset: '60px;'
//     });

//     // ####################################################################################################################
//     // Al pulsar el botón cuya clase sea go-main-section-home la página se moverá hasta la etiqueta con id = main-section-home
//     // con una animación que suavizará el proceso
//     $('.go-main-section-home').click(function () {
//         $('html, body').animate({
//             scrollTop: $('#main-section-home').offset().top
//         }, 500);
//     });

//     // ####################################################################################################################
//     // Cambiar el icono al pulsar un botón dependiendo del último estado de éste
//     $('.btn-expand').click(function () {
//         if ($('.fa-caret-square-down').length) {
//             $('.icon-expand').removeClass('fa-caret-square-down');
//             $('.icon-expand').addClass('fa-caret-square-up');
//         } else {
//             $('.icon-expand').removeClass('fa-caret-square-up');
//             $('.icon-expand').addClass('fa-caret-square-down');
//         }
//     });

//     /*
//     // Restablecer componentes cuando el modal está inactivo
//     $('body').focus(function () {
//         $('.icon-expand').removeClass('fa-caret-square-up');
//         $('.icon-expand').addClass('fa-caret-square-down');
//         $('.collapse').removeClass('show');
//         $('.btn-expand').addClass('collapsed');
//         $('.btn-expand').attr('aria-expanded', "false");
//     });
//     */
//     // ####################################################################################################################
//     // Función para actualizar previsualización de imagen de forma dinámica
//     function readURL(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('#videogame-img').attr('src', e.target.result);
//             }

//             reader.readAsDataURL(input.files[0]);
//         }
//     }

//     $("#videogame-img-chooser").change(function () {
//         readURL(this);
//     });

//     // ####################################################################################################################
//     // Activar tooltip de Bootstrap
//     $('[data-tooltip="tooltip"]').tooltip();
//     // Mostrar tooltipe únicamente en el estado "hover", ocultar aunque el estado sea "focus"
//     $('[data-tooltip="tooltip"]').on('focus', function () {
//         $(this).tooltip('hide');
//     });

//     // Habilitar/Deshabilitar campos del formulario de valoración
//     $('input[value="single"]').click(function () {
//         $('input[name="narrativeScore"]').removeAttr('disabled');
//         $('input[name="multiplayerScore"]').attr('disabled', "");
//     });

//     $('input[value="multi"]').click(function () {
//         $('input[name="narrativeScore"]').attr('disabled', "");
//         $('input[name="multiplayerScore"]').removeAttr('disabled');
//     });

//     $('input[value="campaign/multi"]').click(function () {
//         $('input[name="narrativeScore"]').removeAttr('disabled');
//         $('input[name="multiplayerScore"]').removeAttr('disabled');
//     });
// });