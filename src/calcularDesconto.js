function calcularDesconto (valorProduto, valorDesconto) {
    const calcularDesconto = valorProduto - (valorProduto * valorDesconto/100);

    return calcularDesconto;

}

module.exports = {
    calcularDesconto
}