// js/load-footer.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("/partials/footer.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("footer-container").innerHTML = html;
      })
      .catch(err => console.error("No se pudo cargar el footer:", err));
  });
  