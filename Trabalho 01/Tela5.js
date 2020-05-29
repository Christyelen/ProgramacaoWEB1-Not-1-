function PegarValorCombo(nomeCombo) {
    debugger;
    var input = document.getElementById('txtQuant');
    var valorTexto = input.value;
    var tipo = document.getElementById(nomeCombo);
    if(valorTexto && tipo){
        var objeto = tipo.value;
        var margem = document.createElement('tr');
        var linha = document.createElement('td');
        var linha2 = document.createElement('td');
        var margem2 = document.createElement('tr');
        var div = document.getElementById('resultado');
        linha.innerHTML = valorTexto;
        linha2.innerHTML = objeto;
        console.log(valorTexto);
        console.log(objeto)
     div.appendChild(margem);  
     div.appendChild(linha);  
     div.appendChild(linha2);   
     div.appendChild(margem);   

    }
    
  }