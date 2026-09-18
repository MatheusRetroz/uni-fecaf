function calcularTotal (itens) {
    let total = 0

    for (let i = 0; i < itens.length; i++){
        total += itens[i].valor
    }

    // Calcula o valor total dos itens
    // antes de retornar o valor final

    return total
}
function calcularDesconto (itens) {
    let total = calcularTotal(itens)
    total -= total * 0.25

    // Aplica desconto de fidelidade
    // antes de retornar o valor final
    
    return total
}