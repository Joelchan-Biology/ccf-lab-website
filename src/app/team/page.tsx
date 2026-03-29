import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the CCF Lab team - researchers and students at IMCB A*STAR and NUS.",
};

const pi = {
  name: "Chit Fang Cheok",
  title: "Assistant Professor & Principal Investigator",
  affiliations: [
    "Research Director (Scientific), Department of Pathology, NUS",
    "Principal Investigator, NUS",
    "Joint Principal Investigator, IMCB, A*STAR",
  ],
  education: [
    { degree: "DPhil", institution: "University of Oxford" },
    { degree: "B.Sc (Hons)", institution: "Imperial College London" },
  ],
  bio: `Dr. Cheok leads a cancer biology research group at IMCB, A*STAR and NUS. Her research centres on identifying molecular vulnerabilities in cancer signalling pathways and developing novel therapeutic strategies.

She completed her doctoral research with the Molecular Oncology group at Cancer Research UK (Oxford), studying Bloom's syndrome and identifying a novel activity of the BLM helicase in DNA repair. She then undertook postdoctoral training at IMCB and the A*STAR p53Lab under Sir David Lane, where she established her expertise in p53 biology and cancer therapeutics.

Her lab combines high-throughput screening, genomics, and animal model studies to translate fundamental discoveries into clinical therapeutic strategies. The lab has published extensively in journals including Nature Communications, Cell Reports, Nucleic Acids Research, and Nature Reviews Clinical Oncology.`,
  links: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=-6NQTF8AAAAJ&hl=en",
    },
    {
      label: "A*STAR Profile",
      href: "https://research.a-star.edu.sg/researcher/chit-fang-cheok/",
    },
    {
      label: "NUS Pathology",
      href: "https://medicine.nus.edu.sg/patho/team-member/cheok-chit-fang/",
    },
  ],
};

const members = [
  {
    category: "Graduate Students",
    people: [
      { name: "Fang Zi Yu", role: "Graduate Student" },
      { name: "Lu Si Xiao", role: "Graduate Student" },
      { name: "Lin Xinyi", role: "Graduate Student" },
    ],
  },
];

const alumni = [
  { name: "Gamal Ahmed Elfar", current: "Research Fellow, Fox Chase Cancer Center, Temple University" },
  { name: "Tsz Wai Ngai", current: "Research Fellow, NUS Yong Loo Lin School of Medicine" },
  { name: "Obed Akwasi Aning", current: "Postdoc, Chalmers University of Technology" },
  { name: "Joel Chan Wai Kit", current: "PhD Student, NYU" },
  { name: "Pearlyn Yeo", current: "PhD Student, Nanyang Technological University" },
  { name: "Shang Hong Sim", current: "Machine Learning Engineer, Oumi" },
  { name: "Ramesh Kumar", current: "Senior Scientist, Cancer Signaling & Therapies, IMCB" },
  { name: "Constance Qiao Xin Yeo", current: "Scientist, Merck & Co." },
];

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold">Our Team</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            We believe in empowering the individual, and growing our next
            generation of scientists.
          </p>
        </div>
      </section>

      {/* PI section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="p-8 rounded-xl border border-border bg-white">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="shrink-0">
              <Image
                src="/images/cheok-chit-fang.jpg"
                alt="Cheok Chit Fang"
                width={160}
                height={192}
                className="w-40 h-48 rounded-lg object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">
                {pi.name}
              </h2>
              <p className="text-accent font-medium mt-1">{pi.title}</p>

              <div className="mt-3 space-y-1">
                {pi.affiliations.map((aff) => (
                  <p key={aff} className="text-sm text-muted">
                    {aff}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {pi.education.map((edu) => (
                  <span
                    key={edu.degree}
                    className="text-xs bg-muted-bg px-3 py-1 rounded-full text-muted border border-border"
                  >
                    {edu.degree}, {edu.institution}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-muted leading-relaxed whitespace-pre-line text-sm">
                {pi.bio}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {pi.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-primary font-medium transition-colors"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current members */}
      <section className="bg-muted-bg border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Current Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-bold text-muted uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.people.map((person) => (
                    <div
                      key={person.name}
                      className="p-4 bg-white rounded-lg border border-border"
                    >
                      <p className="font-medium text-foreground">
                        {person.name}
                      </p>
                      <p className="text-sm text-muted">{person.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Lab Alumni
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {alumni.map((person) => (
            <div
              key={person.name}
              className="p-4 rounded-lg border border-border"
            >
              <p className="font-medium text-foreground text-sm">{person.name}</p>
              <p className="text-sm text-muted mt-1">{person.current}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
