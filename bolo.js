// Seleciona todos os botões de compra
const botoes = document.querySelectorAll(".comprar");

// Adiciona evento de clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho!");
    });
});



function mostrarPix() {
  document.getElementById("pix").style.display = "block";
}

