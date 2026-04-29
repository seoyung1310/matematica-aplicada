// Troca de abas
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

// Função de contagem regressiva
function startTimers() {
  const timers = document.querySelectorAll(".timer");

  timers.forEach(timer => {
    const targetDate = new Date(timer.dataset.date).getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      timer.innerHTML = `
        <div class="time-box">${dias}<span>dias</span></div>
        <div class="time-box">${horas}<span>horas</span></div>
        <div class="time-box">${minutos}<span>min</span></div>
        <div class="time-box">${segundos}<span>seg</span></div>
      `;
    }, 1000);
  });
}

startTimers();
