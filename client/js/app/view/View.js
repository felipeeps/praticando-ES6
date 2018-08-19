class View {
    constructor(elemento){
        this._elemento = elemento;
    }

    //Realizando o update para carregar a tabela no meu template
    update(model){
        //Converte as strings em elementos do DOM
        this._elemento.innerHTML = this._template(model);
    }
}