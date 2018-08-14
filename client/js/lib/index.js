var campos = [
    //API do DOM que permite buscar o campo pela id de css
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

//Busca o meu TBODY do html
var tbody = document.querySelector('table tbody');

//Selecionando meu formulario e colocando uma função no meu botão de envio
document.querySelector('.form').addEventListener('submit', function(event) {

    //Não submete o formulário (Não recarrega a página)
    event.preventDefault();

    //Criando uma TR
    var tr = document.createElement('tr');
    //Carregando meu array e retornando os elementos inseridos no form
    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        //Adiona um filho
        tr.appendChild(td);
    });

    //Criando a operação para calcular o volume
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    //Inserindo a minha tbody os valores do form
    tbody.appendChild(tr);

});