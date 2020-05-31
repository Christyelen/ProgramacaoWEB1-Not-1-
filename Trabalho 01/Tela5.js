function PegarValorCombo(nomeCombo) {
  debugger;
  var input;
  if(nomeCombo == 'eletro'){
    input= document.getElementById('txtQuant');
  }
  if(nomeCombo == 'moveis'){
    input= document.getElementById('txtQuant2');
  }
  if(nomeCombo == 'acessorios'){
    input= document.getElementById('txtQuant3');
  }
  if(nomeCombo == 'limpeza'){
    input= document.getElementById('txtQuant4');
  }
    var valorTexto = input.value;
    var tipo = document.getElementById(nomeCombo).value;
    if(valorTexto && tipo){
      var cb = document.getElementById(nomeCombo)
        var objeto = cb.options[tipo].text;

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

    var valor = adicionarValor(nomeCombo);
    document.getElementById('preco').text;
  }

  function salvarValor(total){
    debugger;
    var valorTotal =+ total;
  }

  function adicionarValor(nomeCombo){
    debugger;
    var tipo = document.getElementById(nomeCombo).value;
    var cb = document.getElementById(nomeCombo)
        var objeto = cb.options[tipo].text;
        var valor;
    if(nomeCombo == 'eletro'){
      if(tipo == 1)
        valor = 450;
      else if(tipo == 2)
        valor = 400;
      else if(tipo == 3)
        valor = 300;
      else if(tipo == 4)
        valor = 1900;
      else if(tipo == 5)
        valor = 100;
      else if(tipo == 6)
        valor = 2000;
      else if(tipo == 7)
        valor = 1500;
      else if(tipo == 8)
        valor = 1500;
    }
    else if(nomeCombo == 'moveis'){
      if(tipo == 1)
        valor = 650;
      else if(tipo == 2)
        valor = 600;
      else if(tipo == 3)
        valor = 100;
      else if(tipo == 4)
        valor = 1200;
      else if(tipo == 5)
        valor = 200;
      else if(tipo == 6)
        valor = 1500;
      else if(tipo == 7)
        valor = 180;
      else if(tipo == 8)
        valor = 600;
    }
   else if(nomeCombo == 'acessorios'){
    if(tipo == 1)
    valor = 100;
  else if(tipo == 2)
    valor = 200;
  else if(tipo == 3)
    valor = 100;
  else if(tipo == 4)
    valor = 150;
  else if(tipo == 5)
    valor = 30;
  else if(tipo == 6)
    valor = 70;
  else if(tipo == 7)
    valor = 15;
  else if(tipo == 8)
    valor = 40;
   }
  else if(nomeCombo == 'limpeza'){
    if(tipo == 1)
    valor = 10;
  else if(tipo == 2)
    valor = 7;
  else if(tipo == 3)
    valor = 300;
  else if(tipo == 4)
    valor = 40;
  else if(tipo == 5)
    valor = 12;
  else if(tipo == 6)
    valor = 5;
  else if(tipo == 7)
    valor = 5;
  else if(tipo == 8)
    valor = 12;
    return valor;
  }
  }