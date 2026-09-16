function calcularTotal (itens) {
    let total = 0

    for (let i = 0; i < itens.length; i++){
        total += itens[i].valor
    }

    // Aplica desconto de fidelidade
    // antes de retornar o valor final

    return total
}