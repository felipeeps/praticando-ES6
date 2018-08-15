class NegociacaoController {

    //Buscando uma vez apenas uma vez esses valores - Melhoria de performace
    constructor(){
        //Abreviando minha sintaxe / bind - Para manter a associação com o document
        let $ = document.querySelector.bind(document);
        
        //Buscando os dados do form pelo seletor css via DOM
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');    
    }

    adiciona(event){
        //Evitando a submissão do formulário
        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

        console.log(DateHelper.dataParaTexto(negociacao.data));
    }
}