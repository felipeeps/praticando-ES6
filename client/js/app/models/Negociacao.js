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

    //Encapsulando os campos com a propriedade GET
    get volume(){
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}
