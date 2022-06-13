// List of sentences
var _CONTENT = [ "Transforma", "Impacta"];
// Sentença atual sendo processada
var _PART = 0;
// Número do caractere da sentença atual sendo processada
var _PART_INDEX = 0;
// Mantém o handle retornado de setInterval
var _INTERVAL_VAL;
// Elemento que contém o texto
var _ELEMENT = document.querySelector("#text");

// Implementa o efeito de digitação
function Type() { 
 // Sentença[Atual].substring(indexStart[, indexEnd])
 var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    // Escrevendo
 _ELEMENT.innerHTML = text;
 _PART_INDEX++;

 // Se a frase completa foi exibida, comece a excluir a frase após algum tempo(2s)
 if(text === _CONTENT[_PART]) {
  clearInterval(_INTERVAL_VAL);
  setTimeout(function() {
   _INTERVAL_VAL = setInterval(Delete, 150);
  }, 2000);
 }
}

// Implementa o efeito de exclusão
function Delete() {
 var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    // Deletando
 _ELEMENT.innerHTML = text;
 _PART_INDEX--;

 // Se a frase foi deletada então começa a exibir a próxima frase
 if(text === '') {
  clearInterval(_INTERVAL_VAL);

  // Se for a última frase então exibe a primeira, senão vai para a próxima
  if(_PART == (_CONTENT.length - 1))
   _PART = 0;
  else
   _PART++;
  _PART_INDEX = 0;

  // Começa a exibir a próxima frase após algum tempo
  setTimeout(function() {
   _INTERVAL_VAL = setInterval(Type, 200);
  }, 200);
 }
}

// Inicia o efeito de digitação no carregamento
_INTERVAL_VAL = setInterval(Type, 200);