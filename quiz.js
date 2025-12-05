// ----------------------------------------------
// STRUCTURE DE BASE DU QUIZ
// ----------------------------------------------

// QUESTIONS (sera rempli à l'étape 2)
const questions = [
  // Exemple temporaire (sera remplacé)
  // {
  //   text: "Question 1",
  //   answers: [
  //     { text: "Réponse A", gods: ["athena", "hera", "demeter", "ares"] },
  //     { text: "Réponse B", gods: ["aphrodite", "apollo", "dionysos", "artemis"] },
  //     { text: "Réponse C", gods: ["hermes", "persee", "mnemosyne", "hephaistos"] },
  //     { text: "Réponse D", gods: ["poseidon", "achille", "heracles", "pan"] }
  //   ]
  // }
];

// ----------------------------------------------
// CONCLUSIONS (VIDES POUR L’INSTANT)
// ----------------------------------------------
const conclusions = {
  athena: "",
  hera: "",
  aphrodite: "",
  demeter: "",
  artemis: "",
  hestia: "",
  persephone: "",
  selene: "",
  eos: "",
  rhea: "",
  mnemosyne: "",
  calliope: "",
  clio: "",
  thalie: "",
  euterpe: "",
  calypso: "",
  dione: "",
  echo: "",
  ariane: "",
  medee: "",
  helene: "",
  atalante: "",
  pandore: "",
  psyche: "",
  cassiopee: "",
  zeus: "",
  poseidon: "",
  hades: "",
  apollon: "",
  ares: "",
  hermes: "",
  hephaistos: "",
  dionysos: "",
  promethee: "",
  atlas: "",
  eros: "",
  pan: "",
  hypnos: "",
  morphee: "",
  asclepios: "",
  heracles: "",
  achille: "",
  ulysse: "",
  jason: "",
  persee: "",
  thesee: "",
  orphee: "",
  bellerophon: "",
  cadmos: "",
  acteon: ""
};

// ----------------------------------------------
// SYSTÈME DE SCORE
// ----------------------------------------------
let score = {};
for (const god in conclusions) {
  score[god] = 0;
}

// ----------------------------------------------
// AFFICHAGE DES QUESTIONS
// ----------------------------------------------
const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");

// Génère les questions
function displayQuiz() {
  questions.forEach((q, index) => {
    const questionElem = document.createElement("div");
    questionElem.classList.add("question");

    const title = document.createElement("h3");
    title.textContent = (index + 1) + ". " + q.text;
    questionElem.appendChild(title);

    q.answers.forEach((ans) => {
      const option = document.createElement("div");
      option.classList.add("option");
      option.textContent = ans.text;

      option.addEventListener("click", () => {
        // désélectionner les autres
        [...questionElem.getElementsByClassName("option")]
          .forEach(o => o.classList.remove("selected"));

        option.classList.add("selected");
        option.dataset.gods = JSON.stringify(ans.gods);
      });

      questionElem.appendChild(option);
    });

    quizContainer.appendChild(questionElem);
  });

  submitBtn.style.display = "block";
}

displayQuiz();

// ----------------------------------------------
// CALCUL DU RÉSULTAT
// ----------------------------------------------
submitBtn.addEventListener("click", () => {
  // reset
  for (const god in score) score[god] = 0;

  const selected = document.querySelectorAll(".option.selected");

  selected.forEach(option => {
    const gods = JSON.parse(option.dataset.gods);
    gods.forEach(g => score[g]++);
  });

  // Trouver la divinité gagnante
  let max = 0;
  let chosen = "athena";

  for (const god in score) {
    if (score[god] > max) {
      max = score[god];
      chosen = god;
    }
  }

  // Afficher le résultat
  quizContainer.style.display = "none";
  submitBtn.style.display = "none";

  resultContainer.style.display = "block";
  resultTitle.textContent = chosen.toUpperCase();
  resultText.textContent = conclusions[chosen] || "Conclusion en préparation…";
});

// ----------------------------------------------
// RECOMMENCER
// ----------------------------------------------
document.getElementById("restart-btn").addEventListener("click", () => {
  location.reload();
});
