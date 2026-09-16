function calcularTotal (itens) {
    let total = 0

    for (let i = 0; i < itens.length; i++){
        total += itens[i].valor * 1.1
    }

    return total
}