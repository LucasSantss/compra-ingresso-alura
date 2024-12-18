function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    
    if(qtdSuperior == 0 && qtdInferior == 0 && qtdPista == 0){
        let h2 = document.querySelector("h2");
        h2.textContent = "Não há mais ingressos disponíveis";
    }



    if(qtd > 10){
        alert("O limite de compra são de 10 ingressos")
        document.getElementById('qtd').value = "";
    }else{
        if(tipo.value == 'pista'){
            comprarPista(qtd);
        }
        if(tipo.value == 'superior'){
            comprarSuperior(qtd);
        }
        if(tipo.value == 'inferior'){
            comprarInferior(qtd);
        }
    }


    
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade indisponível para tipo Pista');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = "";
    }

}
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade indisponível para tipo Cadeira Inferior');
    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = "";
    }

}
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade indisponível para tipo Cadeira Superior');
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = "";
    }

}
