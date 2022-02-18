var botaoComparar = document.querySelector("#comparar");

botaoComparar.addEventListener("click", function () {

    event.preventDefault();

    var str1 = document.querySelector("#primeira-palavra").value;
    var str2 = document.querySelector("#segunda-palavra").value;
    var contadorStr1;
    var contadorStr2;
    var mensagensRetorno = document.querySelector("#check-status");

    if (str1.length != str2.length || str1 == str2) {
        mensagensRetorno.innerHTML = 'Não são Anagramas';

    } else {
        for (var i = 0; i < str1.length; i++) {
            for (var j = 0; j < str1.length; j++) {
                if (str1[i] == str1[j]) {
                    contadorStr1 = 0;
                    contadorStr1++;
                }
            }

            for (var k = 0; k < str2.length; k++) {
                if (str1[i] == str2[k]) {
                    contadorStr2 = 0;
                    contadorStr2++;
                }
            }

            if (contadorStr1 != contadorStr2) {
                mensagensRetorno.innerHTML = 'Não são Anagramas';

            }

        }
        mensagensRetorno.innerHTML = 'São Anagramas';

    }

});