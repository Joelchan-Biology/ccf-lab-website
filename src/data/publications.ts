export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  highlight?: boolean;
  note?: string;
};

export const publications: Publication[] = [
  // ── Recent (2022–2026) ──
  {
    title:
      "Mes/Stem-A ovarian cancer subtypes predict sensitivity to ATR inhibition",
    authors: "Sundararajan V, Fang Z, Elfar GA, Tan TZ, ... Cheok CF, Tan DSP",
    journal: "Oncogene",
    year: 2026,
    doi: "10.1038/s41388-026-03830-9",
  },
  {
    title:
      "Frequent novel viral focal copy number gains potentiate radiosensitivity in natural killer/T-cell lymphoma",
    authors: "Lim JQ, Phyu T, Huang D, Phang BH, Fang Z, ... Cheok CF, Ng SB, Ong CK",
    journal: "Cancer Communications",
    year: 2026,
    doi: "10.34133/cancomm.0055",
  },
  {
    title:
      "Cell migration in endometriosis responds to omentum-derived molecular cues similar to ovarian cancer",
    authors: "Goh KY, Tham SC, Cheng TYD, ... Cheok CF, Lim DWT, Lim EH",
    journal: "Int. J. Mol. Sci.",
    year: 2025,
    doi: "10.3390/ijms26051822",
  },
  {
    title:
      "p53-dependent crosstalk between DNA replication integrity and redox metabolism mediated through a NRF2-PARP1 axis",
    authors: "Elfar GA, Aning O, Ngai TW, Yeo P, Chan JWK, Sim SH, Goh L, ... Cheok CF",
    journal: "Nucleic Acids Research",
    year: 2024,
    doi: "10.1093/nar/gkae811",
    highlight: true,
  },
  {
    title:
      "PHF2 regulates genome topology and DNA replication in neural stem cells via cohesin",
    authors: "Feng J, Chuah YH, Liang Y, Cipta NO, ... Cheok CF, Ong DST",
    journal: "Nucleic Acids Research",
    year: 2024,
    doi: "10.1093/nar/gkae457",
  },
  {
    title:
      "Nitro-deficient niclosamide confers reduced genotoxicity and retains mitochondrial uncoupling activity for cancer therapy",
    authors: "Ngai TW, Elfar GA, Yeo P, Phua N, Hor JH, Chen S, Ho YS, Cheok CF",
    journal: "Int. J. Mol. Sci.",
    year: 2021,
    doi: "10.3390/ijms221910420",
    highlight: true,
  },
  // ── Featured / Highlighted ──
  {
    title:
      "Targeting codon 158 p53-mutant cancers via the induction of p53 acetylation",
    authors: "Kong LR, Ong RW, Tan TZ, ... Cheok CF et al.",
    journal: "Nature Communications",
    year: 2020,
    doi: "10.1038/s41467-020-15608-y",
  },
  {
    title:
      "Drugging in the absence of p53",
    authors: "Aning OA, Cheok CF",
    journal: "Journal of Molecular Cell Biology",
    year: 2019,
    doi: "10.1093/jmcb/mjz012",
    highlight: true,
  },
  {
    title:
      "Mitochondrial uncoupling reveals a novel therapeutic opportunity for p53-defective cancers",
    authors: "Kumar R, Coronel L, Somalanka B, Raju A, Aning OA, ... Cheok CF",
    journal: "Nature Communications",
    year: 2018,
    doi: "10.1038/s41467-018-05805-1",
    highlight: true,
    note: "Featured in A*STAR Research Highlights",
  },
  {
    title:
      "Dynamics of RIF1 SUMOylation is regulated by PIAS4 in the maintenance of genomic stability",
    authors: "Kumar R, Cheok CF",
    journal: "Scientific Reports",
    year: 2017,
    doi: "10.1038/s41598-017-16934-w",
    highlight: true,
  },
  {
    title:
      "Cyclin-dependent kinase-dependent phosphorylation of Sox2 at serine 39 regulates neurogenesis",
    authors: "Lim S, Bhinge A, Bragado Alonso S, ... Cheok CF, ...",
    journal: "Molecular and Cellular Biology",
    year: 2017,
    doi: "10.1128/mcb.00201-17",
  },
  {
    title:
      "Exploiting the p53 pathway for therapy",
    authors: "Cheok CF, Lane DP",
    journal: "Cold Spring Harbor Perspectives in Medicine",
    year: 2017,
    doi: "10.1101/cshperspect.a026310",
    highlight: true,
  },
  {
    title:
      "p53 maintains genomic stability by preventing interference between transcription and replication",
    authors: "Yeo CQX, Alexander I, Lin Z, Lim S, Aning OA, Kumar R, ... Cheok CF",
    journal: "Cell Reports",
    year: 2016,
    doi: "10.1016/j.celrep.2016.03.011",
    highlight: true,
    note: "Highlighted in Nature Reviews Molecular Cell Biology",
  },

  // ── Selected earlier work ──
  {
    title: "RIF1: a novel regulatory factor for DNA replication and DNA damage response signaling",
    authors: "Kumar R, Cheok CF",
    journal: "DNA Repair",
    year: 2014,
    doi: "10.1016/j.dnarep.2013.12.004",
    highlight: true,
  },
  {
    title:
      "Bringing p53 into the clinic",
    authors: "Cheok CF",
    journal: "Journal of Cancer Science & Therapy",
    year: 2014,
    doi: "10.4172/1948-5956.1000294",
    highlight: true,
  },
  {
    title:
      "Protecting normal cells from the cytotoxicity of chemotherapy",
    authors: "Cheok CF",
    journal: "Cell Cycle",
    year: 2012,
    doi: "10.4161/cc.20961",
    highlight: true,
  },
  {
    title:
      "Seeking synergy in p53 transcriptional activation for cancer therapy",
    authors: "Cheok CF, Lane DP",
    journal: "Discovery Medicine",
    year: 2012,
    highlight: true,
  },
  {
    title:
      "Mutant p53 interactome identifies nardilysin as a p53R273H-specific binding partner that promotes invasion",
    authors: "Coffill CR, Muller PA, Oh HK, Neo SP, ... Cheok CF, Vousden KH, Lane DP, Blackstock WP, Gunaratne J",
    journal: "EMBO Reports",
    year: 2012,
    doi: "10.1038/embor.2012.74",
  },
  {
    title: "Translating p53 into the clinic",
    authors: "Cheok CF, Verma CS, Baselga J, Lane DP",
    journal: "Nature Reviews Clinical Oncology",
    year: 2011,
    doi: "10.1038/nrclinonc.2010.174",
    highlight: true,
  },
  {
    title:
      "New insights into p53 based therapy",
    authors: "Lane DP, Brown CJ, Verma C, Cheok CF",
    journal: "Discovery Medicine",
    year: 2011,
    highlight: true,
  },
  {
    title:
      "Reactivation of p53: from peptides to small molecules",
    authors: "Brown CJ, Cheok CF, Verma CS, Lane DP",
    journal: "Trends in Pharmacological Sciences",
    year: 2011,
    doi: "10.1016/j.tips.2010.11.004",
  },
  {
    title: "p53-based cancer therapy",
    authors: "Lane DP, Cheok CF, Lain S",
    journal: "Cold Spring Harbor Perspectives in Biology",
    year: 2010,
    doi: "10.1101/cshperspect.a001222",
  },
  {
    title:
      "Combination of nutlin-3 and VX-680 selectively targets p53 mutant cells with reversible effects on cells expressing wild-type p53",
    authors: "Cheok CF, Kua N, Kaldis P, Lane DP",
    journal: "Cell Death & Differentiation",
    year: 2010,
    doi: "10.1038/cdd.2010.18",
    highlight: true,
  },
  {
    title:
      "The p53 inducing drug dosage may determine quiescence or senescence",
    authors: "Lane DP, Verma C, Cheok CF",
    journal: "Aging",
    year: 2010,
    doi: "10.18632/aging.100229",
    highlight: true,
  },
  {
    title:
      "The Mdm2 and p53 genes are conserved in the Arachnids",
    authors: "Lane DP, Cheok CF, Brown CJ, Madhumalar A, Ghadessy FJ, Verma C",
    journal: "Cell Cycle",
    year: 2010,
    doi: "10.4161/cc.9.4.10616",
  },
  {
    title:
      "Mdm2 and p53 are highly conserved from placozoans to man",
    authors: "Lane DP, Cheok CF, Brown C, Madhumalar A, Ghadessy FJ, Verma C",
    journal: "Cell Cycle",
    year: 2010,
    doi: "10.4161/cc.9.3.10516",
  },
  {
    title:
      "WIP1 phosphatase is a negative regulator of NF-κB signalling",
    authors: "Chew J, Biswas S, Shreeram S, ... Cheok CF, López-Collazo E, Bulavin DV, Tergaonkar V",
    journal: "Nature Cell Biology",
    year: 2009,
    doi: "10.1038/ncb1873",
  },
  {
    title:
      "New developments in small molecules targeting p53 pathways in anticancer therapy",
    authors: "Cheok CF, Lane DP",
    journal: "Drug Development Research",
    year: 2008,
    doi: "10.1002/ddr.20261",
    highlight: true,
  },
  {
    title:
      "R-Roscovitine simultaneously targets both the p53 and NF-κB pathways and causes potentiation of apoptosis: implications in cancer therapy",
    authors: "Dey A, Wong ET, Cheok CF, Tergaonkar V, Lane DP",
    journal: "Cell Death & Differentiation",
    year: 2008,
    doi: "10.1038/sj.cdd.4402257",
  },
  {
    title:
      "Cyclin-dependent kinase inhibitors sensitize tumor cells to nutlin-induced apoptosis",
    authors: "Cheok CF, Dey A, Lane DP",
    journal: "Molecular Cancer Research",
    year: 2007,
    doi: "10.1158/1541-7786.MCR-07-0161",
    highlight: true,
  },
  {
    title:
      "Ubiquitin-independent degradation of p53 mediated by high-risk human papillomavirus protein E6",
    authors: "Camus S, Menéndez S, Cheok CF, Stevenson LF, Laín S, Lane DP",
    journal: "Oncogene",
    year: 2007,
    doi: "10.1038/sj.onc.1210188",
  },
  {
    title:
      "The Bloom's syndrome helicase promotes the annealing of complementary single-stranded DNA",
    authors: "Cheok CF, Wu L, Garcia PL, Janscak P, Hickson ID",
    journal: "Nucleic Acids Research",
    year: 2005,
    doi: "10.1093/nar/gki712",
    highlight: true,
  },
  {
    title:
      "Roles of the Bloom's syndrome helicase in the maintenance of genome stability",
    authors: "Cheok CF, Bachrati CZ, Chan KL, Ralf C, Wu L, Hickson ID",
    journal: "Biochemical Society Transactions",
    year: 2005,
    doi: "10.1042/bst0331456",
    highlight: true,
  },
];
