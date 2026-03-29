import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the CCF Lab at IMCB A*STAR and NUS - locations, profiles, and how to join.",
};

const profiles = [
  {
    label: "A*STAR Researcher Profile",
    href: "https://research.a-star.edu.sg/researcher/chit-fang-cheok/",
  },
  {
    label: "NUS Pathology Profile",
    href: "https://medicine.nus.edu.sg/patho/team-member/cheok-chit-fang/",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=-6NQTF8AAAAJ&hl=en",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Interested in our research? Get in touch.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info & Location cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border bg-white">
              <h2 className="text-lg font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted">Email</p>
                  <a
                    href="mailto:patcfc@nus.edu.sg"
                    className="text-accent hover:text-primary font-medium transition-colors"
                  >
                    patcfc@nus.edu.sg
                  </a>
                </div>
                <div>
                  <p className="text-muted">Telephone</p>
                  <a
                    href="tel:+6567727843"
                    className="text-accent hover:text-primary font-medium transition-colors"
                  >
                    +65 6772 7843
                  </a>
                </div>
                <div>
                  <p className="text-muted">ORCID</p>
                  <a
                    href="https://orcid.org/0000-0001-8242-3995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary font-medium transition-colors"
                  >
                    0000-0001-8242-3995
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-white">
              <h2 className="text-lg font-bold text-foreground mb-1">
                NUS Pathology
              </h2>
              <p className="text-sm text-accent font-medium mb-3">
                Primary Lab
              </p>
              <address className="not-italic text-sm text-muted leading-relaxed">
                Department of Pathology
                <br />
                Yong Loo Lin School of Medicine
                <br />
                National University Hospital
                <br />
                Main Building, Lobby G, Level 3
                <br />
                5 Lower Kent Ridge Road
                <br />
                Singapore 119074
              </address>
            </div>

            <div className="p-6 rounded-xl border border-border bg-white">
              <h2 className="text-lg font-bold text-foreground mb-1">
                IMCB, A*STAR
              </h2>
              <p className="text-sm text-accent font-medium mb-3">
                Joint Lab
              </p>
              <address className="not-italic text-sm text-muted leading-relaxed">
                Institute of Molecular and Cell Biology
                <br />
                Agency for Science, Technology and Research (A*STAR)
                <br />
                61 Biopolis Drive, Proteos
                <br />
                Singapore 138673
              </address>
            </div>

            {/* Profiles */}
            <div className="p-6 rounded-xl border border-border bg-white">
              <h2 className="text-lg font-bold text-foreground mb-3">
                Online Profiles
              </h2>
              <ul className="space-y-2">
                {profiles.map((p) => (
                  <li key={p.label}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-primary font-medium transition-colors"
                    >
                      {p.label} &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Join Us */}
          <div className="space-y-6">
            <div className="p-8 rounded-xl border border-accent/30 bg-accent-light/20">
              <h2 className="text-xl font-bold text-primary mb-4">
                Join Our Lab
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                We are always looking for passionate and motivated individuals
                to join our team. We welcome applications from:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    role: "Postdoctoral Fellows",
                    desc: "Researchers with a strong background in cancer biology, molecular biology, or related fields.",
                  },
                  {
                    role: "PhD Students",
                    desc: "Candidates interested in pursuing graduate research in cancer signalling and therapeutics.",
                  },
                  {
                    role: "Research Assistants",
                    desc: "Recent graduates looking for research experience before pursuing further studies.",
                  },
                  {
                    role: "Undergraduate Interns",
                    desc: "Final-year project students or summer interns from local and international universities.",
                  },
                ].map((item) => (
                  <li
                    key={item.role}
                    className="pl-4 border-l-2 border-accent/40"
                  >
                    <p className="font-medium text-foreground text-sm">
                      {item.role}
                    </p>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted mt-6">
                Please send your CV and a brief statement of research interests
                to Dr. Cheok via the NUS or A*STAR profile pages linked on
                this page.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-border bg-white">
              <h2 className="text-lg font-bold text-foreground mb-4">
                For Collaborations
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                We are open to collaborations with academic and industry
                partners. If you are interested in working with us on cancer
                therapeutics, drug screening, or p53 biology, please reach out
                through the institutional profiles above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
