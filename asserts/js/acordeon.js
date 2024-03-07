// Selecionando todos os elementos .acordeon
const acordeons = document.querySelectorAll('.acordeon');

// Iterando sobre cada elemento .acordeon
acordeons.forEach(acordeon => {
    // Selecionando o elemento de gatilho dentro de cada .acordeon
    const trigger = acordeon.querySelector('.trigger');

    // Selecionando o elemento de conteúdo dentro de cada .acordeon
    const content = acordeon.querySelector('.content');

    // Adicionando um evento de clique ao elemento de gatilho
    trigger.addEventListener('click', () => {
        // Alternando a classe .open no elemento .acordeon
        acordeon.classList.toggle('open');

        // Verificando se o acordeon está aberto
        if (acordeon.classList.contains('open')) {
            // Se estiver aberto, mostra o conteúdo
            content.style.display = 'inline-block';
        } else {
            // Se estiver fechado, esconde o conteúdo
            content.style.display = 'none';
        }
    });
});
