import type { Metadata } from "next";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected publications from the CCF Lab - cancer signalling, p53 biology, and therapeutic discovery.",
};

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
          <div className="mt-4 text-sm text-white/60">
            See{" "}
            <a
              href="https://scholar.google.com/citations?user=-6NQTF8AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white/80 hover:text-white"
            >
              Google Scholar
            </a>{" "}
            for up-to-date citation metrics.
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
