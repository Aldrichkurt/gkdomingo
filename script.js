
document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector('a[href^="mailto"]');
    
    contactLink.addEventListener('click', function(event) {
      alert("You are about to contact Gian Karlo G. Domingo!");
    });
  });
  