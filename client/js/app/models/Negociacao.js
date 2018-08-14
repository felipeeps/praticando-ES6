//Criando minha classe
//Convenção - atributos que não devem ser acessados pela classe contem o prefixo _
class Negociacao { 
    //Definindo meu metodo construtor
    constructor(data, quantidade,valor) {
        //Associando a data com o Date
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    obtemVolume(){
        return this._quantidade * this._valor;
    }

    //Encapsulando os campos
    getData() {
        return this._data;
    }
    
    getQuantidade() {
        return this._quantidade;
    }
    
    getValor() {
        return this._valor;
    }
}
