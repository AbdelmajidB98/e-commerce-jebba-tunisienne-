export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  tag?: string;
  description: string;
  images: string[];
  details: string;
  fabric: string;
  embroidery: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "jebba-femme-olive",
    name: "Jebba Olive Élégance",
    price: 380,
    category: "Soie & Lin",
    tag: "Populaire",
    description: "Une splendide Jebba traditionnelle revisitée pour la femme moderne, faite en crêpe de soie verte olive fluide. Elle se distingue par ses somptueuses broderies dorées exécutées à la main au fil d'or ('Sfifa') le long du buste et des manches.",
    images: [
      "/images/jebba-femme-olive-face.png",
      "/images/jebba-femme-olive-cote.jpg",
      "/images/jebba-femme-olive-dos.jpg"
    ],
    details: "Coupe longue avec fentes latérales pour un mouvement fluide. Les broderies sont réalisées par des artisanes de la Médina de Tunis.",
    fabric: "Crêpe de soie premium fluide",
    embroidery: "Sfifa dorée artisanale au fil d'or tunisien",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-blanche-or",
    name: "Jebba Jasmine Blanche",
    price: 440,
    category: "Cérémonie",
    tag: "Tradition",
    description: "Une Jebba immaculée d'une pureté exceptionnelle, taillée dans un crêpe de soie royale blanc. Son encolure est magnifiquement ornée d'une broderie dorée traditionnelle Sfifa, terminée par un gland doré torsadé.",
    images: [
      "/images/jebba-femme-blanche-or.jpg"
    ],
    details: "Port de tête altier, tissu lourd au tombé parfait. Le gland en passementerie ('Gland') est confectionné entièrement à la main par nos artisans.",
    fabric: "Crêpe de soie royale blanc pur",
    embroidery: "Sfifa large dorée et finitions passementerie fine",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-blanche-col-or",
    name: "Jebba Médina Reine",
    price: 480,
    category: "Cérémonie",
    tag: "Prestige",
    description: "Cette pièce de prestige présente un plastron doré majestueux qui s'élève en col officier brodé. C'est une Jebba d'apparat en soie blanche satinée, conçue pour les mariées ou les grandes célébrations.",
    images: [
      "/images/jebba-femme-blanche-col-or.jpg"
    ],
    details: "Col officier rigide entièrement brodé au fil d'or pur métallique. Coupe droite sculpturale avec manches évasées.",
    fabric: "Satin de soie sauvage lourd",
    embroidery: "Plastron majestueux en fil d'or métallique haute densité",
    sizes: ["S", "M", "L"],
  },
  {
    id: "jebba-femme-noire-tribale",
    name: "Jebba Métisse Noire",
    price: 390,
    category: "Moderne",
    tag: "Créateur",
    description: "Un contraste saisissant et hautement créatif pour cette Jebba noire en lin de luxe. Elle est ornée de broderies géométriques colorées d'inspiration berbère et décorée de pompons vibrants rose fuchsia et corail.",
    images: [
      "/images/jebba-femme-noire-tribale.jpg"
    ],
    details: "Une interprétation bohème chic et moderne de la Jebba. Idéale pour affirmer un style unique et dynamique.",
    fabric: "Lin de luxe épais et structuré",
    embroidery: "Broderies géométriques ethniques multicolores et pompons artisanaux",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-blanche-noire",
    name: "Jebba Alyssa Bicolore",
    price: 410,
    category: "Moderne",
    tag: "Nouveau",
    description: "Portée avec grâce, cette Jebba moderne en soie blanche fluide se structure par de délicats motifs brodés de couleur noire. Un design épuré, graphique et d'une modernité absolue pour la femme d'aujourd'hui.",
    images: [
      "/images/jebba-femme-blanche-noire.jpg"
    ],
    details: "Encolure en V profonde surlignée de broderie noire fine géométrique. Manches chauve-souris fluides bicolores.",
    fabric: "Crêpe de soie italienne fluide",
    embroidery: "Broderies géométriques contrastées en fil de soie noire",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-emeraude",
    name: "Jebba Émeraude Prestige",
    price: 460,
    category: "Cérémonie",
    tag: "Impérial",
    description: "Splendide Jebba d'apparat en soie de couleur vert émeraude impérial. Elle arbore une majestueuse encolure brodée d'or au point traditionnel tunisien Sfifa, se prolongeant sur le buste.",
    images: [
      "/images/jebba-femme-emeraude.png"
    ],
    details: "Couleur verte symbolique d'espoir et d'élégance. Les finitions des manches reprennent la broderie de l'encolure.",
    fabric: "100% Soie naturelle tunisienne",
    embroidery: "Sfifa dorée au fil d'or tunisien fait main",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-bordeaux",
    name: "Jebba Bordeaux Velours",
    price: 490,
    category: "Cérémonie",
    tag: "Hiver",
    description: "Une Jebba de cérémonie luxueuse, taillée dans un velours de soie bordeaux profond et lourd. Son plastron est richement brodé au fil d'or, idéal pour les mariages d'automne et d'hiver.",
    images: [
      "/images/jebba-femme-bordeaux.png"
    ],
    details: "Velours de soie ultra-doux au drapé spectaculaire. Isolation thermique et élégance incomparables.",
    fabric: "Velours de soie lourd premium",
    embroidery: "Broderie dense en fil d'or au point de Tunis",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-mauve",
    name: "Jebba Mauve Légère",
    price: 370,
    category: "Soie & Lin",
    description: "Une Jebba printanière décontractée en lin souple mauve pastel. Son col et ses manches sont soulignés par une fine broderie blanche épurée, alliant simplicité et distinction.",
    images: [
      "/images/jebba-femme-mauve.png"
    ],
    details: "Coupe décontractée avec poches dissimulées dans les coutures latérales. Confortable et respirante pour les journées chaudes.",
    fabric: "100% Lin souple prélavé",
    embroidery: "Point de croix fin au fil de soie blanche",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-safran",
    name: "Jebba Safran Impériale",
    price: 430,
    category: "Moderne",
    description: "Jebba en soie fluide couleur jaune safran vibrant. Elle s'orne d'une broderie cuivrée originale le long de l'encolure en V, apportant une touche solaire moderne et créative.",
    images: [
      "/images/jebba-femme-safran.png"
    ],
    details: "Teinte chaude et lumineuse. La broderie cuivrée contraste subtilement avec le tissu safran brillant.",
    fabric: "Soie de satin italienne",
    embroidery: "Broderie cuivrée et fil de soie bronze",
    sizes: ["S", "M", "L"],
  },
  {
    id: "jebba-femme-beige",
    name: "Jebba Beige Impériale",
    price: 420,
    category: "Cérémonie",
    description: "Cette magnifique Jebba beige exprime la pure tradition tunisienne avec une touche de luxe discret. Le tissu en soie sauvage satinée offre un éclat unique, rehaussé de motifs brodés main complexes en fil de soie dorée.",
    images: [
      "/images/jebba-femme-beige.png"
    ],
    details: "Silhouette longue et droite. Col en V souligné par un travail d'orfèvrerie textile unique. Parfait pour les réceptions de mariage et les soirées du Ramadan.",
    fabric: "Soie sauvage tunisienne satinée haut de gamme",
    embroidery: "Broderie complexe à l'aiguille en fil d'or",
    sizes: ["S", "M", "L"],
  },
  {
    id: "jebba-femme-rose",
    name: "Jebba Rose Pastel Moderne",
    price: 350,
    category: "Soie & Lin",
    description: "Une version fraîche et printanière de la Jebba, idéale pour les cérémonies de jour ou les soirées d'été. Fabriquée dans un mélange de lin léger et coton rose pastel avec des détails de boutons traditionnels sur le col.",
    images: [
      "/images/jebba-femme-rose.jpg"
    ],
    details: "Une coupe moderne décontractée pour un confort ultime tout en gardant une allure traditionnelle élégante.",
    fabric: "Lin naturel et coton tissé, très respirant",
    embroidery: "Boutons de soie faits main ('Guedla') et biais or discret",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-bleu-royal",
    name: "Jebba Bleu Royal Majesté",
    price: 450,
    category: "Cérémonie",
    tag: "Exclusif",
    description: "Jebba de cérémonie pour femme en soie bleu royal majestueux. Son col en V est orné de broderies artisanales traditionnelles dorées faites main par nos maîtres artisans tunisiens.",
    images: [
      "/images/jebba-femme-bleu-royal.png"
    ],
    details: "Une couleur royale vibrante qui capte la lumière lors des grandes soirées. Coupe ample impériale.",
    fabric: "100% Soie naturelle tissée tunisienne",
    embroidery: "Sfifa dorée et perles fines cousues à la main",
    sizes: ["M", "L", "XL"],
  },
  /* Déclinaisons pour atteindre 20+ produits */
  {
    id: "jebba-femme-ivoire-or",
    name: "Jebba Jasmine Ivoire",
    price: 440,
    category: "Cérémonie",
    description: "Une version ivoire de notre célèbre modèle Jasmine. Le crêpe de soie ivoire apporte un aspect plus chaleureux, rehaussé de la même broderie dorée Sfifa avec son gland assorti.",
    images: [
      "/images/jebba-femme-blanche-or.jpg"
    ],
    details: "Tons chauds écrus. Idéale pour les fiançailles ou la cérémonie du Henné.",
    fabric: "Crêpe de soie lourd couleur ivoire",
    embroidery: "Sfifa dorée classique et perles de rocaille dorées",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-bronze-olive",
    name: "Jebba Bronze & Olive",
    price: 390,
    category: "Soie & Lin",
    description: "Une déclinaison de la Jebba Olive, mariant un crêpe de soie bronze satiné avec des reflets olive. Elle arbore une broderie au fil de soie bronze pour un ton sur ton moderne et discret.",
    images: [
      "/images/jebba-femme-olive-face.png"
    ],
    details: "Les fentes latérales sont doublées d'un satin de soie bronze brillant. Manches 3/4 fluides.",
    fabric: "Crêpe de soie et satin bronze",
    embroidery: "Sfifa bronze faite main et bouton pression invisible",
    sizes: ["S", "M", "L"],
  },
  {
    id: "jebba-femme-charcoal-tribal",
    name: "Jebba Métisse Charbon",
    price: 390,
    category: "Moderne",
    description: "Une variante de la Jebba Métisse, tissée dans un lin de couleur gris charbon foncé. La broderie berbère de couleur vive ressort avec force sur ce fond sombre et mystique.",
    images: [
      "/images/jebba-femme-noire-tribale.jpg"
    ],
    details: "Lin flammé texturé de Kairouan. Les pompons sont déclinés dans des tons turquoise et orange brûlé.",
    fabric: "Lin flammé rustique gris charbon",
    embroidery: "Broderie berbère au point lancé et pompons de laine",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-creme-beige",
    name: "Jebba Crème Royale",
    price: 430,
    category: "Cérémonie",
    description: "Déclinaison de notre modèle impérial dans un ton crème velouté. La soie sauvage crème offre une structure impeccable et un éclat nacré propice aux grandes réceptions.",
    images: [
      "/images/jebba-femme-beige.png"
    ],
    details: "Manches chauve-souris structurées. Le col en V est souligné par une passementerie de soie crème et de fil d'or.",
    fabric: "Soie sauvage tunisienne couleur crème",
    embroidery: "Broderie à l'aiguille fil d'or et fil de soie crème",
    sizes: ["S", "M", "L"],
  },
  {
    id: "jebba-femme-corail-rose",
    name: "Jebba Corail d'Été",
    price: 360,
    category: "Soie & Lin",
    description: "Variante en lin de couleur corail vif de notre modèle Rose Pastel. Un vêtement éclatant, confortable et parfait pour célébrer les journées ensoleillées avec style.",
    images: [
      "/images/jebba-femme-rose.jpg"
    ],
    details: "Fentes d'aisance latérales. Col tunisien avec finitions de boutons traditionnels en fil de soie orange.",
    fabric: "Lin pur à 100% couleur corail",
    embroidery: "Boutons Guedla faits main et point de grébiche discret",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-saphir-bleu",
    name: "Jebba Bleu Saphir",
    price: 460,
    category: "Cérémonie",
    description: "Une version bleu saphir profond de la Jebba Majesté. La soie brillante capte la lumière avec force, ornée d'une broderie argentée et perlée d'une finesse rare.",
    images: [
      "/images/jebba-femme-bleu-royal.png"
    ],
    details: "Une pièce maîtresse idéale pour les soirées estivales. Finitions soignées au fil d'argent.",
    fabric: "100% Satin de soie bleu saphir",
    embroidery: "Sfifa argentée et perlage de cristal fait main",
    sizes: ["M", "L", "XL"],
  },
  {
    id: "jebba-femme-menthe-lilas",
    name: "Jebba Menthe Fraîche",
    price: 370,
    category: "Soie & Lin",
    description: "Variante en lin vert menthe de notre modèle Mauve. Apporte une fraîcheur et une légèreté idéales pour un style quotidien élégant et sophistiqué.",
    images: [
      "/images/jebba-femme-mauve.png"
    ],
    details: "Coupe droite et épurée. Finitions intérieures en biais de coton imprimé fleuri.",
    fabric: "100% Lin lavé couleur vert menthe",
    embroidery: "Fins liserés brodés en soie blanche",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-moutarde-safran",
    name: "Jebba Or Safran",
    price: 430,
    category: "Moderne",
    description: "Déclinaison de notre modèle Safran dans un jaune moutarde chaud. Elle intègre une broderie géométrique noire contrastée sur le col, offrant un style moderne assumé.",
    images: [
      "/images/jebba-femme-safran.png"
    ],
    details: "Tissu au tombé fluide et lourd. Col tunisien revisité avec découpe noire contrastante.",
    fabric: "Satin de soie lourd moutarde",
    embroidery: "Broderie noire et fils dorés mats",
    sizes: ["S", "M", "L"],
  },
  {
    id: "jebba-femme-noire-calligraphie",
    name: "Jebba Calligraphie Moderne",
    price: 380,
    category: "Moderne",
    tag: "Créateur",
    description: "Une Jebba moderne et vibrante de couleur noire, ornée d'une broderie aux nuances de vert fluo, orange et rose d'inspiration calligraphique arabe contemporaine.",
    images: [
      "/images/jebba-femme-noire-calligraphie.jpg"
    ],
    details: "Manches courtes fluides bordées d'un liseré doré. Idéale pour une allure moderne, colorée et très dynamique.",
    fabric: "Crêpe de soie fluide noir mat",
    embroidery: "Broderie calligraphique multicolore haute densité",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "jebba-femme-bordeaux-fleurs",
    name: "Jebba Bordeaux Fleuri",
    price: 395,
    category: "Soie & Lin",
    tag: "Nouveau",
    description: "Une splendide Jebba fluide rouge bordeaux avec une encolure en V ornée de broderies florales aux tons pastel de rose et violet, complétée par des glands en soie rose et champagne.",
    images: [
      "/images/jebba-femme-bordeaux-fleurs.jpg"
    ],
    details: "Encolure brodée florale unique. Manches courtes fluides et finition de liseré or.",
    fabric: "Crêpe de lin de luxe rouge bordeaux",
    embroidery: "Broderie florale multicolore fine et glands en soie",
    sizes: ["S", "M", "L", "XL"],
  }
];
