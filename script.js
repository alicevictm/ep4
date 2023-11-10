function verificarResposta(name, resultadoId, respostaCorreta) {
    var respostaUsuario = document.querySelector(`input[name="${name}"]:checked`);

    if (respostaUsuario) {
        if (respostaUsuario.value === respostaCorreta) {
            document.getElementById(resultadoId).innerHTML = "acertou!";
        } else {
            document.getElementById(resultadoId).innerHTML = "errou:(";
        }
    } else {
        alert("Não deixe questóes em branco!");
    }
}

function verificarTodasRespostas() {
    verificarResposta('resposta1', 'resultado_1', 'correta');
    verificarResposta('resposta2', 'resultado_2', 'correta');
    verificarResposta('resposta3', 'resultado_3', 'correta');
    verificarResposta('resposta4', 'resultado_4', 'correta');
    verificarResposta('resposta5', 'resultado_5', 'correta');
    verificarResposta('resposta6', 'resultado_6', 'correta');
    verificarResposta('resposta7', 'resultado_7', 'correta');
    verificarResposta('resposta8', 'resultado_8', 'correta');
    verificarResposta('resposta9', 'resultado_9', 'correta');
    verificarResposta('resposta10', 'resultado_10', 'correta');
}