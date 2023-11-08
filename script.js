function botaozinho_resposta() {
    var respostaUsuario1 = document.querySelector('input[name="resposta"]:checked');
    var respostaUsuario2 = document.querySelector('input[name="resposta2"]:checked');
    var respostaUsuario3 = document.querySelector('input[name="resposta3"]:checked');
    var respostaUsuario4 = document.querySelector('input[name="resposta4"]:checked');
    var respostaUsuario5 = document.querySelector('input[name="resposta"]:checked');
    var respostaUsuario6 = document.querySelector('input[name="resposta"]:checked');
    var respostaUsuario7 = document.querySelector('input[name="resposta"]:checked');
    var respostaUsuario8 = document.querySelector('input[name="resposta"]:checked');
    var respostaUsuario9 = document.querySelector('input[name="resposta"]:checked');
    var respostaUsuario10 = document.querySelector('input[name="resposta"]:checked');

function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
        if(nome_variavel){
            document.getElementById("marcacao_nome").innerHTML = nome_variavel;
        }
        else{
            alert("Nome não atribuido, preencha o nome.");
            inclui_nome();
        }
}

    if(respostaUsuario1 && respostaUsuario2 && respostaUsuario3 && respostaUsuario4 && respostaUsuario5 && respostaUsuario5 && respostaUsuario6 && respostaUsuario7 && respostaUsuario8 && respostaUsuario9 && respostaUsuario10 ){
        if(respostaUsuario1.value === "correto"){
            document.getElementById("resultado_1").innerHTML = "acertou!";
        }
        else{
            document.getElementById("resultado_1").innerHTML = "errou, a alternativa B fala sobre o governo de Epitácio Pessoa (1919-1922), e a alternativa C fala sobre o governo de Artur Bernardes (1922-1926)";
        }
        if(respostaUsuario2.value === "correto"){
            document.getElementById("resultado_2").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_2").innerHTML = "errou, a alternativa A se refere ao governo de Washington Luís e o regime republicano oligárquico, erigido em 1889, no seu governo.";
        }
        if(respostaUsuario3.value === "correto"){
            document.getElementById("resultado_3").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_3").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario4.value === "correto"){
            document.getElementById("resultado_4").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_4").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario4.value === "correto"){
            document.getElementById("resultado_5").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_5").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario4.value === "correto"){
            document.getElementById("resultado_6").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_6").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario4.value === "correto"){
            document.getElementById("resultado_7").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_7").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario4.value === "correto"){
            document.getElementById("resultado_8").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_8").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario4.value === "correto"){
            document.getElementById("resultado_9").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_9").innerHTML = "ERROU!!!";
        }
        if(respostaUsuario4.value === "correto"){
            document.getElementById("resultado_10").innerHTML = "acertou";
        }
        else{
            document.getElementById("resultado_10").innerHTML = "ERROU!!!";
        }
    }
    else{
        alert("Não deixar questões em aberto!");
    }
}