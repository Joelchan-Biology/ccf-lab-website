import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected publications from the CCF Lab — cancer signalling, p53 biology, and therapeutic discovery.",
};

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  highlight?: boolean;
  note?: string;
};

const publications: Publication[] = [
  // ── Recent (2022–2025) ──
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
    highlight: true,
  },
  {
    title:
      "Engineering an autonomous VH domain to modulate intracellular pathways and to interrogate the eIF4F complex",
    authors: "Frosi Y, Lin YC, Jiang S, ... Cheok CF et al.",
    journal: "Nature Communications",
    year: 2022,
    doi: "10.1038/s41467-022-32463-1",
  },

  // ── Featured / Highlighted ──
  {
    title:
      "Targeting codon 158 p53-mutant cancers via the induction of p53 acetylation",
    authors: "Kong LR, Ong RW, Tan TZ, ... Cheok CF et al.",
    journal: "Nature Communications",
    year: 2020,
    doi: "10.1038/s41467-020-15608-y",
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
      "Exploiting the p53 pathway for therapy",
    authors: "Cheok CF, Lane DP",
    journal: "Cold Spring Harbor Perspectives in Medicine",
    year: 2017,
    doi: "10.1101/cshperspect.a026310",
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
  },
  {
    title: "Translating p53 into the clinic",
    authors: "Cheok CF, Verma CS, Baselga J, Lane DP",
    journal: "Nature Reviews Clinical Oncology",
    year: 2011,
    doi: "10.1038/nrclinonc.2010.174",
    highlight: true,
    note: "471 citations",
  },
  {
    title: "p53-based cancer therapy",
    authors: "Lane DP, Cheok CF, Lain S",
    journal: "Cold Spring Harbor Perspectives in Biology",
    year: 2010,
    doi: "10.1101/cshperspect.a001222",
    note: "361 citations",
  },
  {
    title:
      "Combination of nutlin-3 and VX-680 selectively targets p53 mutant cells with reversible effects on cells expressing wild-type p53",
    authors: "Cheok CF, Kua N, Kaldis P, Lane DP",
    journal: "Cell Death & Differentiation",
    year: 2010,
    doi: "10.1038/cdd.2010.26",
  },
  {
    title:
      "WIP1 phosphatase is a negative regulator of NF-κB signalling",
    authors: "Chew J, Biswas S, Shreeram S, ... Cheok CF, ... Lane DP",
    journal: "Nature Cell Biology",
    year: 2009,
    doi: "10.1038/ncb1873",
  },
  {
    title:
      "Cyclin-dependent kinase inhibitors sensitize tumor cells to nutlin-induced apoptosis",
    authors: "Cheok CF, Dey A, Lane DP",
    journal: "Molecular Cancer Research",
    year: 2007,
    doi: "10.1158/1541-7786.MCR-07-0161",
  },
  {
    title:
      "The Bloom's syndrome helicase promotes the annealing of complementary single-stranded DNA",
    authors: "Cheok CF, Wu L, Garcia PL, Janscak P, Hickson ID",
    journal: "Nucleic Acids Research",
    year: 2005,
    doi: "10.1093/nar/gki712",
    note: "181 citations",
  },
];

export default function PublicationsPage() {
  const years = [...new Set(publications.map((p) => p.year))].sort(
    (a, b) => b - a
  );

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Publications</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Selected publications from the lab. For the full list, visit our{" "}
            <a
              href="https://scholar.google.com/citations?user=-6NQTF8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white hover:text-white/90"
            >
              Google Scholar
            </a>{" "}
            profile.
          </p>
          <div className="mt-4 flex gap-6 text-sm text-white/60">
            <span>
              <strong className="text-white">2,816</strong> total citations
            </span>
            <span>
              <strong className="text-white">22</strong> h-index
            </span>
            <span>
              <strong className="text-white">29</strong> i10-index
            </span>
          </div>
        </div>
      </section>

      {/* Publications list */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {years.map((year) => {
          const pubs = publications.filter((p) => p.year === year);
          return (
            <div key={year} className="mb-12">
              <h2 className="text-xl font-bold text-primary mb-4 sticky top-16 bg-white/95 backdrop-blur py-2 z-10 border-b border-border">
                {year}
              </h2>
              <div className="space-y-4">
                {pubs.map((pub) => (
                  <article
                    key={pub.doi || pub.title}
                    className={`p-5 rounded-lg border transition-colors ${
                      pub.highlight
                        ? "border-accent/40 bg-accent-light/30"
                        : "border-border bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {pub.highlight && (
                        <span className="shrink-0 mt-1 w-2 h-2 rounded-full bg-accent" />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground leading-snug">
                          {pub.doi ? (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-accent transition-colors"
                            >
                              {pub.title}
                            </a>
                          ) : (
                            pub.title
                          )}
                        </h3>
                        <p className="text-sm text-muted mt-1">
                          {pub.authors}
                        </p>
                        <p className="text-sm mt-1">
                          <span className="italic text-muted">
                            {pub.journal}
                          </span>
                          {pub.note && (
                            <span className="ml-2 text-xs text-accent font-medium bg-accent-light px-2 py-0.5 rounded-full">
                              {pub.note}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
