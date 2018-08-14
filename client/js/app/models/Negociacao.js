//Criando minha classe
class Negociacao { 
    //Definindo meu metodo construtor
    constructor(data, quantidade,valor) {
        //Associando a data com o Date
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    obtemVolume(){
        return this.quantidade * this.valor;
    }
}
