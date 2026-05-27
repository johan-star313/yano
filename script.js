document.querySelectorAll('.project-item, .custom-glow').forEach(card => {
    let rect = card.getBoundingClientRect();

    // Recalcular dimensiones al entrar el cursor
    card.addEventListener('mouseenter', () => {
        rect = card.getBoundingClientRect();
    });

    card.addEventListener('mousemove', e => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});