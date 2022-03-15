let IndQ = 0;
let Title = 0;
let btnConfirmar = document.getElementById('next');

var ListaTitulo = {
    0: 'Título 01',
    1: 'Título 02',
    2: 'Título 03'
}

var ListaRespostas = {
    
    0: 'pergunta .a',
    1: 'pergunta .b',
    2: 'pergunta .c',
    3: 'pergunta .d',
    4: 'pergunta .a',
    5: 'pergunta .b',
    6: 'pergunta .c',
    7: 'pergunta .d',
    8: 'pergunta .a',
    9: 'pergunta .b',
    10: 'pergunta .c',
    11: 'pergunta .d'

}


function questoes(){
    Titulo.textContent = ListaTitulo[Title];
    document.getElementById('grid').style.display='block';
    Title++;
}


function myFunction(){
    btnConfirmar.textContent = "Próxima pergunta";
    document.getElementById('Titulo').innerHTML='Titulo 02';
    document.getElementById('demos').style.display='none';
    document.getElementById('grid').style.display='block';
    questoes();
}