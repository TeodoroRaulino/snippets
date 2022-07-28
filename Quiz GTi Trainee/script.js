var requestURL = 'https://quiz-trainee.herokuapp.com/questions';
let request = new XMLHttpRequest();
request.open('GET', requestURL);


function mostrarQuestao() {
    document.getElementById('listaRespostas').style.display='block';
    document.getElementById('confirmar').textContent='Próxima pergunta';

}

function showQuestion(){

}

function finalizarQuiz() {
    
}