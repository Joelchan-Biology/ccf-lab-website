import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research areas of the CCF Lab -p53 biology, cancer therapeutics, genome topology, and translational research.",
};

const areas = [
  {
    id: "molecular-vulnerabilities",
    title: "Molecular Vulnerabilities in Cancer",
    description: `We identify molecular vulnerabilities in cancers by studying DNA damage response networks and cellular metabolism. Our work has uncovered non-canonical functions of the p53 tumour suppressor in safeguarding DNA replication, including how p53 prevents transcription-replication conflicts and how a p53-dependent NRF2-PARP1 axis links redox metabolism to genome integrity. Through high-throughput screens, we have identified metabolic vulnerabilities in p53-deficient cancers that can be exploited therapeutically.`,
    image: "/images/nar-2024-graphical-abstract.jpeg",
    imageAlt: "Graphical abstract -p53-dependent crosstalk between DNA replication integrity and redox metabolism via NRF2-PARP1 axis (Elfar et al., NAR 2024)",
    keyPapers: [
      "Elfar et al., Nucleic Acids Research (2024) -NRF2-PARP1 axis",
      "Aning & Cheok, J. Mol. Cell Biol. (2019) -drugging in the absence of p53",
      "Kumar et al., Nature Communications (2018) -mitochondrial uncoupling in p53-defective cancers",
      "Kumar & Cheok, Scientific Reports (2017) -RIF1 SUMOylation and genomic stability",
      "Yeo et al., Cell Reports (2016) -transcription-replication conflicts",
    ],
  },
  {
    id: "novel-therapeutics",
    title: "Novel Therapeutics",
    description: `We develop novel therapeutics through in silico and structure-activity relationship (SAR) studies. Our approach combines computational drug discovery with experimental validation, including drug repurposing strategies and combination therapies that exploit synthetic lethal interactions in cancer cells. We have demonstrated the potential of targeting multiple cancer signalling nodes -including p53 reactivation, NF-κB pathway inhibition, and cell-cycle kinase modulation -to selectively kill cancer cells while sparing normal tissue.`,
    image: "/images/cell-reports-2016-graphical-abstract.jpg",
    imageAlt: "Graphical abstract - p53 maintains genomic stability by preventing transcription-replication conflicts, with synthetic lethality via TOP2 poisons (Yeo et al., Cell Reports 2016)",
    keyPapers: [
      "Yeo et al., Cell Reports (2016) -synthetic lethality via TOP2 poisons in p53-deficient cancers",
      "Ngai et al., Int. J. Mol. Sci. (2021) -nitro-deficient niclosamide SAR study",
      "Kong et al., Nature Communications (2020) -targeting codon 158 p53-mutant cancers",
      "Cheok et al., Nature Reviews Clinical Oncology (2011) -translating p53 to the clinic",
      "Cheok et al., Cell Death & Differentiation (2010) -nutlin + VX-680 combination",
    ],
  },
  {
    id: "molecular-signatures",
    title: "Molecular Signatures & Drug Response",
    description: `We identify molecular signatures that predict drug response through gene network analysis. By integrating genomics, transcriptomics, and computational approaches, we aim to understand why certain tumours respond to specific therapies and to develop predictive biomarkers that can guide treatment decisions. This work bridges fundamental cancer biology with clinical application, enabling more precise and personalised therapeutic strategies.`,
    keyPapers: [
      "Goh et al., Int. J. Mol. Sci. (2025) -molecular cues in endometriosis and ovarian cancer",
      "Cheok, Cell Cycle (2012) -protecting normal cells from chemotherapy",
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Research</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            We identify bottlenecks in cancer signalling pathways and design new
            therapeutic targets -focusing on DNA damage and metabolic pathways.
          </p>
        </div>
      </section>

      {/* Research areas */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {areas.map((area, i) => (
            <article
              key={area.id}
              id={area.id}
              className="scroll-mt-20 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 p-8 rounded-xl border border-border bg-white hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-accent bg-accent-light px-3 py-1 rounded-full uppercase tracking-wider">
                    Area {i + 1}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    {area.title}
                  </h2>
                </div>
                <p className="text-muted leading-relaxed whitespace-pre-line">
                  {area.description}
                </p>
                {"image" in area && area.image && (
                  <div className="mt-6">
                    <Image
                      src={area.image}
                      alt={("imageAlt" in area && area.imageAlt as string) || ""}
                      width={600}
                      height={300}
                      className="rounded-lg border border-border w-full"
                    />
                    <p className="text-xs text-muted mt-2 italic">
                      {("imageAlt" in area && area.imageAlt as string) || ""}
                    </p>
                  </div>
                )}
              </div>
              <div className="lg:border-l lg:border-border lg:pl-6">
                <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">
                  Key Publications
                </h3>
                <ul className="space-y-2">
                  {area.keyPapers.map((paper) => (
                    <li
                      key={paper}
                      className="text-sm text-muted leading-snug pl-3 border-l-2 border-accent/30"
                    >
                      {paper}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-muted-bg border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Approach &amp; Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "High-Throughput Screens",
                text: "Drug and RNAi screens to identify molecular vulnerabilities in cancer cells at scale.",
              },
              {
                title: "In Silico & SAR Studies",
                text: "Computational drug discovery and structure-activity relationship studies for novel therapeutic development.",
              },
              {
                title: "Genomics & Sequencing",
                text: "Next-generation sequencing and multi-omics integration to dissect signalling pathway defects.",
              },
              {
                title: "Animal Models",
                text: "In vivo validation of therapeutic strategies using preclinical mouse models of cancer.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-lg border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Specialist Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Single-molecule DNA fiber labeling for tracking of DNA replication ex vivo and in vivo",
              "Study of Mitochondrial Superoxide/reactive oxygen species and cellular ROS status",
              "Study of calcium fluxes in cells using live cell imaging and molecular inhibitors/activators",
              "Monitoring of mitochondrial and cellular respiration",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-lg border border-border bg-white"
              >
                <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-accent" />
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
