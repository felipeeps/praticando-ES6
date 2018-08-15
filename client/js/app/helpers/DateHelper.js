class DateHelper {

    constructor(){ 
        throw new Error('DateHelper não pode ser instanciado'); //PQ estou usando o static
    }

    //Colocando a data no formato PT/BR
    static dataParaTexto(data){
        return data.getDate()
        //Adicionando + 1 antes de concatenar 
         + '/' + (data.getMonth() + 1)
         + '/' + data.getFullYear();
    }
 
    //Split - tranforma a string em um array / ... Indica os 3 parametros do meu array / MAP = Cria um array igual
    static textoParaData(texto){
        return new Date(...texto.split('-')
        //1 modulo de 2 é 1, evitando o IF / Usando uma Arrow Function que evita o uso de "function" e return
        .map((item, indice) => item - indice % 2));
    }
    //Static - Invoco sem a necessidade de uma instancia
}