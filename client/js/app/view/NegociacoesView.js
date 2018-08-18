class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template(model) {
        //Utilizando o template string para evitar concatenação das linhas
        //PErcorrendo a lista de negociações com os dados das negociações
        //Usando o join para retornar uma string concatenada
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.negociacoes.map(n =>{
                    
                    return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    `
                }).join('')}
            </tbody>
     </table>
            `;
    }

    //Realizando o update para carregar a tabela no meu template
    update(model) {
        //Converte as strings em elementos do DOM
        this._elemento.innerHTML = this._template(model);
  }
}