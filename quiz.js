// ----------------------------------------------
// QUIZ DES DIVINITÉS GRECQUES - 60 QUESTIONS
// ----------------------------------------------

// ----------------------------------------------
// QUESTIONS DU TEST (60 questions complètes)
// ----------------------------------------------
const questions = [
  // 1 à 10
  {
    text: "Quand tu fais face à un problème difficile, ta première réaction est...",
    answers: [
      { text: "Analyser calmement la situation avant d'agir.", gods: ["athena", "persee", "mnemosyne", "hephaistos"] },
      { text: "Réagir rapidement, quitte à ajuster après.", gods: ["ares", "achille", "heracles", "zeus"] },
      { text: "Chercher du soutien et des conseils autour de toi.", gods: ["demeter", "psyche", "echo", "hera"] },
      { text: "Improviser une solution créative sur le moment.", gods: ["apollon", "hermes", "dionysos", "orphee"] }
    ]
  },
  {
    text: "Dans un groupe, on te voit surtout comme la personne qui...",
    answers: [
      { text: "Organise, structure et donne une direction claire.", gods: ["athena", "thesee", "cadmos", "rhea"] },
      { text: "Met l'ambiance et motive tout le monde à bouger.", gods: ["ares", "dionysos", "pan", "heracles"] },
      { text: "Prend soin de chacun et veille à l'harmonie.", gods: ["aphrodite", "demeter", "psyche", "dione"] },
      { text: "Apporte des idées originales et sort des sentiers battus.", gods: ["promethee", "hermes", "apollon", "calliope"] }
    ]
  },
  {
    text: "Comment décrirais-tu ta façon de prendre des décisions importantes ?",
    answers: [
      { text: "Je compare les options, je réfléchis longtemps.", gods: ["athena", "clio", "mnemosyne", "persee"] },
      { text: "Je me fie surtout à mon instinct du moment.", gods: ["pan", "artemis", "selene", "acteon"] },
      { text: "Je me demande ce qui sera le mieux pour tout le monde.", gods: ["demeter", "hera", "psyche", "echo"] },
      { text: "Je choisis ce qui me fait le plus vibrer ou m'inspire.", gods: ["apollon", "orphee", "dionysos", "euterpe"] }
    ]
  },
  {
    text: "Quand quelqu'un te critique ouvertement...",
    answers: [
      { text: "Tu essaies de comprendre si la critique est fondée.", gods: ["athena", "asclepios", "mnemosyne", "cadmos"] },
      { text: "Tu te braques et tu peux répliquer vivement.", gods: ["ares", "achille", "medee", "cassiopee"] },
      { text: "Tu es blessé·e, mais tu restes doux·ce avec l'autre.", gods: ["psyche", "echo", "helene", "selene"] },
      { text: "Tu désamorces avec humour ou autodérision.", gods: ["hermes", "dionysos", "thalie", "ulysse"] }
    ]
  },
  {
    text: "Quel type de défi te stimule le plus ?",
    answers: [
      { text: "Un casse-tête stratégique ou intellectuel.", gods: ["athena", "clio", "mnemosyne", "persee"] },
      { text: "Un défi physique ou concret qui demande de l'énergie.", gods: ["heracles", "ares", "achille", "atalante"] },
      { text: "Un défi relationnel où il faut comprendre les autres.", gods: ["aphrodite", "psyche", "demeter", "echo"] },
      { text: "Un défi artistique ou créatif à inventer de zéro.", gods: ["apollon", "orphee", "calliope", "euterpe"] }
    ]
  },
  {
    text: "Quand une personne proche est en détresse, tu...",
    answers: [
      { text: "L'aides à mettre de l'ordre dans ses pensées.", gods: ["athena", "asclepios", "mnemosyne", "cadmos"] },
      { text: "Te mets immédiatement en action pour la défendre ou la soutenir.", gods: ["heracles", "ares", "achille", "thesee"] },
      { text: "L'écoutes longtemps et essaies de la rassurer.", gods: ["demeter", "psyche", "dione", "echo"] },
      { text: "Cherches à lui changer les idées et à lui redonner le sourire.", gods: ["dionysos", "thalie", "hermes", "orphee"] }
    ]
  },
  {
    text: "Tu te sens le plus toi-même quand...",
    answers: [
      { text: "Tu comprends quelque chose de complexe ou résous un problème.", gods: ["athena", "mnemosyne", "persee", "hephaistos"] },
      { text: "Tu te dépasses, tu relèves un défi exigeant.", gods: ["heracles", "ares", "achille", "atlas"] },
      { text: "Tu es en profonde connexion avec quelqu'un.", gods: ["aphrodite", "psyche", "demeter", "helene"] },
      { text: "Tu crées, joues, explores ou improvises.", gods: ["apollon", "dionysos", "hermes", "pan"] }
    ]
  },
  {
    text: "Face à un conflit dans un groupe...",
    answers: [
      { text: "Tu joues le rôle de médiateur·trice rationnel·le.", gods: ["athena", "thesee", "cadmos", "rhea"] },
      { text: "Tu prends parti clairement et tu t'impliques fortement.", gods: ["ares", "achille", "poseidon", "medee"] },
      { text: "Tu essaies de protéger les plus blessé·e·s ou vulnérables.", gods: ["demeter", "psyche", "dione", "echo"] },
      { text: "Tu cherches à détendre l'atmosphère ou à remettre les choses en perspective.", gods: ["hermes", "dionysos", "ulysse", "thalie"] }
    ]
  },
  {
    text: "Quand tu entres dans un nouvel environnement...",
    answers: [
      { text: "Tu observes en silence pour comprendre comment tout fonctionne.", gods: ["hades", "persee", "mnemosyne", "hypnos"] },
      { text: "Tu t'affirmes rapidement pour montrer ta présence.", gods: ["zeus", "ares", "achille", "cassiopee"] },
      { text: "Tu engages la conversation avec quelques personnes pour créer du lien.", gods: ["aphrodite", "psyche", "echo", "demeter"] },
      { text: "Tu explores librement sans plan précis.", gods: ["hermes", "pan", "ulysse", "dionysos"] }
    ]
  },
  {
    text: "Quand tu repenses à ton passé, tu le fais surtout pour...",
    answers: [
      { text: "En tirer des leçons et éviter de refaire les mêmes erreurs.", gods: ["athena", "mnemosyne", "clio", "cadmos"] },
      { text: "Te rappeler des épreuves que tu as surmontées.", gods: ["heracles", "atlas", "ares", "achille"] },
      { text: "Ressentir à nouveau certaines émotions fortes ou marquantes.", gods: ["psyche", "echo", "demeter", "selene"] },
      { text: "Transformer ces souvenirs en histoires, créations ou inspiration.", gods: ["orphee", "apollon", "calliope", "morphee"] }
    ]
  },

  // 11 à 20
  {
    text: "Comment réagis-tu quand quelqu’un te confie un secret important ?",
    answers: [
      { text: "Je garde tout pour moi et je réfléchis avant d’agir.", gods: ["hades", "persee", "mnemosyne", "hypnos"] },
      { text: "Je prends une position claire pour aider ou défendre.", gods: ["ares", "zeus", "cassiopee", "achille"] },
      { text: "Je prends soin d’écouter et de protéger la personne.", gods: ["demeter", "dione", "psyche", "hera"] },
      { text: "J’allège la situation en rassurant ou en relativisant.", gods: ["hermes", "orphee", "dionysos", "thalie"] }
    ]
  },
  {
    text: "Quand tu apprends quelque chose de nouveau...",
    answers: [
      { text: "Tu analyses immédiatement pour bien comprendre.", gods: ["athena", "mnemosyne", "clio", "asclepios"] },
      { text: "Tu testes par toi-même, tu veux l’expérimenter vite.", gods: ["heracles", "ares", "atalante", "achille"] },
      { text: "Tu t’intéresses surtout à son impact sur les gens.", gods: ["aphrodite", "psyche", "echo", "demeter"] },
      { text: "Tu veux l’utiliser pour créer quelque chose d’original.", gods: ["apollon", "morphee", "calliope", "promethee"] }
    ]
  },
  {
    text: "Lors d’une soirée où tu ne connais presque personne...",
    answers: [
      { text: "Tu observes et attends de comprendre l’ambiance.", gods: ["hestia", "hades", "selene", "persee"] },
      { text: "Tu t’imposes, tu te fais remarquer rapidement.", gods: ["zeus", "ares", "achille", "cassiopee"] },
      { text: "Tu engages gentiment la discussion avec quelques personnes.", gods: ["aphrodite", "demeter", "psyche", "echo"] },
      { text: "Tu explores, tu vas d’un groupe à l’autre libreement.", gods: ["pan", "hermes", "dionysos", "ulysse"] }
    ]
  },
  {
    text: "Qu’est-ce qui t’irrite le plus chez les autres ?",
    answers: [
      { text: "Le manque de logique ou de réflexion.", gods: ["athena", "mnemosyne", "cadmos", "asclepios"] },
      { text: "La faiblesse ou le manque de courage.", gods: ["ares", "heracles", "achille", "atlas"] },
      { text: "Le manque d’empathie ou de considération.", gods: ["hera", "demeter", "psyche", "dione"] },
      { text: "La rigidité ou le manque de créativité.", gods: ["hermes", "promethee", "dionysos", "apollon"] }
    ]
  },
  {
    text: "Comment vois-tu l’avenir ?",
    answers: [
      { text: "Comme quelque chose qu’on prépare avec méthode.", gods: ["athena", "clio", "persee", "hephaistos"] },
      { text: "Comme une bataille qu’il faudra gagner.", gods: ["ares", "heracles", "zeus", "achille"] },
      { text: "Comme une histoire qu’on construit avec les autres.", gods: ["aphrodite", "psyche", "demeter", "helene"] },
      { text: "Comme un espace d’expérimentation et de créativité.", gods: ["apollon", "orphee", "calliope", "dionysos"] }
    ]
  },
  {
    text: "Quelle forme de réussite valorises-tu le plus ?",
    answers: [
      { text: "Maîtriser un domaine ou développer un savoir solide.", gods: ["athena", "mnemosyne", "hephaistos", "asclepios"] },
      { text: "Être fort·e, respecté·e, capable d’affronter les défis.", gods: ["ares", "heracles", "achille", "atlas"] },
      { text: "Bâtir des relations belles et durables.", gods: ["aphrodite", "psyche", "demeter", "hera"] },
      { text: "Créer une œuvre, un projet, ou une idée inspirante.", gods: ["apollon", "orphee", "calliope", "promethee"] }
    ]
  },
  {
    text: "Quel type d’environnement te met le plus en confiance ?",
    answers: [
      { text: "Un endroit calme où je peux réfléchir.", gods: ["hestia", "hades", "athena", "mnemosyne"] },
      { text: "Un milieu compétitif et stimulant.", gods: ["ares", "zeus", "heracles", "atalante"] },
      { text: "Un groupe solidaire et bienveillant.", gods: ["demeter", "psyche", "dione", "aphrodite"] },
      { text: "Un espace libre et créatif.", gods: ["dionysos", "hermes", "apollon", "promethee"] }
    ]
  },
  {
    text: "Quelle phrase te ressemble le plus ?",
    answers: [
      { text: "« Comprendre avant d’agir. »", gods: ["athena", "asclepios", "mnemosyne", "cadmos"] },
      { text: "« Oser, quitte à se tromper. »", gods: ["heracles", "achille", "ares", "atalante"] },
      { text: "« Aider les autres est aussi une forme de force. »", gods: ["demeter", "hera", "helene", "psyche"] },
      { text: "« Créer, c’est vivre en liberté. »", gods: ["apollon", "orphee", "dionysos", "calliope"] }
    ]
  },
  {
    text: "Quelle qualité te vient spontanément dans les moments difficiles ?",
    answers: [
      { text: "La lucidité et l’organisation.", gods: ["athena", "clio", "mnemosyne", "hephaistos"] },
      { text: "Le courage et l’action immédiate.", gods: ["ares", "heracles", "achille", "thesee"] },
      { text: "La compassion et l’écoute.", gods: ["demeter", "psyche", "dione", "echo"] },
      { text: "L’humour et la créativité pour dédramatiser.", gods: ["hermes", "dionysos", "orphee", "thalie"] }
    ]
  },
  {
    text: "Quel reproche entendrais-tu le plus dans ta vie ?",
    answers: [
      { text: "« Tu es trop sérieux·se ou trop critique. »", gods: ["athena", "asclepios", "mnemosyne", "rhea"] },
      { text: "« Tu es trop intense ou tu vas trop vite. »", gods: ["ares", "heracles", "achille", "zeus"] },
      { text: "« Tu t’oublies trop pour les autres. »", gods: ["demeter", "psyche", "dione", "helene"] },
      { text: "« Tu es trop imprévisible ou rêveur·se. »", gods: ["hermes", "dionysos", "orphee", "morphee"] }
    ]
  },

  // 21 à 30
  {
    text: "Quand tu dois convaincre quelqu’un, tu préfères...",
    answers: [
      { text: "Utiliser des arguments logiques et structurés.", gods: ["athena", "cadmos", "asclepios", "clio"] },
      { text: "Montrer ta détermination et ta force de volonté.", gods: ["ares", "achille", "heracles", "zeus"] },
      { text: "Toucher la personne avec des émotions sincères.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "Séduire par l’originalité, l’humour ou la créativité.", gods: ["hermes", "dionysos", "orphee", "calliope"] }
    ]
  },
  {
    text: "Face à un imprévu important, tu...",
    answers: [
      { text: "Réorganises calmement les priorités.", gods: ["athena", "mnemosyne", "hephaistos", "clio"] },
      { text: "Agis immédiatement pour ne pas perdre de temps.", gods: ["heracles", "ares", "achille", "atalante"] },
      { text: "Cherches à apaiser les tensions autour de toi.", gods: ["demeter", "hera", "psyche", "echo"] },
      { text: "Transformes l’imprévu en nouvelle opportunité.", gods: ["hermes", "dionysos", "orphee", "promethee"] }
    ]
  },
  {
    text: "Qu’est-ce qui te rend le plus fier·e ?",
    answers: [
      { text: "Avoir su maîtriser une compétence difficile.", gods: ["athena", "hephaistos", "mnemosyne", "asclepios"] },
      { text: "Avoir surmonté une épreuve exigeante.", gods: ["heracles", "ares", "achille", "atlas"] },
      { text: "Avoir aidé quelqu’un à aller mieux.", gods: ["demeter", "psyche", "dione", "hera"] },
      { text: "Avoir créé quelque chose d’unique.", gods: ["apollon", "calliope", "morphee", "orphee"] }
    ]
  },
  {
    text: "Si tu devais guider un groupe, tu le ferais...",
    answers: [
      { text: "Avec méthode et stratégie.", gods: ["athena", "thesee", "cadmos", "rhea"] },
      { text: "Avec puissance et assurance.", gods: ["zeus", "ares", "achille", "heracles"] },
      { text: "Avec empathie et communication.", gods: ["hera", "demeter", "psyche", "dione"] },
      { text: "Avec créativité et spontanée inspiration.", gods: ["hermes", "orphee", "dionysos", "apollon"] }
    ]
  },
  {
    text: "Qu’est-ce qui t’épuise le plus ?",
    answers: [
      { text: "Le manque d’organisation ou de logique.", gods: ["athena", "clio", "asclepios", "mnemosyne"] },
      { text: "Les personnes passives ou hésitantes.", gods: ["ares", "achille", "heracles", "atlas"] },
      { text: "Les conflits et les tensions émotionnelles.", gods: ["demeter", "psyché", "dione", "echo"] },
      { text: "Les contraintes strictes et rigides.", gods: ["hermes", "dionysos", "orphee", "promethee"] }
    ]
  },
  {
    text: "Quand tu expliques quelque chose, tu es du genre à...",
    answers: [
      { text: "Faire un plan clair, étape par étape.", gods: ["athena", "cadmos", "hephaistos", "asclepios"] },
      { text: "Utiliser des exemples concrets et dynamiques.", gods: ["heracles", "ares", "achille", "atalante"] },
      { text: "Utiliser beaucoup d’empathie et d’histoires personnelles.", gods: ["demeter", "psyche", "helene", "echo"] },
      { text: "Raconter avec humour, images ou créativité.", gods: ["hermes", "orphee", "dionysos", "calliope"] }
    ]
  },
  {
    text: "Au travail ou à l’école, on te reprocherait plutôt...",
    answers: [
      { text: "D’être trop perfectionniste ou trop exigeant·e intellectuellement.", gods: ["athena", "asclepios", "mnemosyne", "rhea"] },
      { text: "D’être trop impulsif·ve ou intense.", gods: ["ares", "achille", "heracles", "zeus"] },
      { text: "De trop vouloir faire plaisir aux autres.", gods: ["demeter", "psyche", "dione", "helene"] },
      { text: "D’être trop dispersé·e ou rêveur·se.", gods: ["hermes", "dionysos", "morphee", "orphee"] }
    ]
  },
  {
    text: "Quel type de relation te nourrit le plus ?",
    answers: [
      { text: "Celle qui m’aide à réfléchir et à me réaliser.", gods: ["athena", "mnemosyne", "clio", "hephaistos"] },
      { text: "Celle qui me pousse à me dépasser.", gods: ["ares", "heracles", "zeus", "achille"] },
      { text: "Celle qui est pleine de soutien, douceur et loyauté.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "Celle où on crée, joue et imagine ensemble.", gods: ["orphee", "apollon", "hermes", "dionysos"] }
    ]
  },
  {
    text: "Qu’est-ce qui te fait vraiment perdre tes moyens ?",
    answers: [
      { text: "Les erreurs illogiques ou le désordre.", gods: ["athena", "asclepios", "mnemosyne", "cadmos"] },
      { text: "La lâcheté ou le manque de détermination.", gods: ["ares", "achille", "heracles", "atlas"] },
      { text: "La froideur ou l’indifférence affective.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "Les règles injustes ou l’absence de liberté.", gods: ["hermes", "dionysos", "promethee", "orphee"] }
    ]
  },
  {
    text: "Si tu ne devais garder qu’une force dans ta vie, ce serait...",
    answers: [
      { text: "Ma capacité à comprendre.", gods: ["athena", "mnemosyne", "clio", "asclepios"] },
      { text: "Ma capacité à agir.", gods: ["ares", "heracles", "achille", "zeus"] },
      { text: "Ma capacité à aimer et soutenir.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "Ma capacité à créer et imaginer.", gods: ["apollon", "orphee", "calliope", "promethee"] }
    ]
  },

  // 31 à 40
  {
    text: "Dans une équipe, ton rôle naturel serait plutôt...",
    answers: [
      { text: "Le stratège qui planifie et organise.", gods: ["athena", "thesee", "cadmos", "mnemosyne"] },
      { text: "Le moteur qui impulse l’action.", gods: ["ares", "achille", "heracles", "atalante"] },
      { text: "Le soutien moral qui veille à l’harmonie.", gods: ["demeter", "psyche", "dione", "hera"] },
      { text: "Le créatif qui inspire et innove.", gods: ["apollon", "orphee", "hermes", "dionysos"] }
    ]
  },
  {
    text: "Quand on te donne une critique constructive, tu...",
    answers: [
      { text: "Cherches à t’améliorer immédiatement.", gods: ["athena", "asclepios", "hephaistos", "mnemosyne"] },
      { text: "Te sens challengé et veux prouver ta valeur.", gods: ["ares", "zeus", "achille", "heracles"] },
      { text: "Écoutes avec sensibilité et te remets en question.", gods: ["demeter", "psyche", "dione", "selene"] },
      { text: "Transformes ça en humour ou inspiration.", gods: ["hermes", "orphee", "dionysos", "thalie"] }
    ]
  },
  {
    text: "Comment gères-tu la jalousie des autres envers toi ?",
    answers: [
      { text: "Tu clarifies, tu expliques, tu désamorces logiquement.", gods: ["athena", "rhea", "cadmos", "asclepios"] },
      { text: "Tu n’y fais pas attention, tu continues ton travail.", gods: ["heracles", "ares", "achille", "atlas"] },
      { text: "Ça te touche et tu cherches à apaiser la situation.", gods: ["demeter", "psyche", "helene", "dione"] },
      { text: "Tu t’en détaches en restant libre et créatif.", gods: ["apollon", "dionysos", "hermes", "orphee"] }
    ]
  },
  {
    text: "Quel type d’intelligence te semble le plus précieux ?",
    answers: [
      { text: "La logique et le sens critique.", gods: ["athena", "mnemosyne", "cadmos", "asclepios"] },
      { text: "La détermination, la volonté, le courage.", gods: ["ares", "heracles", "achille", "atlas"] },
      { text: "L’intelligence émotionnelle et relationnelle.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "L’intuition créative et l’imagination.", gods: ["apollon", "orphee", "dionysos", "morphee"] }
    ]
  },
  {
    text: "Choisis une activité idéale pour un week-end parfait.",
    answers: [
      { text: "Visite de musée, bouquins, réflexion tranquille.", gods: ["athena", "hestia", "mnemosyne", "clio"] },
      { text: "Sport, compétition, aventure en nature.", gods: ["ares", "atalante", "achille", "heracles"] },
      { text: "Brunch, confidences, soirée douce entre proches.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "Concert, danse, théâtre, création artistique.", gods: ["apollon", "orphee", "dionysos", "calliope"] }
    ]
  },
  {
    text: "Quand tu sens que quelqu’un ment...",
    answers: [
      { text: "Tu analyses les incohérences pour chercher la vérité.", gods: ["athena", "mnemosyne", "cadmos", "asclepios"] },
      { text: "Tu confrontes ou tu montres clairement ton agacement.", gods: ["ares", "zeus", "achille", "medee"] },
      { text: "Tu protèges ceux qui pourraient être blessés.", gods: ["demeter", "psyche", "hera", "echo"] },
      { text: "Tu observes et tu utilises l’information plus tard.", gods: ["hermes", "ulysse", "orphee", "dionysos"] }
    ]
  },
  {
    text: "Quel type de beauté t’inspire le plus ?",
    answers: [
      { text: "L’harmonie des idées et du raisonnement.", gods: ["athena", "clio", "mnemosyne", "cadmos"] },
      { text: "La force, la puissance, la réussite concrète.", gods: ["ares", "achille", "heracles", "atlas"] },
      { text: "La bonté, la sensibilité, la chaleur humaine.", gods: ["demeter", "psyche", "helene", "dione"] },
      { text: "L’originalité, la poésie, l’audace créative.", gods: ["apollon", "orphee", "calliope", "dionysos"] }
    ]
  },
  {
    text: "Quelle expérience t’a le plus marqué dans la vie ?",
    answers: [
      { text: "Une révélation intellectuelle ou spirituelle.", gods: ["athena", "mnemosyne", "hestia", "clio"] },
      { text: "Une épreuve physique ou morale surmontée.", gods: ["ares", "heracles", "achille", "atlas"] },
      { text: "Une histoire d’amour ou de loyauté profonde.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "Une création, un projet, une passion libératrice.", gods: ["apollon", "orphee", "calliope", "dionysos"] }
    ]
  },
  {
    text: "Si tu devais enseigner quelque chose, ce serait...",
    answers: [
      { text: "La logique, les sciences, la stratégie.", gods: ["athena", "asclepios", "hephaistos", "clio"] },
      { text: "Le sport, l’entraînement, la discipline.", gods: ["ares", "heracles", "atalante", "achille"] },
      { text: "Le développement personnel, l’empathie, l’écoute.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "Les arts, l’imagination, l’expression libre.", gods: ["apollon", "orphee", "dionysos", "calliope"] }
    ]
  },
  {
    text: "Quel type de vérité est le plus important à connaître ?",
    answers: [
      { text: "La vérité logique et démontrable.", gods: ["athena", "cadmos", "asclepios", "mnemosyne"] },
      { text: "La vérité de l’effort et de l’épreuve.", gods: ["ares", "heracles", "achille", "atlas"] },
      { text: "La vérité du cœur et de la fidélité.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "La vérité artistique et intuitive.", gods: ["apollon", "orphee", "dionysos", "calliope"] }
    ]
  },

  // 41 à 50
  {
    text: "Quand tu dois dire quelque chose de difficile à quelqu’un...",
    answers: [
      { text: "Tu expliques calmement en pesant tes mots.", gods: ["athena", "asclepios", "cadmos", "mnemosyne"] },
      { text: "Tu y vas franchement, quitte à être brusque.", gods: ["ares", "zeus", "achille", "heracles"] },
      { text: "Tu le dis avec douceur et bienveillance.", gods: ["demeter", "psyche", "dione", "helene"] },
      { text: "Tu utilises humour ou image pour faire passer le message.", gods: ["hermes", "orphee", "dionysos", "thalie"] }
    ]
  },
  {
    text: "Quel serait ton ennemi juré, symboliquement parlant ?",
    answers: [
      { text: "L’ignorance, le mensonge, la confusion.", gods: ["athena", "cadmos", "mnemosyne", "clio"] },
      { text: "La passivité, la lâcheté, l’abandon.", gods: ["ares", "achille", "heracles", "atlas"] },
      { text: "L’indifférence émotionnelle, l’égoïsme froid.", gods: ["demeter", "psyche", "hera", "echo"] },
      { text: "La routine, l’absence de liberté créative.", gods: ["apollon", "hermes", "dionysos", "orphee"] }
    ]
  },
  {
    text: "Qu’est-ce qui te fait perdre patience le plus vite ?",
    answers: [
      { text: "La stupidité ou l’incohérence assumée.", gods: ["athena", "clio", "mnemosyne", "asclepios"] },
      { text: "L’hésitation ou le manque de courage.", gods: ["ares", "achille", "heracles", "atalante"] },
      { text: "Les comportements injustes envers quelqu’un.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "Les règles absurdes et les idées fermées.", gods: ["hermes", "dionysos", "promethee", "orphee"] }
    ]
  },
  {
    text: "Quel serait ton super-pouvoir symbolique ?",
    answers: [
      { text: "La clairvoyance et le pouvoir de comprendre tout.", gods: ["athena", "mnemosyne", "clio", "asclepios"] },
      { text: "La force invincible qui protège et combat.", gods: ["ares", "heracles", "achille", "atlas"] },
      { text: "La guérison émotionnelle et l’harmonie durable.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "La création libre : musique, illusion, invention.", gods: ["apollon", "orphee", "dionysos", "promethee"] }
    ]
  },
  {
    text: "Quel paysage te ressemble le plus ?",
    answers: [
      { text: "Une bibliothèque silencieuse et lumineuse.", gods: ["athena", "mnemosyne", "hestia", "clio"] },
      { text: "Une montagne escarpée à grimper.", gods: ["ares", "atalante", "achille", "heracles"] },
      { text: "Un jardin fertile et protecteur.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "Un festival coloré au bord de la mer.", gods: ["dionysos", "hermes", "orphee", "apollon"] }
    ]
  },
  {
    text: "Comment gères-tu la compétition ?",
    answers: [
      { text: "Je cherche à être le·la meilleur·e par travail et rigueur.", gods: ["athena", "hephaistos", "cadmos", "asclepios"] },
      { text: "Je veux gagner, je ne lâche rien.", gods: ["ares", "heracles", "achille", "zeus"] },
      { text: "J’y participe, mais sans écraser les autres.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "Je préfère créer que combattre.", gods: ["apollon", "orphee", "dionysos", "calliope"] }
    ]
  },
  {
    text: "Ton plus grand risque dans la vie serait...",
    answers: [
      { text: "De devenir trop critique ou trop perfectionniste.", gods: ["athena", "asclepios", "mnemosyne", "rhea"] },
      { text: "De foncer sans réfléchir et d’épuiser tes forces.", gods: ["ares", "achille", "heracles", "atlas"] },
      { text: "De t’oublier toi-même pour les autres.", gods: ["demeter", "psyche", "dione", "hera"] },
      { text: "De te perdre dans le rêve ou l’indiscipline.", gods: ["hermes", "dionysos", "morphee", "orphee"] }
    ]
  },
  {
    text: "Choisis un symbole qui te représente.",
    answers: [
      { text: "Un hibou : la connaissance silencieuse.", gods: ["athena", "clio", "mnemosyne", "asclepios"] },
      { text: "Une épée : la volonté d’agir et de protéger.", gods: ["ares", "achille", "heracles", "atalante"] },
      { text: "Une fleur : la douceur qui soutient et soigne.", gods: ["demeter", "psyche", "dione", "helene"] },
      { text: "Une lyre : la liberté d’imaginer et d’inspirer.", gods: ["apollon", "orphee", "dionysos", "calliope"] }
    ]
  },
  {
    text: "Comment préfères-tu résoudre un conflit personnel ?",
    answers: [
      { text: "Avec une discussion rationnelle et claire.", gods: ["athena", "cadmos", "mnemosyne", "rhea"] },
      { text: "En affrontant directement le problème.", gods: ["ares", "zeus", "achille", "heracles"] },
      { text: "En cherchant la paix et le bien-être de chacun.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "En changeant de perspective, en créant du recul.", gods: ["hermes", "orphee", "dionysos", "thalie"] }
    ]
  },
  {
    text: "Si tu devais laisser un héritage au monde...",
    answers: [
      { text: "Un savoir, une découverte, une vérité éclairante.", gods: ["athena", "mnemosyne", "clio", "asclepios"] },
      { text: "Un acte héroïque, une victoire inspirante.", gods: ["ares", "heracles", "achille", "atalante"] },
      { text: "Une communauté plus juste et plus solidaire.", gods: ["demeter", "psyche", "hera", "dione"] },
      { text: "Une œuvre, une invention, une création unique.", gods: ["apollon", "promethee", "orphee", "dionysos"] }
    ]
  },

  // 51 à 60
  {
    text: "Quel défaut te fait le plus peur pour toi-même ?",
    answers: [
      { text: "Devenir froid·e, trop intellectuel·le, distant·e.", gods: ["athena", "asclepios", "mnemosyne", "rhea"] },
      { text: "Devenir agressif·ve, impulsif·ve, instable.", gods: ["ares", "achille", "heracles", "zeus"] },
      { text: "De devenir dépendant·e, trop sacrificiel·le.", gods: ["demeter", "psyche", "dione", "helene"] },
      { text: "De me perdre dans les illusions ou l’indiscipline.", gods: ["hermes", "dionysos", "morphee", "orphee"] }
    ]
  },
  {
    text: "Choisis un animal symbolique pour te représenter.",
    answers: [
      { text: "Le renard : la lucidité et l’observation.", gods: ["athena", "cadmos", "mnemosyne", "clio"] },
      { text: "Le lion : la puissance et le courage.", gods: ["ares", "zeus", "achille", "heracles"] },
      { text: "La colombe : l’amour et le soin mutuel.", gods: ["demeter", "psyche", "dione", "hera"] },
      { text: "Le dauphin : la liberté ludique et l’inspiration.", gods: ["apollon", "orphee", "dionysos", "hermes"] }
    ]
  },
  {
    text: "Quelle citation te correspondrait le mieux ?",
    answers: [
      { text: "« Connaître, c’est déjà transformer. »", gods: ["athena", "mnemosyne", "clio", "asclepios"] },
      { text: "« La victoire appartient aux audacieux. »", gods: ["ares", "achille", "heracles", "atalante"] },
      { text: "« L’amour est le moteur des grands choix. »", gods: ["demeter", "psyche", "helene", "hera"] },
      { text: "« Créer, c’est être pleinement vivant. »", gods: ["apollon", "orphee", "calliope", "dionysos"] }
    ]
  },
  {
    text: "Que penses-tu de la solitude ?",
    answers: [
      { text: "C’est une alliée pour réfléchir.", gods: ["athena", "hestia", "mnemosyne", "clio"] },
      { text: "C’est un moment de repos entre les combats.", gods: ["ares", "heracles", "achille", "atalante"] },
      { text: "Elle est difficile si elle manque de liens.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "Elle est inspirante si elle mène à créer.", gods: ["apollon", "orphee", "dionysos", "morphee"] }
    ]
  },
  {
    text: "Qu’est-ce qui te donne le plus d’énergie ?",
    answers: [
      { text: "Résoudre un problème complexe.", gods: ["athena", "cadmos", "mnemosyne", "asclepios"] },
      { text: "Relever un défi physique ou mental.", gods: ["ares", "heracles", "achille", "atlas"] },
      { text: "Partager des moments profonds avec quelqu’un.", gods: ["demeter", "psyche", "dione", "hera"] },
      { text: "Exprimer ta créativité ou ta fantaisie.", gods: ["apollon", "orphee", "dionysos", "hermes"] }
    ]
  },
  {
    text: "Si on écrivait un livre sur ta vie, ce serait...",
    answers: [
      { text: "Un traité de réflexion et de sagesse.", gods: ["athena", "mnemosyne", "clio", "asclepios"] },
      { text: "Une saga épique pleine d’épreuves.", gods: ["ares", "achille", "heracles", "atalante"] },
      { text: "Une histoire d’amour, de loyauté et de lien humain.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "Un conte poétique, étrange ou visionnaire.", gods: ["apollon", "orphee", "dionysos", "morphee"] }
    ]
  },
  {
    text: "Quelle énergie te définit le plus ?",
    answers: [
      { text: "La lucidité stratégique.", gods: ["athena", "cadmos", "mnemosyne", "asclepios"] },
      { text: "La force et l’audace.", gods: ["ares", "achille", "heracles", "atlas"] },
      { text: "La générosité affective.", gods: ["demeter", "psyche", "dione", "hera"] },
      { text: "La créativité inspirée.", gods: ["apollon", "orphee", "dionysos", "calliope"] }
    ]
  },
  {
    text: "Tu veux être quelqu’un qui...",
    answers: [
      { text: "Comprend profondément le monde.", gods: ["athena", "mnemosyne", "clio", "asclepios"] },
      { text: "Accomplit des actions remarquables.", gods: ["ares", "achille", "heracles", "atalante"] },
      { text: "Aime sincèrement et protège les autres.", gods: ["demeter", "psyche", "hera", "helene"] },
      { text: "Crée quelque chose d’unique et de libre.", gods: ["apollon", "orphee", "dionysos", "promethee"] }
    ]
  }
];

// ----------------------------------------------
// CONCLUSIONS (en attente de rédaction)
// ----------------------------------------------
const conclusions = {
  athena: "Si ton résultat correspond à Athéna, c’est que tu partages une grande partie de ce qui définit cette déesse : une intelligence lucide, une stratégie instinctive, un sens aigu de la justice et une manière de bâtir ta vie non pas par impulsion, mais grâce à une vision réfléchie. Comme Athéna, tu observes avant d’agir. Tu comprends avant de décider. Et lorsque tu avances, c’est rarement au hasard : tu sais où tu vas, pourquoi tu y vas et comment y parvenir.\n\nTa force principale est ta capacité à clarifier ce que les autres ne voient pas. Quand les gens autour de toi s’affolent, toi tu gardes la tête froide. Quand la situation devient confuse, tu as ce talent de structurer, mettre en mots, organiser les informations pour en tirer une conclusion juste et efficace. Tu n’agis pas pour agir : tu agis pour résoudre, pour améliorer, pour construire quelque chose de cohérent.\n\nComme Athéna, tu représentes la sagesse active. Tu n’es pas un théoricien détaché de la réalité, mais quelqu’un qui transforme l’analyse en solution. Tu n’es pas un rêveur perdu dans les hypothèses : tu es celui ou celle qui comprend, puis qui applique. Tu es le type de personne qui cherche à maîtriser, apprendre, progresser, et pas seulement à improviser la vie au jour le jour.\n\nCependant, cette lucidité et cette exigence peuvent parfois devenir un poids. Ton esprit a tendance à aller vite, plus vite que celui des autres. Ta patience est souvent mise à l’épreuve par l’irrationnel, l’incohérence, la mauvaise foi ou la paresse intellectuelle. Comme Athéna, tu peux devenir sévère sans t’en rendre compte, rigide sans le vouloir, ou avoir tendance à te méfier de tes propres émotions parce que tu valorises trop la logique. Il t’arrive de vouloir tout contrôler pour éviter l’erreur, ou de porter seul(e) la responsabilité de faire ce qui est juste. Parfois, tu peux donner trop de place à l’analyse et pas assez à l’instinct, au lâcher-prise, ou à la vulnérabilité.\n\nTon défi dans la vie, comme celui d’Athéna, est d’accepter que tout ne peut pas être maîtrisé par le raisonnement. Certains aspects de la vie demandent de ressentir, d’expérimenter, de s’ouvrir à ce qui échappe à l’analyse. Tu gagnerais à laisser plus d’espace à ce qui n’est pas forcément utile, mais qui est profondément humain : les passions, les erreurs, les émotions spontanées, le droit d’apprendre en cherchant moins la perfection.\n\nCe que ton résultat révèle aussi, c’est que tu es quelqu’un qui inspire. Les autres peuvent compter sur toi pour résoudre un problème, éclairer une situation confuse, prendre des décisions logiques, et donner des conseils sages. Tu as la capacité d’être un guide, un professeur, un médiateur, ou un bâtisseur de projets solides.\n\nSi tu avances avec l’esprit d’Athéna en toi, ton chemin sera guidé par la clarté et la cohérence. Mais souviens-toi : la sagesse ne vient pas seulement de ce que l’on comprend, mais aussi de ce que l’on ressent, expérimente, ose, même lorsque rien n’est certain. Ta tête est puissante : laisse aussi ton cœur prendre sa place.";
",
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
// AFFICHAGE DES QUESTIONS UNE À LA FOIS
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
      [...questionElem.getElementsByClassName("option")].forEach(o => o.classList.remove("selected"));
      option.classList.add("selected");
      option.dataset.gods = JSON.stringify(ans.gods);
    });

    questionElem.appendChild(option);
  });

  quizContainer.appendChild(questionElem);

  submitBtn.textContent = (currentQuestion === questions.length - 1) ? "Voir mon résultat" : "Suivant";
  submitBtn.style.display = "block";
}

showQuestion();

// ----------------------------------------------
// BOUTON SUIVANT / CALCUL DU SCORE
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
