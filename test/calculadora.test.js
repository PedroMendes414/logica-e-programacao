const {somarDoisValores, calcularMediaDeDoisValores, subtrairDoisValores, mutiplicarDoisValores, dividirDoisValores} = require('../src/calculadora');
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
        const resultadoDaSoma = somarDoisValores(-15, -20);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(-35);
    });

    it('A função deve ser capaz de somar dois números zerados', function () {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisValores(0, 0);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(0);
    });

});

describe('Testes da função de subtrair', function(){
    it('A função deve ser capaz de subtrair dois numeros positivo', function(){
        const resultadoDaSubtração = subtrairDoisValores(10, 5);
        expect(resultadoDaSubtração).to.equal(5);
    });

    it('A função deve ser capaz de subtrair um numero positivo e um negativo', function(){
        const resultadoDaSubtração = subtrairDoisValores(5, 10);
        expect(resultadoDaSubtração).to.equal(-5);
    });

    it('A função deve ser capaz de subtrair dois numeros negativos', function(){
        const resultadoDaSubtração = subtrairDoisValores(-5, -10);
        expect(resultadoDaSubtração).to.equal(5);
    });

    it('A função deve ser capaz de subtrair dois numeros zerados', function(){
        const resultadoDaSubtração = subtrairDoisValores(0, 0);
        expect(resultadoDaSubtração).to.equal(0);
    }); 
});

describe('Testes da função de mutiplicação', function (){
    it('A função deve ser capaz de mutiplicar dois números positivos', function(){
        const resultadoDaMutiplicação = mutiplicarDoisValores(5,5);
        expect(resultadoDaMutiplicação).to.equal(25);
    });

    it('A função deve ser capaz de mutiplicar um numero positivo e um negativo', function(){
        const resultadoDaMutiplicação = mutiplicarDoisValores(5, -5);
        expect(resultadoDaMutiplicação).to.equal(-25);
    });

    it('A função deve ser capaz de mutiplicar dois numeros negativos', function(){
        const resultadoDaMutiplicação = mutiplicarDoisValores(-5, -5);
        expect(resultadoDaMutiplicação).to.equal(25)   
    })

     it('A função deve ser capaz de mutiplicar dois zerados', function(){
        const resultadoDaMutiplicação = mutiplicarDoisValores(0, 0);
        expect(resultadoDaMutiplicação).to.equal(0)   
    })

})

describe('Testes da Função de Divisão', function(){
    it('A função ser capaz de dividir dois valores positivos', function(){
        const resultadoDaDivisão = dividirDoisValores(20, 2);
        expect(resultadoDaDivisão).to.equal(10);
    });

    it('A função deve ser ser capaz de dividir dois valores negativos', function(){
        const resultadoDaDivisão = dividirDoisValores(-20, -10);
        expect(resultadoDaDivisão).to.equal(2);
    });

    it('A função deve ser ser capaz de dividir um valor positivo e um negativo', function(){
        const resultadoDaDivisão = dividirDoisValores(20, -10);
        expect(resultadoDaDivisão).to.equal(-2);
    });

});


describe('Testes da Função de média', function() {
    it('A função deve calcular a média dos valores corretamente', function() {
        const resultadoDaMedia = calcularMediaDeDoisValores(10,10);
        expect(resultadoDaMedia).to.equal(10);
    });
});