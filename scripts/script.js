




function criarListaDespesa(){
  
  //Seleciona o campo onde as listas serão inclusas no Ul.
  let listaDespesa = document.getElementById('listaDespesas');
  let listaValorGasto= document.getElementById('listaValoresGasto')
  console.log(listaDespesa, 'pri');
  //Seleciona o campo do input.
  let despesa = document.getElementById('despesa').value;
  let despesaGasto = document.getElementById('valorGasto').value;
  console.log(despesa, '2');
  //Cria as 'lis' dentro da ul
  let liDespesa = document.createElement('li');
  let liDespesaGasto = document.createElement('li');

  //Determina o conteudo da variavel, pegando o valor digitado no input.
  liDespesa.textContent = despesa;
  liDespesaGasto. textContent = despesaGasto;
  console.log(liDespesa, '3');
  //Inclui os valores da lista, dentro da Ul.
  listaDespesa.appendChild(liDespesa);
  listaValorGasto.appendChild(liDespesaGasto);
  console.log(listaDespesa, '4');
  
  preventDefault(event);
  document.querySelector('.button-despesa').addEventListener('click', criarListaDespesa);
  
}

function criarListaReceita(){
  //Seleciona o campo onde as listas serão inclusas no Ul.
  let listaReceita = document.getElementById('listaReceita');
  let listaValorRecebido= document.getElementById('listaValorRecebido')
  
  //Seleciona o campo do input.
  let receita = document.getElementById('receita');
  let valorRecebido = document.getElementById('receitaRecebido');

  //Cria as 'lis' dentro da ul
  let liReceita = document.createElement('li');
  let liValorRecebido = document.createElement('li');
  
  

  //Determina o conteudo da variavel, pegando o valor digitado no input.
  liReceita.textContent = receita.value;
  
  liValorRecebido.textContent = valorRecebido.value;
 

  //Inclui os valores da lista, dentro da Ul.
  listaReceita.appendChild(liReceitas);
  
  listaValorRecebido.appendChild(liValorRecebido);
  
  preventDefault();// impede que duplique a lista ao clicar em adicionar. Tentando resolver esse problema.

  document.querySelector('.button-receita').addEventListener('click', criarListaReceita);
  
}


 