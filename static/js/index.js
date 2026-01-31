// JavaScript for WideSeek project page

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (window.pageYOffset > 300) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

// Copy BibTeX to clipboard
function copyBibTeX() {
  const bibtexCode = document.getElementById('bibtex-code').textContent;
  const button = document.querySelector('.copy-bibtex-btn');
  const originalText = button.innerHTML;
  
  navigator.clipboard.writeText(bibtexCode).then(function() {
    button.innerHTML = '<span class="icon"><i class="fas fa-check"></i></span><span>Copied!</span>';
    button.classList.add('is-success');
    
    setTimeout(function() {
      button.innerHTML = originalText;
      button.classList.remove('is-success');
    }, 2000);
  }).catch(function(err) {
    console.error('Failed to copy: ', err);
    alert('Failed to copy BibTeX. Please select and copy manually.');
  });
}

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}
