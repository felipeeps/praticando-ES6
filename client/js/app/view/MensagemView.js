//Herdando a View
class MensagemView extends View {

    constructor(elemento){
        //Usando a classe pai para associar
        super(elemento);
    }

    //IF inline para evitar dem ostrar se estiver vazio
    _template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}