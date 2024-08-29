document.getElementById('next').addEventListener('click', function() {
  document.querySelector('.atuacao').scrollBy({
      left: 200, /* Ajuste a quantidade de rolagem */
      behavior: 'smooth'
  });
});

document.getElementById('prev').addEventListener('click', function() {
  document.querySelector('.atuacao').scrollBy({
      left: -200, /* Ajuste a quantidade de rolagem */
      behavior: 'smooth'
  });
});

(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()