// Effet d’écriture auto
const typing = document.querySelector(".typing");
const text = ["Développeur Back-End", "Formateur Informatique", "Passionné de Robotique"];
let i = 0, j = 0;

function typeEffect() {
  if (j < text[i].length) {
    typing.textContent += text[i].charAt(j);
    j++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typing.textContent = "";
      j = 0;
      i = (i + 1) % text.length;
      typeEffect();
    }, 2000);
  }
}
typeEffect();

// Parcours éducatif
const eduData = [
  "2010 : Baccalauréat - Lycée IBN BATOUTA",
  "2012 : TS Développement Informatique - ISTA Ben M'sik",
  "2022 : Licence Miage - SupTechnologie"
];
const eduList = document.getElementById("edu");
eduData.forEach(item => {
  let li = document.createElement("li");
  li.className = "list-group-item fade-in";
  li.textContent = item;
  eduList.appendChild(li);
});

// Parcours professionnel
const proData = [
  "02/2023 – En cours : Formateur informatique & robotique - Groupe scolaire Malki",
  "03/2024 – En cours : Formateur vacataire - Centre IMA",
  "03/2023 – 06/2023 : Formateur vacataire - EMPSI",
  "09/2022 – 02/2023 : IT TEAM - KRONOSOL",
  "09/2013 – 07/2014 : Formateur Web vacataire - POLIZAS",
  "01/2013 – 09/2022 : Informaticien - ALF AL ALMAGHREB",
  "01/2013 – 02/2013 : Stage - Faculté des Sciences Ben M'Sick",
];
const proList = document.getElementById("pro");
proData.forEach(item => {
  let li = document.createElement("li");
  li.className = "list-group-item fade-in";
  li.textContent = item;
  proList.appendChild(li);
});

// --- Animation Scroll Fade-in ---
const faders = document.querySelectorAll('.fade-in, section, .card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // une seule fois
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  fader.classList.add("fade-in");
  observer.observe(fader);
});
