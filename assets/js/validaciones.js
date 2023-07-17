// $(document).ready(function () {

//     $('#formulario-categorias').submit(function (event) {
//         event.preventDefault(); 
//         $('#formulario-categorias input[type="text"], #formulario-categorias textarea').each(function () {
//             if ($(this).val() === '') {
//                 alert('El campo ' + $(this).attr('name') + ' no puede estar vacío. Por favor ingrese un valor. - Desarrollado por Samuel Tocaimaza');
//                 $(this).focus();
//                 return false;
//             }
//         });
//     });

//     $('#formulario-productos').submit(function (event) {
//         event.preventDefault(); 
//         $('#formulario-productos input[type="text"], #formulario-productos textarea, #formulario-productos select').each(function () {
//             if ($(this).val() === '') {
//                 alert('El campo ' + $(this).attr('name') + ' no puede estar vacío. Por favor ingrese un valor. - Desarrollado por Samuel Tocaimaza');
//                 $(this).focus();
//                 return false;
//             }
//         });
//     });
// });


//Segunda opcion: 

$(document).ready(function () {

    $('#formulario-categorias').submit(function (event) {
        var emptyFields = $(this).find('input[type="text"], textarea').filter(function () {
            return $(this).val() === '';
        });

        if (emptyFields.length > 0) {
            event.preventDefault();
            alert('Por favor complete todos los campos. - Desarrollado por Samuel Tocaimaza');
            emptyFields.first().focus();
            return false;
        }
    });

    $('#formulario-productos').submit(function (event) {
        var emptyFields = $(this).find('input[type="text"], textarea, select').filter(function () {
            return $(this).val() === '';
        });

        if (emptyFields.length > 0) {
            event.preventDefault();
            alert('Por favor complete todos los campos. - Desarrollado por Samuel Tocaimaza');
            emptyFields.first().focus();
            return false;
        }
    });

});