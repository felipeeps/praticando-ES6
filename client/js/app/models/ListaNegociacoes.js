class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
    }

    //Criando meu SET
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    //Criando meu GET
    get negociacoes() {
        //Passando uma cópia com os dados da minha negociação - protegendo minha negociação
        return [].concat(this._negociacoes);
    }
}