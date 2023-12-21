function ChangeFormat (data){
   
    /*

     const resultado = {}
    data.forEach((elemento,indice)=>{
        if (elemento.nombre){
            resultado[`nombre${indice}`] = elemento.nombre;
            resultado[`votos${indice}`] = elemento.votos;
        }

        return resultado;

    })*/

    return data.map((elemento, indice) => ({
        [`nombre${indice}`]: elemento.nombre || "",
        [`votos${indice}`]: elemento.votos || "",
      })).reduce((resultado, elemento) => ({ ...resultado, ...elemento }), {});

}

module.exports = {
    ChangeFormat
}