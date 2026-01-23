document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en'; // define EN por padrão

  const toggleButton = document.getElementById('lang-toggle');
  if (!toggleButton) return;

  const pdfViewer = document.getElementById('pdf-viewer');
  const pdfDownload = document.getElementById('pdf-download');

  function updateLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
      el.innerHTML = el.dataset[currentLang]; 
    });

    toggleButton.textContent = currentLang === 'en' ? 'PT-BR' : 'EN';

    if (pdfViewer) {
      pdfViewer.src = currentLang === 'en' 
        ? 'assets/Barbara_Guimaraes_EN.pdf' 
        : 'assets/Barbara_Guimaraes_PT.pdf';
    }

    if (pdfDownload) {
      pdfDownload.href = currentLang === 'en' 
        ? 'assets/Barbara_Guimaraes_EN.pdf' 
        : 'assets/Barbara_Guimaraes_PT.pdf';
    }
  }

  updateLanguage();

  toggleButton.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    updateLanguage();
  });
});
