function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const secret = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"
];
let i = 0;
document.addEventListener("keydown", e => {
  if (e.key === secret[i]) {
    i++;
    if (i === secret.length) {
      alert("🎉 Projeto secreto desbloqueado!");
      i = 0;
    }
  } else {
    i = 0;
  }
});

const projetos = [
  {
    titulo: "IA Para Games",
    link: "https://github.com/RamonKerber/ia-gemini-games.git",
    desc: "Aplicação web interativa que utiliza a inteligência artificial Gemini, do Google, para responder perguntas sobre jogos em tempo real.",
  },
];

const container = document.querySelector(".projects-container");

projetos.forEach(proj => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${proj.titulo}</h3>
    <p>${proj.desc}</p>
    <a href="${proj.link}" target="_blank">Ver Projeto</a>
  `;

  container.appendChild(card);
});