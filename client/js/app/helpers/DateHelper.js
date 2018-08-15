class DateHelper {

    //Static - Invoco sem a necessidade de uma instancia
    constructor(){ 
        throw new Error('DateHelper não pode ser instanciado'); //PQ estou usando o static
    }

    //Colocando a data no formato PT/BR
    static dataParaTexto(data){
        //Concatenando com template String
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
 
    //Split - tranforma a string em um array / ... Indica os 3 parametros do meu array / MAP = Cria um array igual
    static textoParaData(texto){

        //Criando minha expressão regular para validar o argumento (data) passado e testo se está no padrão
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-')
        //1 modulo de 2 é 1, evitando o IF / Usando uma Arrow Function que evita o uso de "function" e return
        .map((item, indice) => item - indice % 2));
    }
}