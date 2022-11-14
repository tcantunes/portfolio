window.onload = () => {
  var elementoTransicao = document.querySelector(".transicao");
  var ancoras = document.querySelectorAll("a");

  setTimeout(() => {
    elementoTransicao.classList.remove("ativo");
  }, 500);

  for (var i = 0; i < ancoras.length; i++) {
    var ancora = ancoras[i];

    ancora.addEventListener("click", (e) => {
      e.preventDefault();
      var target = e.target.href;

      elementoTransicao.classList.add("ativo");

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
