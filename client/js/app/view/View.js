class View {
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        //OU seja, todo mundo que herdar o view vai herdar o template
        throw new Error('O metodo template deve ser implementado');
    }

    //Realizando o update para carregar a tabela no meu template
    update(model){
        //Converte as strings em elementos do DOM
        this._elemento.innerHTML = this.template(model);
    }
}