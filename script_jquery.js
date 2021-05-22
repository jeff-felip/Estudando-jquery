
$(document).ready(function(){//ready: aciona uma função ao carregar a página
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
        $('p').fadeOut(5000);//'slow': parametro para que o evento seja realizado mais lentamente
        //$('p').delay(2000);
        $('p').fadeIn(5000);//'fast': parametro para que o evento seja realizado mais rapidamente
        $('#mensagem').text("texto mudou para vermelho");//text: coloca o texto do paramentro no seletor;
        $('span')
            .css({border: "2px solid red", color: "red", margin: "1px 1px 1px 1px", padding: "5px 5px 5px 5px"}) //maneira mais elegante de mudar os atributos css
            .delay(3000)
            .fadeOut("slow");
    });

    $('#azul').addClass("blue");//addClass: adiciona a classe especificada no parametro ao seletor
    
    $('a#f1').click(function(){
        $('#f1').show();
        $('#f2').hide();
        $('#f3').hide();
        $('#f4').hide();
    });

    $('a#f2').click(function(){
        $('#f2').show();
        $('#f1').hide();
        $('#f3').hide();
        $('#f4').hide();
    });

    $('a#f3').click(function(){
        $('#f3').show();
        $('#f2').hide();
        $('#f1').hide();
        $('#f4').hide();
    });

    $('a#f4').click(function(){
        $('#f4').show();
        $('#f2').hide();
        $('#f3').hide();
        $('#f1').hide();
    });
});

