class NegociacoesView extends View {

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
                ${model.negociacoes.map(n => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>${ //Fazendo um total com REDUCE - Inicializando por zero o total - Usando Arrow Funcition
                    model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
                }</td>
            </tfoot>
     </table>
            `;
    }

}