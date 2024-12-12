function loadComponent(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar o componente:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/header.html", "header");
  loadComponent("components/footer.html", "footer");
});

function toggleImage(card) {
  const image = card.querySelector('.card-img-top');
  
  card.classList.toggle('clicked');
  
  setTimeout(function() {
    if (card.classList.contains('clicked')) {
      image.src = "img/Camiseta1.2.jpg";
    } else {
      image.src = "img/Camiseta1.jpg";
    }
  }, 300);
}

