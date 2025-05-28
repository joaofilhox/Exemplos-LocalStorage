// Salvando o progresso do jogo
const progresso = {
    pontuacao: 1000,
    nivel: 3,
    itensComprados: ['espada', 'escudo']
};
localStorage.setItem('progresso', JSON.stringify(progresso));

// Exibindo o progresso do jogo
if (localStorage.getItem('progresso')) {
    const progresso = JSON.parse(localStorage.getItem('progresso'));
    console.log('Pontuação: ' + progresso.pontuacao);
    console.log('Nível: ' + progresso.nivel);
    console.log('Itens comprados: ' + progresso.itensComprados.join(', '));
}
