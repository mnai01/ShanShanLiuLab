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
      short: "Screen",
      title: "Create ER glutathione stress",
      detail:
        "Create ER glutathione stress to identify SLC33A1.",
      visual: "screen",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "ER-IP",
      title: "Capture ER rapidly",
      detail:
        "Capture ER rapidly for compartment-focused analysis.",
      visual: "purify",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Metabolomics",
      title: "Measure ER metabolite changes",
      detail:
        "Measure ER metabolite changes after genetic perturbation.",
      visual: "profile",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Transport",
      title: "Test substrate transport",
      detail:
        "Test substrate transport using biochemical reconstitution.",
      visual: "transport",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Structure",
      title: "Define substrate recognition",
      detail:
        "Define substrate recognition by cryo-EM.",
      visual: "structure",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    },
    {
      short: "Outcome",
      title: "Connect activity to ER function",
      detail:
        "Connect transporter activity to ER redox balance and protein maturation.",
      visual: "outcome",
      link: "https://www.nature.com/articles/s41556-026-01922-y"
    }
  ],
  eripSlides: [
    {
      label: "ER-IP beads 035",
      image: "assets/erip-beads-035.webp",
      fallback: "assets/erip-beads-035.jpg",
      alt: "Electron microscopy image of an ER immunopurification bead sample, field 035."
    },
    {
      label: "ER-IP beads 040",
      image: "assets/erip-beads-040.webp",
      fallback: "assets/erip-beads-040.jpg",
      alt: "Electron microscopy image of an ER immunopurification bead sample, field 040."
    },
    {
      label: "ER-IP beads 042",
      image: "assets/erip-beads-042.webp",
      fallback: "assets/erip-beads-042.jpg",
      alt: "Electron microscopy image of an ER immunopurification bead sample, field 042."
    },
    {
      label: "ER-IP beads 053",
      image: "assets/erip-beads-053.webp",
      fallback: "assets/erip-beads-053.jpg",
      alt: "Electron microscopy image of an ER immunopurification bead sample, field 053."
    },
    {
      label: "ER-IP beads 057",
      image: "assets/erip-beads-057.webp",
      fallback: "assets/erip-beads-057.jpg",
      alt: "Electron microscopy image of an ER immunopurification bead sample, field 057."
    },
    {
      label: "ER-IP beads 058",
      image: "assets/erip-beads-058.webp",
      fallback: "assets/erip-beads-058.jpg",
      alt: "Electron microscopy image of an ER immunopurification bead sample, field 058."
    },
    {
      label: "ER-IP beads 060",
      image: "assets/erip-beads-060.webp",
      fallback: "assets/erip-beads-060.jpg",
      alt: "Electron microscopy image of an ER immunopurification bead sample, field 060."
    }
  ],
  programImages: [
    {
      title: "Protein and metabolite homeostasis",
      label: "Program model",
      image: "assets/research-program-homeostasis.webp",
      fallback: "assets/research-program-homeostasis.jpg",
      alt: "Diagram showing balance between protein homeostasis and metabolite homeostasis in the ER.",
      link: "#program",
      body:
        "We study how the ER balances metabolite availability with core organelle functions, including protein folding, secretion, lipid synthesis, and calcium storage."
    },
    {
      title: "Forward and reverse genetics",
      label: "Discovery strategy",
      image: "assets/research-program-genetics.webp",
      fallback: "assets/research-program-genetics.jpg",
      alt: "Diagram showing reverse genetics with Cas9, ER-IP and metabolomics, and forward genetics with microbial enzymes and genetic screening.",
      link: "#program",
      body:
        "We combine reverse genetics with ER-IP metabolomics, and forward genetics with microbe-derived enzymes, to identify transporters, enzymes, and regulatory pathways that control ER metabolism."
    },
    {
      title: "PanERama",
      label: "In vivo direction",
      image: "assets/research-program-panerama.webp",
      fallback: "assets/research-program-panerama.jpg",
      alt: "Diagram labeled PanERama showing conditional ER tag and Cre driver strategy across disease progression.",
      link: "#program",
      body:
        "Using ER-tagged mouse models generated in the lab, we will build ER-focused datasets of proteins and metabolites across tissues and disease states to reveal disease-associated changes and potential therapeutic insights."
    }
  ],
  publications: [
    {
      title: "SLC33A1 exports oxidized glutathione to maintain endoplasmic reticulum redox homeostasis",
      authors: "Shanshan Liu, Mark Gad, Caifan Li, Kevin Cho, Yuyang Liu, Khando Wangdu, et al.",
      journal: "Nature Cell Biology",
      year: "2026",
      doi: "10.1038/s41556-026-01922-y",
      source: "Nature Cell Biology",
      link: "https://www.nature.com/articles/s41556-026-01922-y",
      image: {
        src: "assets/publication-slc33a1-sketch.webp",
        fallback: "assets/publication-slc33a1-sketch.jpg",
        alt: "Sketch-style cover concept image associated with the SLC33A1 publication."
      },
      featured: true
    },
    {
      title: "Autoregulatory control of mitochondrial glutathione homeostasis",
      authors: "Yuyang Liu, Shanshan Liu, Anju Tomar, Frederick S. Yen, et al.",
      journal: "Science",
      year: "2023",
      doi: "10.1126/science.adf4154",
      source: "Science",
      link: "https://doi.org/10.1126/science.adf4154",
      featured: true
    },
    {
      title: "Glycerol-3-phosphate biosynthesis regenerates cytosolic NAD+ to alleviate mitochondrial disease",
      authors: "Shanshan Liu, Song Fu, Guodong Wang, Yu Cao, et al.",
      journal: "Cell Metabolism",
      year: "2021",
      doi: "10.1016/j.cmet.2021.06.013",
      source: "Cell Metabolism",
      link: "https://doi.org/10.1016/j.cmet.2021.06.013",
      image: {
        src: "assets/publication-cell-metabolism-2021-cover.webp",
        fallback: "assets/publication-cell-metabolism-2021-cover.jpg",
        alt: "Cell Metabolism cover image associated with the 2021 glycerol-3-phosphate publication."
      }
    }
  ],
  people: [
    {
      initials: "SL",
      name: "Shanshan Liu, PhD",
      role: "Principal Investigator",
      portrait: {
        src: "assets/shanshan-liu-headshot.jpg",
        alt: "Portrait of Shanshan Liu."
      },
      summary:
        "Shanshan Liu received her PhD from the National Institute of Biological Sciences, Beijing, where she studied how cells maintain NADH balance when mitochondrial respiration is impaired. She then completed postdoctoral training at Rockefeller University, where she developed approaches to study metabolism within the endoplasmic reticulum and identified mechanisms that link ER metabolite transport to organelle function. Her lab at Yale investigates how metabolic homeostasis is established, sensed, and regulated in the secretory pathway, and how its disruption contributes to disease."
    }
  ],
  roles: [
    {
      title: "Research assistants",
      text: "For candidates who want rigorous training in cell biology, genetics, molecular biology, metabolomics, and biochemical analysis."
    },
    {
      title: "Postdoctoral fellows",
      text: "For scientists ready to lead mechanistic projects in metabolism, transporter biology, and disease-relevant stress states."
    },
    {
      title: "Graduate and summer students",
      text: "For trainees interested in building projects across genetics, biochemistry, and analytical technologies."
    }
  ],
  news: [
    {
      date: "2026",
      title: "Liu Lab website",
      text: "The Liu Lab website introduces the lab's research program, platforms, selected publications, and recruiting information."
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
    ["Email", "shanshan.liu@yale.edu", "mailto:shanshan.liu@yale.edu"],
    ["Affiliation", "Department of Cell Biology, Yale School of Medicine", null],
    ["Google Scholar", "Google Scholar", "https://scholar.google.com/citations?user=nDvllAYAAAAJ&hl=en"],
    ["ORCID", "0000-0001-8293-1025", "https://orcid.org/0000-0001-8293-1025"]
  ]
};
