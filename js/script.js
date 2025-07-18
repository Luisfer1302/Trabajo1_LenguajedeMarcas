document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('show');
});

window.onload = () => {
  if (!localStorage.getItem('cookiesAceptadas')) {
    const popup = document.createElement('div');
    popup.innerHTML = `
      <div style="position:fixed;bottom:20px;left:20px;background:#fff;padding:15px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.2);">
        Este sitio usa cookies. <button id="aceptarCookies" style="margin-left:10px;padding:6px 12px;background:#0077cc;color:#fff;border:none;border-radius:6px;cursor:pointer;">Aceptar</button>
      </div>`;
    document.body.appendChild(popup);
    document.getElementById('aceptarCookies').onclick = () => {
      localStorage.setItem('cookiesAceptadas', 'true');
      popup.remove();
    };
  }
};