const {somarDoisValores, calcularMediaDeDoisValores} = require('../src/calculadora');
const { expect } = require('chai');


describe('Testes da função de soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisValores(5, 3);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);

    });   

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
         // coleta o resultado da função
        const resultadoDaSoma = somarDoisValores(50, -15);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);
    });   

    it('A função deve ser capaz de somar dois números negativos', function () {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisValores(-50, -15);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(-65);
    });
});