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
        // Fechar menu mobile se estiver aberto
        const mobileNav = document.getElementById('mobileNav');
        if (mobileNav) {
          mobileNav.style.display = 'none';
        }
      }
    });
  }
})();

// Função para toggle do menu mobile
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  if (mobileNav) {
    mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
  }
}
