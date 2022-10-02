$(function () {
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

    //funcion para cambiar de color el nav al hacer scroll
    $(window).scroll(function(){
      if($("#menu").offset().top > 50){
        $("#menu").addClass("bg-dark");
      } else{
        $("#menu").removeClass("bg-dark");
      }

    })
  });