document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Botão voltar ao topo
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.style.cssText = `
        position:fixed; bottom:20px; right:20px; width:50px; height:50px;
        border-radius:50%; font-size:20px; display:none; z-index:1000;
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
