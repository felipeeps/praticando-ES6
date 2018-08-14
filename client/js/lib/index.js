var campos = [
    //API do DOM que permite buscar o campo pela id de css
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

//Selecionando meu formulario e colocando uma função no meu botão de envio
document.querySelector('.form').addEventListener('submit', function(event) {

    //Cirando uma TR
    var tr = document.createElement('tr');
    //Carrendo meu array e retornando os elementos inseridos no form
    campos.forEach(function(campo){
        var td = document.createElement('td');
        td.textContent = campo.value;
        //Adiona um filho
        tr.appendChild(td);
    })
});