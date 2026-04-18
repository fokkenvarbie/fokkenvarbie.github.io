document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  const toggleButton = document.getElementById('lang-toggle');
  const linkEn = document.getElementById('link-en');
  const linkPt = document.getElementById('link-pt');

  function updateLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
      el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });

    toggleButton.textContent = currentLang === 'en' ? 'PT-BR' : 'EN';

    if (currentLang === 'en') {
      linkEn.style.display = 'inline';
      linkPt.style.display = 'none';
    } else {
      linkEn.style.display = 'none';
      linkPt.style.display = 'inline';
    }
  }

  toggleButton.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    updateLanguage();
  });

  updateLanguage();
});