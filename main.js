const titulo = document.getElementById("titulo");

const datas = [
  {texto: "Estudar 4 cursos na Alura", data: "2026-05-10"},
  {texto: "Criar 5 projetos em JavaScript", data: "2026-06-01"},
  {texto: "Criar um portfólio", data: "2026-07-01"},
  {texto: "Atualizar meu currículo", data: "2026-05-20"}
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
