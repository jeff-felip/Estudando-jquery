$(document).ready(function(){
    $('#azul').click(function(){//click: aciona uma função quando o seletor especificado é clicado.
        //$('h1').hide();//hide: esconde o seletor espeficicado.
        //$("#texto").css("color", "blue");//css: muda a propriedade css 'color' do seletor especificado, para a do segundo parametro
        $('p').css("background-color", "blue");//css: muda a propriedade css 'background-color' do seletor especificado, para a do segundo parametro
        $('p').css("color", "white");
        $('p').fadeOut();//fadeOut: esconde lentamente o seletor especificado
        $('p').delay(2000);//delay: pausa a execução pelo tempo espeficicado em milisegundos
        $('p').fadeIn();//fadeIn: mostra lentamente o seletor especificado que estava oculto
        //obs: pode-se colocar um valor no paramentro assim como no deley em milisegundos para fadeOut e fadeIn
    });

    $('#vermelho').click(function(){
        $('p').css("background-color", "red");
        $('p').css("color", "white");
        $('p').fadeOut("slow");//'slow': parametro para que o evento seja realizado mais lentamente
        $('p').delay(2000);
        $('p').fadeIn("fast");//'fast': parametro para que o evento seja realizado mais rapidamente
        $('#mensagem').text("texto mudou para vermelho");//text: coloca o texto do paramentro no seletor;
        $('span').css("border", "2px solid red");
        $('span').css("color", "red");
        $('span').css("margin", "1px 1px 1px 1px");
        $('span').css("padding", "5px 5px 5px 5px");
        $('span').delay(3000);
        $('span').fadeOut("slow");
    });
});

