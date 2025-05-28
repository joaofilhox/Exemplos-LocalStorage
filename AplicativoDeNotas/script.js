// Salvando uma nota
const nota = {
    titulo: 'Compras',
    conteudo: 'Leite, pão, manteiga',
    dataCriacao: new Date()
};
let notas = [];
if (localStorage.getItem('notas')) {
    notas = JSON.parse(localStorage.getItem('notas'));
}
notas.push(nota);
localStorage.setItem('notas', JSON.stringify(notas));

// Exibindo as notas
let notasExibicao = '';
if (localStorage.getItem('notas')) {
    const notas = JSON.parse(localStorage.getItem('notas'));
    notas.forEach(nota => {
        notasExibicao += nota.titulo + '<br>' + nota.conteudo + '<br>' + new Date(nota.dataCriacao).toLocaleDateString() + '<br>';
    });
}
document.getElementById('notas').innerHTML = notasExibicao;
