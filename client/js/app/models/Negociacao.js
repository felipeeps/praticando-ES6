//Criando minha classe
//Convenção - atributos que não devem ser acessados pela classe contem o prefixo _
class Negociacao { 
    //Definindo meu metodo construtor
    constructor(data, quantidade,valor) {
        //Associando a data com o Date
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //Congelando meu objeto para evitar alterações de valores fora do Form
        Object.freeze(this);
    }

    //Encapsulando os campos com a propriedade GET
    get volume(){
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}
