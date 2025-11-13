(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      const thisForm = this;
      // UI messages
      const loadingEl = thisForm.querySelector('.loading');
      const errorEl = thisForm.querySelector('.error-message');
      const sentEl = thisForm.querySelector('.sent-message');

      loadingEl.classList.add('d-block');
      errorEl.classList.remove('d-block');
      sentEl.classList.remove('d-block');

      const payload = {
        name: thisForm.querySelector('[name="name"]').value || '',
        email: thisForm.querySelector('[name="email"]').value || '',
        subject: thisForm.querySelector('[name="subject"]').value || '',
        message: thisForm.querySelector('[name="message"]').value || ''
      };

      try {
        const actionUrl = thisForm.getAttribute('action') || '/submit';
        const res = await fetch(actionUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        loadingEl.classList.remove('d-block');

        if (res.ok) {
          sentEl.classList.add('d-block');
          thisForm.reset();
        } else {
          throw new Error(data.error || 'Submission failed');
        }
      } catch (err) {
        loadingEl.classList.remove('d-block');
        errorEl.innerHTML = err.message;
        errorEl.classList.add('d-block');
      }
    });
  });
})();
