document.addEventListener('DOMContentLoaded', () => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (!href || href === '#') return;

            const target = document.querySelector(href);

            if (!target) {
                console.warn(`Seção não encontrada: ${href}`);
                return;
            }

            e.preventDefault();

            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Voltar ao topo');
    btn.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #4a90e2;
        color: white;
        border: none;
        font-size: 22px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;

    btn.onmouseenter = () => btn.style.transform = 'scale(1.1)';
    btn.onmouseleave = () => btn.style.transform = 'scale(1)';

    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
