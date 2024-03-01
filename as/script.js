var meuBotao = document.getElementById('meuBotao');

meuBotao.addEventListener('click', function() {
    // Gera posições aleatórias para mover o botão
    var novaPosicaoX = Math.floor(Math.random() * window.innerWidth);
    var novaPosicaoY = Math.floor(Math.random() * window.innerHeight);

    // Aplica as novas posições ao estilo do botão
    meuBotao.style.position = 'absolute';
    meuBotao.style.left = novaPosicaoX + 'px';
    meuBotao.style.top = novaPosicaoY + 'px';
});
