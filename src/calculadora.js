function somarDoisValores (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;

}

function calcularMediaDeDoisValores (valor1, valor2) {
    // 1. Soma todos os valores
    const resultadoSomaDeDoisValores = somarDoisValores(valor1, valor2);

    // 2. Divide pela quantidade de numeros passados
    const resultadoMediaDoisValores = resultadoSomaDeDoisValores/2;

    //3. Retornar o resultado
    return resultadoMediaDoisValores;

}

function realizarSomaDosCamposDaTela () {
    const valor1 = 1
    const valor2 = 3

    if(valor1 < 0 || valor2 < 0) {
        console.log('Digite um valor maior que zero')
    }

    const resultado = somarDoisValores(valor1, valor2)

    console.log(resultado)
}

module.exports = {
    somarDoisValores,
    calcularMediaDeDoisValores
}