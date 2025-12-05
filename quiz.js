// ----------------------------------------------
// QUESTIONS DU TEST (10 premières questions)
// ----------------------------------------------
const questions = [
  {
    text: "Quand tu fais face à un problème difficile, ta première réaction est...",
    answers: [
      {
        text: "Analyser calmement la situation avant d'agir.",
        gods: ["athena", "persee", "mnemosyne", "hephaistos"]
      },
      {
        text: "Réagir rapidement, quitte à ajuster après.",
        gods: ["ares", "achille", "heracles", "zeus"]
      },
      {
        text: "Chercher du soutien et des conseils autour de toi.",
        gods: ["demeter", "psyche", "echo", "hera"]
      },
      {
        text: "Improviser une solution créative sur le moment.",
        gods: ["apollon", "hermes", "dionysos", "orphee"]
      }
    ]
  },
  {
    text: "Dans un groupe, on te voit surtout comme la personne qui...",
    answers: [
      {
        text: "Organise, structure et donne une direction claire.",
        gods: ["athena", "thesee", "cadmos", "rhea"]
      },
      {
        text: "Met l'ambiance et motive tout le monde à bouger.",
        gods: ["ares", "dionysos", "pan", "heracles"]
      },
      {
        text: "Prend soin de chacun et veille à l'harmonie.",
        gods: ["aphrodite", "demeter", "psyche", "dione"]
      },
      {
        text: "Apporte des idées originales et sort des sentiers battus.",
        gods: ["promethee", "hermes", "apollon", "calliope"]
      }
    ]
  },
  {
    text: "Comment décrirais-tu ta façon de prendre des décisions importantes ?",
    answers: [
      {
        text: "Je compare les options, je réfléchis longtemps.",
        gods: ["athena", "clio", "mnemosyne", "persee"]
      },
      {
        text: "Je me fie surtout à mon instinct du moment.",
        gods: ["pan", "artemis", "selene", "acteon"]
      },
      {
        text: "Je me demande ce qui sera le mieux pour tout le monde.",
        gods: ["demeter", "hera", "psyche", "echo"]
      },
      {
        text: "Je choisis ce qui me fait le plus vibrer ou m'inspire.",
        gods: ["apollon", "orphee", "dionysos", "euterpe"]
      }
    ]
  },
  {
    text: "Quand quelqu'un te critique ouvertement...",
    answers: [
      {
        text: "Tu essaies de comprendre si la critique est fondée.",
        gods: ["athena", "asclepios", "mnemosyne", "cadmos"]
      },
      {
        text: "Tu te braques et tu peux répliquer vivement.",
        gods: ["ares", "achille", "medee", "cassiopee"]
      },
      {
        text: "Tu es blessé·e, mais tu restes doux·ce avec l'autre.",
        gods: ["psyche", "echo", "helene", "selene"]
      },
      {
        text: "Tu désamorces avec humour ou autodérision.",
        gods: ["hermes", "dionysos", "thalie", "ulysse"]
      }
    ]
  },
  {
    text: "Quel type de défi te stimule le plus ?",
    answers: [
      {
        text: "Un casse-tête stratégique ou intellectuel.",
        gods: ["athena", "clio", "mnemosyne", "persee"]
      },
      {
        text: "Un défi physique ou concret qui demande de l'énergie.",
        gods: ["heracles", "ares", "achille", "atalante"]
      },
      {
        text: "Un défi relationnel où il faut comprendre les autres.",
        gods: ["aphrodite", "psyche", "demeter", "echo"]
      },
      {
        text: "Un défi artistique ou créatif à inventer de zéro.",
        gods: ["apollon", "orphee", "calliope", "euterpe"]
      }
    ]
  },
  {
    text: "Quand une personne proche est en détresse, tu...",
    answers: [
      {
        text: "L'aides à mettre de l'ordre dans ses pensées.",
        gods: ["athena", "asclepios", "mnemosyne", "cadmos"]
      },
      {
        text: "Te mets immédiatement en action pour la défendre ou la soutenir.",
        gods: ["heracles", "ares", "achille", "thesee"]
      },
      {
        text: "L'écoutes longtemps et essaies de la rassurer.",
        gods: ["demeter", "psyche", "dione", "echo"]
      },
      {
        text: "Cherches à lui changer les idées et à lui redonner le sourire.",
        gods: ["dionysos", "thalie", "hermes", "orphee"]
      }
    ]
  },
  {
    text: "Tu te sens le plus toi-même quand...",
    answers: [
      {
        text: "Tu comprends quelque chose de complexe ou résous un problème.",
        gods: ["athena", "mnemosyne", "persee", "hephaistos"]
      },
      {
        text: "Tu te dépasses, tu relèves un défi exigeant.",
        gods: ["heracles", "ares", "achille", "atlas"]
      },
      {
        text: "Tu es en profonde connexion avec quelqu'un.",
        gods: ["aphrodite", "psyche", "demeter", "helene"]
      },
      {
        text: "Tu crées, joues, explores ou improvises.",
        gods: ["apollon", "dionysos", "hermes", "pan"]
      }
    ]
  },
  {
    text: "Face à un conflit dans un groupe...",
    answers: [
      {
        text: "Tu joues le rôle de médiateur·trice rationnel·le.",
        gods: ["athena", "thesee", "cadmos", "rhea"]
      },
      {
        text: "Tu prends parti clairement et tu t'impliques fortement.",
        gods: ["ares", "achille", "poseidon", "medee"]
      },
      {
        text: "Tu essaies de protéger les plus blessé·e·s ou vulnérables.",
        gods: ["demeter", "psyche", "dione", "echo"]
      },
      {
        text: "Tu cherches à détendre l'atmosphère ou à remettre les choses en perspective.",
        gods: ["hermes", "dionysos", "ulysse", "thalie"]
      }
    ]
  },
  {
    text: "Quand tu entres dans un nouvel environnement...",
    answers: [
      {
        text: "Tu observes en silence pour comprendre comment tout fonctionne.",
        gods: ["hades", "persee", "mnemosyne", "hypnos"]
      },
      {
        text: "Tu t'affirmes rapidement pour montrer ta présence.",
        gods: ["zeus", "ares", "achille", "cassiopee"]
      },
      {
        text: "Tu engages la conversation avec quelques personnes pour créer du lien.",
        gods: ["aphrodite", "psyche", "echo", "demeter"]
      },
      {
        text: "Tu explores librement sans plan précis.",
        gods: ["hermes", "pan", "ulysse", "dionysos"]
      }
    ]
  },
  {
    text: "Quand tu repenses à ton passé, tu le fais surtout pour...",
    answers: [
      {
        text: "En tirer des leçons et éviter de refaire les mêmes erreurs.",
        gods: ["athena", "mnemosyne", "clio", "cadmos"]
      },
      {
        text: "Te rappeler des épreuves que tu as surmontées.",
        gods: ["heracles", "atlas", "ares", "achille"]
      },
      {
        text: "Ressentir à nouveau certaines émotions fortes ou marquantes.",
        gods: ["psyche", "echo", "demeter", "selene"]
      },
      {
        text: "Transformer ces souvenirs en histoires, créations ou inspiration.",
        gods: ["orphee", "apollon", "calliope", "morphee"]
      }
    ]
  },
    {
    text: "Comment réagis-tu quand quelqu’un te confie un secret important ?",
    answers: [
      {
        text: "Je garde tout pour moi et je réfléchis avant d’agir.",
        gods: ["hades", "persee", "mnemosyne", "hypnos"]
      },
      {
        text: "Je prends une position claire pour aider ou défendre.",
        gods: ["ares", "zeus", "cassiopee", "achille"]
      },
      {
        text: "Je prends soin d’écouter et de protéger la personne.",
        gods: ["demeter", "dione", "psyche", "hera"]
      },
      {
        text: "J’allège la situation en rassurant ou en relativisant.",
        gods: ["hermes", "orphee", "dionysos", "thalie"]
      }
    ]
  },
  {
    text: "Quand tu apprends quelque chose de nouveau...",
    answers: [
      {
        text: "Tu analyses immédiatement pour bien comprendre.",
        gods: ["athena", "mnemosyne", "clio", "asclepios"]
      },
      {
        text: "Tu testes par toi-même, tu veux l’expérimenter vite.",
        gods: ["heracles", "ares", "atalante", "achille"]
      },
      {
        text: "Tu t’intéresses surtout à son impact sur les gens.",
        gods: ["aphrodite", "psyche", "echo", "demeter"]
      },
      {
        text: "Tu veux l’utiliser pour créer quelque chose d’original.",
        gods: ["apollon", "morphee", "calliope", "promethee"]
      }
    ]
  },
  {
    text: "Lors d’une soirée où tu ne connais presque personne...",
    answers: [
      {
        text: "Tu observes et attends de comprendre l’ambiance.",
        gods: ["hestia", "hades", "selene", "persee"]
      },
      {
        text: "Tu t’imposes, tu te fais remarquer rapidement.",
        gods: ["zeus", "ares", "achille", "cassiopee"]
      },
      {
        text: "Tu engages gentiment la discussion avec quelques personnes.",
        gods: ["aphrodite", "demeter", "psyche", "echo"]
      },
      {
        text: "Tu explores, tu vas d’un groupe à l’autre librement.",
        gods: ["pan", "hermes", "dionysos", "ulysse"]
      }
    ]
  },
  {
    text: "Qu’est-ce qui t’irrite le plus chez les autres ?",
    answers: [
      {
        text: "Le manque de logique ou de réflexion.",
        gods: ["athena", "mnemosyne", "cadmos", "asclepios"]
      },
      {
        text: "La faiblesse ou le manque de courage.",
        gods: ["ares", "heracles", "achille", "atlas"]
      },
      {
        text: "Le manque d’empathie ou de considération.",
        gods: ["hera", "demeter", "psyche", "dione"]
      },
      {
        text: "La rigidité ou le manque de créativité.",
        gods: ["hermes", "promethee", "dionysos", "apollon"]
      }
    ]
  },
  {
    text: "Comment vois-tu l’avenir ?",
    answers: [
      {
        text: "Comme quelque chose qu’on prépare avec méthode.",
        gods: ["athena", "clio", "persee", "hephaistos"]
      },
      {
        text: "Comme une bataille qu’il faudra gagner.",
        gods: ["ares", "heracles", "zeus", "achille"]
      },
      {
        text: "Comme une histoire qu’on construit avec les autres.",
        gods: ["aphrodite", "psyche", "demeter", "helene"]
      },
      {
        text: "Comme un espace d’expérimentation et de créativité.",
        gods: ["apollon", "orphee", "calliope", "dionysos"]
      }
    ]
  },
  {
    text: "Quelle forme de réussite valorises-tu le plus ?",
    answers: [
      {
        text: "Maîtriser un domaine ou développer un savoir solide.",
        gods: ["athena", "mnemosyne", "hephaistos", "asclepios"]
      },
      {
        text: "Être fort·e, respecté·e, capable d’affronter les défis.",
        gods: ["ares", "heracles", "achille", "atlas"]
      },
      {
        text: "Bâtir des relations belles et durables.",
        gods: ["aphrodite", "psyche", "demeter", "hera"]
      },
      {
        text: "Créer une œuvre, un projet, ou une idée inspirante.",
        gods: ["apollon", "orphee", "calliope", "promethee"]
      }
    ]
  },
  {
    text: "Quel type d’environnement te met le plus en confiance ?",
    answers: [
      {
        text: "Un endroit calme où je peux réfléchir.",
        gods: ["hestia", "hades", "athena", "mnemosyne"]
      },
      {
        text: "Un milieu compétitif et stimulant.",
        gods: ["ares", "zeus", "heracles", "atalante"]
      },
      {
        text: "Un groupe solidaire et bienveillant.",
        gods: ["demeter", "psyche", "dione", "aphrodite"]
      },
      {
        text: "Un espace libre et créatif.",
        gods: ["dionysos", "hermes", "apollon", "promethee"]
      }
    ]
  },
  {
    text: "Quelle phrase te ressemble le plus ?",
    answers: [
      {
        text: "« Comprendre avant d’agir. »",
        gods: ["athena", "asclepios", "mnemosyne", "cadmos"]
      },
      {
        text: "« Oser, quitte à se tromper. »",
        gods: ["heracles", "achille", "ares", "atalante"]
      },
      {
        text: "« Aider les autres est aussi une forme de force. »",
        gods: ["demeter", "hera", "helene", "psyche"]
      },
      {
        text: "« Créer, c’est vivre en liberté. »",
        gods: ["apollon", "orphee", "dionysos", "calliope"]
      }
    ]
  },
  {
    text: "Quelle qualité te vient spontanément dans les moments difficiles ?",
    answers: [
      {
        text: "La lucidité et l’organisation.",
        gods: ["athena", "clio", "mnemosyne", "hephaistos"]
      },
      {
        text: "Le courage et l’action immédiate.",
        gods: ["ares", "heracles", "achille", "thesee"]
      },
      {
        text: "La compassion et l’écoute.",
        gods: ["demeter", "psyche", "dione", "echo"]
      },
      {
        text: "L’humour et la créativité pour dédramatiser.",
        gods: ["hermes", "dionysos", "orphee", "thalie"]
      }
    ]
  },
  {
    text: "Quel reproche entendrais-tu le plus dans ta vie ?",
    answers: [
      {
        text: "« Tu es trop sérieux·se ou trop critique. »",
        gods: ["athena", "asclepios", "mnemosyne", "rhea"]
      },
      {
        text: "« Tu es trop intense ou tu vas trop vite. »",
        gods: ["ares", "heracles", "achille", "zeus"]
      },
      {
        text: "« Tu t’oublies trop pour les autres. »",
        gods: ["demeter", "psyche", "dione", "helene"]
      },
      {
        text: "« Tu es trop imprévisible ou rêveur·se. »",
        gods: ["hermes", "dionysos", "orphee", "morphee"]
      }
    ]
  }
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
for (const god in conclusions) score[god] = 0;

// ----------------------------------------------
// AFFICHAGE UNE QUESTION À LA FOIS
// ----------------------------------------------
const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");

let currentQuestion = 0;
let answersSelected = [];

function showQuestion() {
  quizContainer.innerHTML = "";
  const q = questions[currentQuestion];

  const questionElem = document.createElement("div");
  questionElem.classList.add("question");

  const title = document.createElement("h3");
  title.textContent = (currentQuestion + 1) + ". " + q.text;
  questionElem.appendChild(title);

  q.answers.forEach((ans) => {
    const option = document.createElement("div");
    option.classList.add("option");
    option.textContent = ans.text;

    option.addEventListener("click", () => {
      [...questionElem.getElementsByClassName("option")]
        .forEach(o => o.classList.remove("selected"));

      option.classList.add("selected");
      option.dataset.gods = JSON.stringify(ans.gods);
    });

    questionElem.appendChild(option);
  });

  quizContainer.appendChild(questionElem);

  submitBtn.textContent =
    (currentQuestion === questions.length - 1)
      ? "Voir mon résultat"
      : "Suivant";
  submitBtn.style.display = "block";
}

showQuestion();

// ----------------------------------------------
// BOUTON SUIVANT / CALCUL
// ----------------------------------------------
submitBtn.addEventListener("click", () => {
  const selected = document.querySelector(".option.selected");
  if (!selected) {
    alert("Choisis une réponse avant de continuer !");
    return;
  }

  answersSelected.push(JSON.parse(selected.dataset.gods));
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    calculateResult();
    return;
  }

  showQuestion();
});

// ----------------------------------------------
// CALCUL DU RÉSULTAT FINAL
// ----------------------------------------------
function calculateResult() {
  for (const god in score) score[god] = 0;

  answersSelected.forEach(gods => gods.forEach(g => score[g]++));

  let max = 0;
  let chosen = null;

  for (const god in score) {
    if (score[god] > max) {
      max = score[god];
      chosen = god;
    }
  }

  quizContainer.style.display = "none";
  submitBtn.style.display = "none";

  resultContainer.style.display = "block";
  resultTitle.textContent = chosen.toUpperCase();
  resultText.textContent = conclusions[chosen] || "Conclusion en préparation…";
}

// ----------------------------------------------
// RECOMMENCER
// ----------------------------------------------
document.getElementById("restart-btn").addEventListener("click", () => {
  location.reload();
});
