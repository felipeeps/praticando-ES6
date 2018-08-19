class NegociacaoController {

    //Buscando uma vez apenas uma vez esses valores - Melhoria de performace
    constructor(){
        //Abreviando minha sintaxe / bind - Para manter a associação com o document
        let $ = document.querySelector.bind(document);
        
        //Buscando os dados do form pelo seletor css via DOM
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');    
        //Instanciando minha model ListaNegociacao
        this._listaNegociacoes = new ListaNegociacoes();
        //Instanciando a minha View e buscando pela ID do meu html
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        //Passando minha lista para meu update atualizar
        this._negociacoesView.update(this._listaNegociacoes);
        //Chamando a minha Mensagem
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        //Evitando a submissão do formulário
        event.preventDefault();

        //Criando minha negociação
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        //Pedindo para minha lista atualizar após a adição de novos itens
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação Adicionada';
        this._mensagemView.update(this._mensagem);

        //Limpando meu formulário
        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    //Limpando meu form após incluir uma negociacao
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputData.focus();
    }
}