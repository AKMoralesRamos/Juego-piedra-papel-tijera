const rock = document.getElementById("piedra");
const paper = document.getElementById("papel");
const scissors = document.getElementById("tijera");
const modal = document.getElementById("modal");

let victoriasUsuario = 0;

rock.addEventListener("click", function () {
  comparaGanador(rock.value);
});
paper.addEventListener("click", function () {
  comparaGanador(paper.value);
});
scissors.addEventListener("click", function () {
  comparaGanador(scissors.value);
});

function comparaGanador(user) {
  const opciones = ["papel", "piedra", "tijera"];
  const machine = opciones[Math.floor(Math.random() * 3)];
  const resultado = document.getElementById("result");
  const userResult = document.getElementById("userResult");
  const machineResult = document.getElementById("machineResult");

  userResult.style.backgroundImage = `url(image-${user}.png)`;
  console.log(userResult);
  machineResult.style.backgroundImage = `url(image-${machine}.png)`;
  console.log(machineResult);

  switch (true) {
    case user === machine:
      resultado.innerText = "¡Es un empate!";
      break;
    case user === "papel" && machine === "tijera":
    case user === "piedra" && machine === "papel":
    case user === "tijera" && machine === "piedra":
      resultado.innerText = "Oops! Eres un Perdedor";
      break;
    default:
      resultado.innerText = "Ganaste, fue solo suerte...";
      victoriasUsuario++;
      if (victoriasUsuario === 5) {
        mostrarModal();
        victoriasUsuario = 0;
      }
      break;
  }

  setTimeout(function () {
    resultado.innerText = "";
    userResult.style.backgroundImage = "none";
    machineResult.style.backgroundImage = "none";
  }, 1000);
}

function mostrarModal() {
  modal.style.display = "block";
}

const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
