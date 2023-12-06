$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#nome').mask('', {
        placeholder: 'Ebac Motors da Silva'
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });


$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true, 
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true,
        },
        veiculoDeInteresse: {
            required: false,
        }
    },
    messages: {
        nome:'Insira seu nome',
        email:'Insira um email valido',
        telefone:'Insira um telefone'
    },
    submitHandler: function(form) {
        console.log(form);
    },
    invalidHandler: function(evento, validador) { 
        let camposIncorretos = validador.numberOfInvalids(); 
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`);
        }
    }
});

});
