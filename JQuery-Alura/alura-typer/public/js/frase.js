var url = "http://localhost:3000/frases";

$("#botao-frase").click(fraseAleatoria);

$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria(){
    $("#spinner").show();

    //Requisição ajax via get
    $.get(url, trocaFraseAleatoria)
    .fail(function() {
        $("#erro").show();
        setTimeout(function(){
            $("#erro").hide();
        }, 1500);
    })
    .always(function(){
        $("#spinner").hide();
    });
}

function trocaFraseAleatoria(dados) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * dados.length);
    frase.text(dados[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(dados[numeroAleatorio].tempo);
}

function buscaFrase(){
    $("#spinner").show();
    var fraseId = $("#frase-id").val();

    var dados = { id: fraseId };

    $.get(url, dados, trocaFrase)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").hide();
        }, 2000);
    })
    .always(function(){
        $("#spinner").hide();
    });
}


function trocaFrase(data){
    console.log(data);

    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}
