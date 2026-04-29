const titulo = document.getElementById("titulo");

const datas = [
  {texto: "Passar no enem", data: "2026-11-11"},
  {texto: "Aprender tailandês", data: "2026-07-25"},
  {texto: "Passar na faculdade", data: "2027-02-01"},
  {texto: "Entrar na área de trabalho", data: "2027-02-05"}
];

let atual = 0;

// trocar abas
document.querySelectorAll(".tab").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    atual = i;
    titulo.innerText = datas[i].texto;
  });
});

// timer
function atualizarTempo() {
  const destino = new Date(datas[atual].data).getTime();
  const agora = new Date().getTime();
  const diff = destino - agora;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const seg = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("min").innerText = min;
  document.getElementById("seg").innerText = seg;
}

setInterval(atualizarTempo, 1000);
