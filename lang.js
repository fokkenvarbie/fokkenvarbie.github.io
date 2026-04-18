document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  
  const toggleButton = document.getElementById('lang-toggle');
  const linkEn = document.getElementById('link-en');
  const linkPt = document.getElementById('link-pt');

  function updateLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
      const text = el.getAttribute(`data-${currentLang}`);
      if (text) el.innerHTML = text;
    });

    if (toggleButton) {
      toggleButton.textContent = currentLang === 'en' ? 'PT-BR' : 'EN';
    }

    if (linkEn && linkPt) {
      if (currentLang === 'en') {
        linkEn.style.display = 'inline';
        linkPt.style.display = 'none';
      } else {
        linkEn.style.display = 'none';
        linkPt.style.display = 'inline';
      }
    }
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'pt' : 'en';
      updateLanguage();
    });
  }

  updateLanguage();
});