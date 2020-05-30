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
        valor = 800;
      else if(tipo == 2)
        valor = 800;
      else if(tipo == 3)
        valor = 800;
      else if(tipo == 4)
        valor = 800;
      else if(tipo == 5)
        valor = 800;
      else if(tipo == 6)
        valor = 800;
      else if(tipo == 7)
        valor = 800;
      else if(tipo == 8)
        valor = 800;
    }
    else if(nomeCombo == 'moveis'){
      if(objeto == "Fogão")
      valor = 800;
    else if(objeto == "Microondas")
      valor = 800;
    else if(objeto == "Liquidificador")
      valor = 800;
    else if(objeto == "Geladeira")
      valor = 800;
    else if(objeto == "Ventilador")
      valor = 800;
    else if(objeto == "Televisão")
      valor = 800;
    else if(objeto == "Computador")
      valor = 800;
    else if(objeto == "Caixa de som")
      valor = 800;
    }
   else if(nomeCombo == 'acessorios'){
      if(objeto == "Fogão")
      valor = 800;
    else if(objeto == "Microondas")
      valor = 800;
    else if(objeto == "Liquidificador")
      valor = 800;
    else if(objeto == "Geladeira")
      valor = 800;
    else if(objeto == "Ventilador")
      valor = 800;
    else if(objeto == "Televisão")
      valor = 800;
    else if(objeto == "Computador")
      valor = 800;
    else if(objeto == "Caixa de som")
      valor = 800;
    }
   else if(nomeCombo == 'limpeza'){
      if(objeto == "Fogão")
      valor = 800;
    else if(objeto == "Microondas")
      valor = 800;
    else if(objeto == "Liquidificador")
      valor = 800;
    else if(objeto == "Geladeira")
      valor = 800;
    else if(objeto == "Ventilador")
      valor = 800;
    else if(objeto == "Televisão")
      valor = 800;
    else if(objeto == "Computador")
      valor = 800;
    else if(objeto == "Caixa de som")
      valor = 800;
    }
    return valor;
  }