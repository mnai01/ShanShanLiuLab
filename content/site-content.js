window.LAB_CONTENT = {
  researchThemes: [
    {
      eyebrow: "Flagship direction",
      title: "ER redox homeostasis",
      summary:
        "Define how ER GSSG export and GSSG:GSH balance support oxidative protein folding without pushing the compartment into stress.",
      tags: ["SLC33A1", "GSSG export", "Protein maturation"],
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      eyebrow: "Platform",
      title: "Organelle metabolomics",
      summary:
        "Measure compartment-specific metabolites with rapid ER immunopurification, LC-MS and parallel proteomic or transcriptomic readouts.",
      tags: ["ER-IP", "LC-MS", "Proteome"],
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      eyebrow: "Mechanism",
      title: "Transporter biochemistry",
      summary:
        "Move from genetic hits to direct activity using ER uptake experiments, purified transporters and reconstituted liposome assays.",
      tags: ["GSSG uptake", "Liposomes", "Substrate selectivity"],
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      eyebrow: "Structure",
      title: "Structure-guided redox biology",
      summary:
        "Use cryo-EM, molecular dynamics and mutational analysis to explain how transporters recognize redox metabolites.",
      tags: ["Cryo-EM", "Molecular dynamics", "Aromatic cavity"],
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      eyebrow: "Cell biology",
      title: "Proteostasis under redox stress",
      summary:
        "Study how ER redox imbalance changes PDI oxidation, activates UPR signaling and exposes ERAD dependencies.",
      tags: ["PDI oxidation", "UPR", "ERAD"],
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      eyebrow: "Related axis",
      title: "Mitochondrial glutathione adaptation",
      summary:
        "Keep SLC25A39-centered mitochondrial glutathione biology as a related organelle-redox axis, separate from the ER SLC33A1 story.",
      tags: ["SLC25A39", "GSH import", "Mitochondria"],
      link: "https://doi.org/10.1126/science.adf4154"
    }
  ],
  processSteps: [
    {
      short: "ER-IP",
      title: "Capture the ER",
      detail:
        "An EMC3-based ER tag supports rapid ER immunopurification for proteome, transcriptome, metabolome and lipidome measurements.",
      visual: "purify",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Metabolome",
      title: "Measure compartment chemistry",
      detail:
        "ER profiling resolves redox metabolites including GSH/GSSG, alongside UDP-sugars, nucleotides and lipid-associated metabolites.",
      visual: "profile",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Screen",
      title: "Create ER glutathione stress",
      detail:
        "An ER-GshF stress model and ER-focused CRISPR screen identify SLC33A1 as a central regulator of ER glutathione homeostasis.",
      visual: "screen",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Transport",
      title: "Test GSSG movement directly",
      detail:
        "ER uptake and liposome counterflow assays support SLC33A1 as an ER-localized transporter for oxidized glutathione.",
      visual: "transport",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Structure",
      title: "Resolve substrate recognition",
      detail:
        "Cryo-EM and molecular dynamics place GSSG in the SLC33A1 central cavity and identify transport-critical residues.",
      visual: "structure",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Outcome",
      title: "Link redox balance to proteostasis",
      detail:
        "SLC33A1 loss drives ER GSSG accumulation, altered PDI oxidation, UPR signaling and dependency on ER-associated degradation.",
      visual: "outcome",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    }
  ],
  studySummaries: [
    {
      title: "Plain English",
      body:
        "Cells keep different chemical conditions inside each organelle. The lab studies how organelles move glutathione and related metabolites so proteins fold correctly and stress responses stay controlled."
    },
    {
      title: "Technical",
      body:
        "The program links organelle immunopurification, metabolomics, CRISPR screens, transport assays, cryo-EM and redox proteomics to identify metabolite transporters and define how compartment-specific redox balance controls proteostasis."
    }
  ],
  programImages: [
    {
      title: "Protein and metabolite homeostasis",
      label: "Program model",
      image: "assets/research-program-homeostasis.webp",
      fallback: "assets/research-program-homeostasis.jpg",
      alt: "Diagram showing balance between protein homeostasis and metabolite homeostasis in the ER.",
      link: "#research",
      body:
        "A high-level model for how ER translation, folding, glycosylation, secretion, transporters, enzymes and metabolites are balanced."
    },
    {
      title: "Forward and reverse genetics",
      label: "Discovery strategy",
      image: "assets/research-program-genetics.webp",
      fallback: "assets/research-program-genetics.jpg",
      alt: "Diagram showing reverse genetics with Cas9, ER-IP and metabolomics, and forward genetics with microbial enzymes and genetic screening.",
      link: "#research",
      body:
        "A discovery loop connecting Cas9 perturbation, ER-IP metabolomics, microbe-derived enzymes and genetic screens."
    },
    {
      title: "PanERama",
      label: "In vivo direction",
      image: "assets/research-program-panerama.webp",
      fallback: "assets/research-program-panerama.jpg",
      alt: "Diagram labeled PanERama showing conditional ER tag and Cre driver strategy across disease progression.",
      link: "#research",
      body:
        "A future-facing ER-tag strategy for following tissue and disease progression contexts such as steatosis and neurodegeneration."
    }
  ],
  broll: {
    title: "Cell dynamics reference",
    source: "NIGMS Image and Video Gallery ID 6790",
    credit: "Dylan T. Burnette, Vanderbilt University School of Medicine / NIGMS",
    license: "CC BY-NC-SA 3.0",
    video: "assets/nigms-cell-division-death.mp4",
    link: "https://nigms.nih.gov/image-gallery/6790",
    body:
      "A confocal microscopy reference showing mitosis and programmed cell death. It can be replaced by lab-owned organelle or cell-dynamics footage when available."
  },
  publications: [
    {
      title: "SLC33A1 exports oxidized glutathione to maintain endoplasmic reticulum redox homeostasis",
      authors: "Shanshan Liu, Mark Gad, Caifan Li, Kevin Cho, Yuyang Liu, Khando Wangdu, et al.",
      journal: "Nature Cell Biology",
      year: "2026",
      doi: "10.1038/s41556-026-01922-y",
      source: "PDF verified",
      link: "https://www.nature.com/articles/s41556-026-01922-y",
      featured: true
    },
    {
      title: "Autoregulatory control of mitochondrial glutathione homeostasis",
      authors: "Yuyang Liu, Shanshan Liu, Anju Tomar, Frederick S. Yen, et al.",
      journal: "Science",
      year: "2023",
      doi: "10.1126/science.adf4154",
      source: "Publication record verified",
      link: "https://doi.org/10.1126/science.adf4154",
      featured: true
    },
    {
      title: "Protocols for analyzing metabolic derangements caused by increased NADH/NAD+ ratio in cell lines and in mice",
      authors: "Shanshan Liu, Yan Ma, Hui Jiang",
      journal: "STAR Protocols",
      year: "2022",
      doi: "10.1016/j.xpro.2021.101120",
      source: "DOI record",
      link: "https://www.cell.com/star-protocols/fulltext/S2666-1667(21)00826-1"
    },
    {
      title: "Glycerol-3-phosphate biosynthesis regenerates cytosolic NAD+ to alleviate mitochondrial disease",
      authors: "Shanshan Liu, Song Fu, Guodong Wang, Yu Cao, et al.",
      journal: "Cell Metabolism",
      year: "2021",
      doi: "10.1016/j.cmet.2021.06.013",
      source: "DOI record",
      link: "https://doi.org/10.1016/j.cmet.2021.06.013"
    }
  ],
  people: [
    {
      initials: "SL",
      name: "Shanshan Liu, PhD",
      role: "Principal Investigator",
      summary:
        "Yale-affiliated principal investigator building an independent lab focused on organelle metabolism, glutathione transport and redox control of proteostasis. Replace with the approved appointment title, biography and portrait."
    },
    {
      initials: "+",
      name: "First lab members",
      role: "Recruiting placeholders",
      summary:
        "The site is structured for postdocs, graduate students, research assistants, summer students and alumni without making the launch-stage lab look empty."
    }
  ],
  roles: [
    {
      title: "Research assistants",
      text: "For candidates who want rigorous training in cell biology, molecular biology, metabolomics, imaging or quantitative analysis."
    },
    {
      title: "Postdoctoral fellows",
      text: "For scientists ready to lead mechanistic projects in organelle metabolism, transporter biology and disease-relevant stress states."
    },
    {
      title: "Graduate and summer students",
      text: "For trainees interested in building projects across genetics, biochemistry, cell biology and analytical technologies."
    }
  ],
  news: [
    {
      date: "2026",
      title: "Independent lab website in progress",
      text: "Prototype redesigned around the SLC33A1 ER glutathione export story and future recruiting needs."
    },
    {
      date: "May 2026",
      title: "SLC33A1 study in Nature Cell Biology",
      text: "The paper identifies SLC33A1 as a major ER oxidized glutathione exporter and links ER redox balance to protein maturation."
    },
    {
      date: "Coming soon",
      title: "Recruitment and launch updates",
      text: "Official openings, job posting links, conference news and lab member announcements can be added here."
    }
  ],
  contact: [
    ["Email", "yale.email@yale.edu", "mailto:yale.email@yale.edu"],
    ["Affiliation", "Yale University affiliation placeholder", null],
    ["Google Scholar", "Scholar profile", "https://scholar.google.com/citations?user=nDvllAYAAAAJ&hl=en"],
    ["ORCID", "0000-0001-8293-1025", "https://orcid.org/0000-0001-8293-1025"],
    ["PubMed", "Publication search", "https://pubmed.ncbi.nlm.nih.gov/?term=Shanshan+Liu%5BAuthor%5D"],
    ["Yale profile", "Add official profile when available", null],
    ["GitHub", "Add lab GitHub when available", null]
  ]
};
