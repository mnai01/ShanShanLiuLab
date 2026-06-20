# Liu Lab Independent Website Prototype

Static HTML prototype for a modern, recruiter-friendly academic lab website. It avoids Yale logos, seals, official Yale colors as branding, and any language implying this is an official Yale website. Yale affiliation should be stated only as factual appointment text once confirmed.

## Design Rationale

The revised direction is restrained, cinematic and paper-specific. The site now centers the SLC33A1 story from the attached Nature Cell Biology paper rather than generic biomedical language:

- ER immunopurification and compartment-specific profiling.
- ER redox metabolomics, especially GSH/GSSG balance.
- ER-GshF stress model and ER-focused CRISPR screening.
- SLC33A1 as an ER-localized oxidized glutathione transporter.
- Cryo-EM and molecular dynamics insight into GSSG recognition.
- PDI oxidation, UPR/ER stress, ERAD dependency and disease relevance.

Typography and spacing were reduced from the first pass so the site feels more like a polished independent academic lab site and less like an oversized startup landing page.

The hero uses the supplied silent molecular/ER video with a solid black left-side reading field and a gradual fade to the scientific visual. The former WebGL molecule/process animation has been replaced with a compact evidence map so the SLC33A1 mechanism reads more like a research narrative than a graphics demo.

## Current Structure

- `index.html`: semantic one-page prototype with anchored sections.
- `styles.css`: responsive visual system, layout, typography and component styling.
- `content/site-content.js`: update-friendly content records for research, process stages, publications, people, roles, news and contact.
- `scripts/app.js`: content rendering, mobile navigation, autoplay video handling and icon initialization.
- `assets/`: optimized web images used by the prototype.
- `references/`: local source/archive files, including the attached paper PDF and original lab-provided TIF.

## Source Notes

Primary source:

- Local PDF: `references/s41556-026-01922-y.pdf`
- Nature article: https://www.nature.com/articles/s41556-026-01922-y

Content currently emphasized from the PDF and article:

- ER immunopurification using an EMC3-based ER tag.
- ER metabolome profiling of redox metabolites, UDP-sugars, nucleotides and lipid-associated metabolites.
- ER-GshF stress modeling and ER-focused CRISPR screening.
- SLC33A1 as an ER-localized GSSG exporter supported by uptake and liposome counterflow assays.
- Cryo-EM and molecular-dynamics interpretation of GSSG recognition in the SLC33A1 central cavity.
- PDI oxidation, UPR/ER stress and ERAD dependency as cellular outcomes of ER redox imbalance.

Additional publication/context sources:

- Rockefeller story: https://www.rockefeller.edu/news/39407-antioxidant-glutathione-protein-regulation-cancer-neurodegeneration/
- Science publication DOI: https://doi.org/10.1126/science.adf4154
- Google Scholar profile supplied by user: https://scholar.google.com/citations?user=nDvllAYAAAAJ&hl=en
- ORCID: https://orcid.org/0000-0001-8293-1025

Google Scholar was not fully machine-readable in this environment. The publication list should be reconciled against a CV, Scholar export, ORCID export or PubMed list.

## Asset Notes

- `assets/molecular-er-reference.png`: user-provided molecular/ER visual benchmark.
- `assets/molecular-er-hero.webp` and `.jpg`: optimized still versions retained as poster and fallback assets.
- `assets/molecular-er-hero-motion.mp4`: user-provided silent motion hero video.
- `references/22-49-3_Beads_035.tif`: original lab-provided ER pulldown beads TIF from Shanshan.
- `assets/beads-microscopy-crop.webp` and `.jpg`: cropped, web-optimized versions used as the Join section background.
- `references/research-program-*.jpeg`: Shanshan-provided research-direction sketches.
- `assets/research-program-*.webp`: optimized web versions used in the Research Program section.
- `assets/nigms-cell-division-death.mp4`: prototype B-roll candidate from NIGMS Image and Video Gallery ID 6790.
- `assets/er-microscopy.png`: earlier NIH/NIGMS microscopy placeholder retained but no longer primary.

Confirm rights and preferred attribution language for user-provided images before public deployment.

The NIGMS video candidate is licensed CC BY-NC-SA 3.0 and credited to Dylan T. Burnette, Vanderbilt University School of Medicine / NIGMS. Confirm that this license is acceptable before public use on a final deployed site.

## Future Next.js or Astro Migration

The static architecture maps cleanly to:

- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/ResearchCard.tsx`
- `components/PublicationCard.tsx`
- `components/PersonCard.tsx`
- `components/NewsRow.tsx`
- `components/CTASection.tsx`
- `components/Footer.tsx`
- `content/research.ts`
- `content/publications.ts`
- `content/people.ts`
- `content/news.ts`

## Local Preview

Open `index.html` directly or serve the folder:

```bash
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deployment

For Vercel static deployment:

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use no build command for this static prototype.
4. Set the output directory to the project root.

For a future Astro or Next.js version, move the content records into typed modules and use the framework build command.
