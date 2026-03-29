import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">CCF Lab</h3>
            <p className="text-sm leading-relaxed">
              Cancer signalling, p53 biology &amp; therapeutic discovery
            </p>
            <p className="text-sm mt-3 leading-relaxed">
              Department of Pathology
              <br />
              Yong Loo Lin School of Medicine
              <br />
              National University of Singapore
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/research"
                  className="hover:text-white transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="hover:text-white transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* External links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Profiles
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://medicine.nus.edu.sg/patho/team-member/cheok-chit-fang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  NUS Pathology
                </a>
              </li>
              <li>
                <a
                  href="https://research.a-star.edu.sg/researcher/chit-fang-cheok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  A*STAR Profile
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/citations?user=-6NQTF8AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Google Scholar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} CCF Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
