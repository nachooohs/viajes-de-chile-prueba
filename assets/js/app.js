$(function () {
    //funcion para activar los tootips
    $('[data-bs-toggle="tooltip"]').tooltip();
    //alerta al enviar correo
    $("#enviar").click(function(event){
        alert("Formulario enviado con excito");
        $('#form').submit();
      });
    //funcion para cambiar el color de los iconos
    $("#somos").click(function () {
      $(this).css("color", "#06283D");
    });
    $("#somos2").click(function () {
        $(this).css("color", "#06283D");
      });
      $("#somos3").click(function () {
        $(this).css("color", "#06283D");
      });

    //funcion toggle para las cards 
    $(".card-title").click(function () {
      $(".card-text").toggle();
    });
  });