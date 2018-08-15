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

        //Split - tranforma a string em um array / ... Indica os 3 parametros do meu array / MAP = Cria um array igual
        let data = new Date(...this._inputData.value
            .split('-')
            //1 modulo de 2 é 1, evitando o IF / Usando uma Arrow Function que evita o uso de "function" e return
            .map((item, indice) => item - indice % 2) 
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
}