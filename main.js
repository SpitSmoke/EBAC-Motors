$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });

$('.menu-hamburguer').click(function (){
    $('nav').slideToggle();
})
})