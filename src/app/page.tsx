import Link from "next/link";

const highlights = [
  {
    title: "Molecular Vulnerabilities in Cancer",
    description:
      "Identifying molecular vulnerabilities in cancers through DNA damage response networks and cellular metabolism.",
    href: "/research",
  },
  {
    title: "Novel Therapeutics",
    description:
      "Developing novel therapeutics through in silico and structure-activity relationship (SAR) studies.",
    href: "/research",
  },
  {
    title: "Molecular Signatures & Drug Response",
    description:
      "Identifying molecular signatures predicting drug response through gene network analysis.",
    href: "/research",
  },
];

const recentWork = [
  {
    year: "2024",
    title:
      "p53-dependent crosstalk between DNA replication integrity and redox metabolism mediated through a NRF2-PARP1 axis",
    journal: "Nucleic Acids Research",
  },
  {
    year: "2024",
    title:
      "PHF2 regulates genome topology and DNA replication in neural stem cells via cohesin",
    journal: "Nucleic Acids Research",
  },
  {
    year: "2025",
    title:
      "Cell migration in endometriosis responds to omentum-derived molecular cues similar to ovarian cancer",
    journal: "Int. J. Mol. Sci.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            IMCB, A*STAR &amp; NUS Pathology
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Impacting Science
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            We identify bottlenecks in cancer signalling pathways and design new
            therapeutic targets that counteract the growth of cancer cells —
            focusing on drug and RNAi therapeutics in the DNA damage and
            metabolic pathways.
          </p>
          <p className="mt-4 text-base text-white/70 max-w-xl">
            We believe in empowering the individual, and growing our next
            generation of scientists.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/research"
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Our Research
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center px-6 py-3 border border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
            >
              Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Research highlights */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Research Highlights
        </h2>
        <p className="text-muted mb-10 max-w-xl">
          Our work spans fundamental cancer biology to translational
          therapeutic development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group p-6 rounded-xl border border-border bg-white hover:shadow-lg hover:border-accent/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent publications */}
      <section className="bg-muted-bg border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Recent Work
              </h2>
              <p className="text-muted">
                Latest publications from the lab
              </p>
            </div>
            <Link
              href="/publications"
              className="hidden sm:inline-flex text-sm font-medium text-accent hover:text-primary transition-colors"
            >
              View all publications &rarr;
            </Link>
          </div>
          <div className="space-y-4">
            {recentWork.map((pub) => (
              <div
                key={pub.title}
                className="flex items-start gap-4 p-5 bg-white rounded-lg border border-border"
              >
                <span className="shrink-0 text-sm font-bold text-accent bg-accent-light px-3 py-1 rounded-full">
                  {pub.year}
                </span>
                <div>
                  <p className="font-medium text-foreground leading-snug">
                    {pub.title}
                  </p>
                  <p className="text-sm text-muted mt-1 italic">
                    {pub.journal}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/publications"
            className="sm:hidden mt-6 inline-flex text-sm font-medium text-accent hover:text-primary transition-colors"
          >
            View all publications &rarr;
          </Link>
        </div>
      </section>

      {/* Collaborative Opportunities */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Collaborative Opportunities
        </h2>
        <p className="text-muted mb-8 max-w-2xl">
          We are open to collaborative opportunities in:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl border border-border bg-white">
            <h3 className="font-semibold text-foreground mb-2">
              DNA Replication &amp; Damage Responses
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              DNA replication and damage responses in cells for therapeutic
              exploitation.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-white">
            <h3 className="font-semibold text-foreground mb-2">
              Mitochondrial Uncoupling
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Manipulation of mitochondrial uncoupling in cells for
              neurodegenerative diseases and cancers.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-4">
          Technical Expertise
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

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Lab video */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          About Our Lab
        </h2>
        <p className="text-muted mb-8 max-w-xl">
          Get a glimpse into our research and lab culture.
        </p>
        <div className="max-w-3xl">
          <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GTYJ4NspHNk"
              title="CCF Lab"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
