// JS simples para navegação suave e ano dinâmico
(function(){
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const yearEl = document.querySelector('.legal-line p');
  if (yearEl) {
    yearEl.innerHTML = `© ${new Date().getFullYear()} Nome da Empresa — Todos os direitos reservados.`;
  }
})();
