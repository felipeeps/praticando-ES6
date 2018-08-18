class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

    _template() {
        //Utilizando o template string para evitar concatenação das linhas
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
            </tbody>
     </table>
            `;
    }

    //Realizando o update para carregar a tabela no meu template
    update() {
        //Converte as strings em elementos do DOM
        this._elemento.innerHTML = this._template();
  }
}