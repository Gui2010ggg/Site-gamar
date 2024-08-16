document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { title: 'Dayz', image: 'imagens/dd-removebg-preview.png' },
        { title: 'Valorant', image: 'imagens/download.png' },
        { title: 'Roblox', image: 'imagens/download-removebg-preview (1).png' },
    ];

    const gameContainer = document.querySelector('.game-container');

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        
        gameContainer.appendChild(gameCard);
    });

    document.getElementById('start-game').addEventListener('click', () => {
        alert('Iniciando o jogo...');
        // Lógica para iniciar o jogo
    });
});