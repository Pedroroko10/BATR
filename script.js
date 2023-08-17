function addOK() {
  var okContainer = document.getElementById("okContainer");
  
  // Cria um novo elemento <span> com o texto "OK"
  var okElement = document.createElement("span");
  okElement.innerText = "OK";
  
  // Adiciona o elemento <span> ao contêiner
  okContainer.appendChild(okElement);
  
  // Verifica se o contêiner está cheio
  if (okContainer.children.length > 25) {
    // Se houver mais de 25 elementos, remove-os todos
    okContainer.innerHTML = "";
    okContainer.classList.remove("full");
  } else {
    // Se não, adiciona a classe "full" para permitir o overflow:hidden no CSS
    okContainer.classList.add("full");
  }
}
