class Mensagem {
    
    //Atribui um valor padrão para o texto, se não passar nada no contrutor ele associa a = ''
    constructor(texto=''){
        this._texto = texto;
    }

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }

}