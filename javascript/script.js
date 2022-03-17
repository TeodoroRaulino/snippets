let IndQ = 0;
//let Title = 0;
let btnConfirmar = document.getElementById('next');
let cont = 0;
let quest = document.getElementsByClassName('question-label');


var dicionario = {

    0 : {
        'Title':'Título 01',
        'question': {
            0: 'pergunta .a',
            1: '312321pergunta .b',
            2: 'pergunta .c',
            3: 'pergunta .d'
        }
    },
    1 : {
        'Title':'Título 02',
        'question': {
            0: 'pergunta .a',
            1: '1pergunta .b',
            2: '2pergunta .c',
            3: 'pergunta .d'
        }
    },

    2 : {
        'Title':'Título 03',
        'question': {
            0: 'pergunta .a',
            1: 'pergunta .b',
            2: 'pergunta .c',
            3: 'pergunta .d'
        }
    },
    
}

function questoes(){
    document.getElementById('grid').style.display='block';
    Titulo.textContent = dicionario[cont]['Title'];
    for(let i = 0; i < 4; i++){
        quest[i].innerHTML = dicionario[cont]['question'][i]
    }
    cont++;
    
}


/*function ExResult(){
    Titulo.textContent = Results[57];
    document.getElementById('grid').style.display='none';
    document.getElementById('imagem').style.display='block';
    document.getElementById('next').style.display='none';

}*/

/*function questoes(){
    Titulo.textContent = ListaTitulo[Title];
    document.getElementById('grid').style.display='block';
    if(cont === 3){
        ExResult();
    }
    else if(cont === 2){
        btnConfirmar.textContent = "Resultados";
    }
    Title++;
    cont++;
}*/


function myFunction(){
    btnConfirmar.textContent = "Próxima pergunta";
    document.getElementById('demos').style.display='none';
    questoes();
}