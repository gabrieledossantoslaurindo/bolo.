function criarRosa() {
  const rosa = document.createElement("div");
  rosa.innerText = "🌹";
  rosa.classList.add("rosa");
  rosa.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(rosa);

  setTimeout(() => rosa.remove(), 8000);
}

setInterval(criarRosa, 200);
