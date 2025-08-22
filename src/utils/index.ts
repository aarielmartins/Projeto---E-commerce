//FUNÇÃO PARA TRANSFORMAR EM REAL
export const parseToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

//FUNÇÃO PARA SOMAR OS JOGOS NO CARRINHO
export const getTotalPrice = (itens: Game[]) => {
  return itens.reduce((acumulator, currentIten) => {
    if (currentIten.prices.current) {
      return (acumulator += currentIten.prices.current)
    }
    return 0
  }, 0)
}
