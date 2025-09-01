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
  "2022 : Licence Miage - SupTechnologie",
  "2012 : TS Développement Informatique - ISTA Ben M'sik",
  "2010 : Baccalauréat - Lycée IBN BATOUTA",
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













// --- Compteur animé ---
const counters = document.querySelectorAll('.counter');
const speed = 200; // Plus petit = plus rapide

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = "+" + target;
          }
        };
        updateCount();
      });
      counterObserver.disconnect(); // Lance une seule fois
    }
  });
}, { threshold: 0.5 });

counterObserver.observe(document.querySelector('#stats'));






document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault(); 

  const form = e.target;
  const msg = document.getElementById("formMsg");

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      msg.textContent = " Votre message a été envoyé avec succès !";
      msg.className = "text-success text-center mt-3";
      form.reset(); 
    } else {
      msg.textContent = " Une erreur est survenue. Veuillez réessayer.";
      msg.className = "text-danger text-center mt-3";
    }
  } catch (error) {
    msg.textContent = " Problème de connexion. Réessayez plus tard.";
    msg.className = "text-warning text-center mt-3";
  }
});





// Sélection du bouton ↑
const btnTop = document.getElementById("btnTop");
const aboutSection = document.getElementById("about");

// Surveille le scroll
window.addEventListener("scroll", () => {
  const aboutTop = aboutSection.offsetTop;

  if (window.scrollY >= aboutTop - 100) {
    btnTop.style.display = "flex"; // Affiche le bouton
  } else {
    btnTop.style.display = "none"; // Cache le bouton
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth + "%";
        observer.unobserve(bar); // Exécuté une seule fois
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => observer.observe(bar));
});


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hidden");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    observer.observe(item);
  });
});
