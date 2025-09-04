const {calcularDesconto} = require ('../src/calcularDesconto');
const {expect} = require ('chai') ;


describe('Testes da função de calculo de desconto', function (){
    it('Deve calcular o valor do desconto', function(){
        const resultadoDoDesconto = calcularDesconto(100 , 10)
        expect(resultadoDoDesconto).to.equal(90)
    });

     it('Deve calcular o valor do produto sem desconto aplicado', function(){
        const resultadoDoDesconto = calcularDesconto(100 , 0)
        expect(resultadoDoDesconto).to.equal(100)
    });

});


