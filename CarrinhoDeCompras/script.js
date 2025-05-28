// Adicionando um item ao carrinho
const item = {
    nome: 'Camiseta',
    preco: 29.99
};
let carrinho = [];
if (localStorage.getItem('carrinho')) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'));
}
carrinho.push(item);
localStorage.setItem('carrinho', JSON.stringify(carrinho));

// Exibindo os itens do carrinho
let carrinhoExibicao = '';
if (localStorage.getItem('carrinho')) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    carrinho.forEach(item => {
        carrinhoExibicao += item.nome + ' - R$' + item.preco.toFixed(2) + '<br>';
    });
}
document.getElementById('carrinho').innerHTML = carrinhoExibicao;
