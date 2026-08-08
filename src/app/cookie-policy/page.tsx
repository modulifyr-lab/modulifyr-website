import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Modulifyr",
  description: "Modulifyr's cookie policy — what cookies we use, why, and how to control them.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

const sections = [
  {
    title: "1. What Cookies Are",
    body: [
      {
        heading: "Definition",
        text: "Small text files stored on your device when you visit our website. They let a site remember information between visits.",
      },
      {
        heading: "Scope",
        text: "This policy covers cookies and equivalent local storage used on modulifyr.com. It should be read alongside our Privacy Policy.",
      },
    ],
  },
  {
    title: "2. Essential Cookies We Use",
    body: [
      {
        heading: "Consent Record",
        text: "We store your cookie consent choice (accepted or denied) in your browser's local storage under the key modulifyr_cookie_consent, so we don't ask again on every visit.",
      },
      {
        heading: "Theme Preference",
        text: "Your light/dark mode selection is stored locally so the site loads in your preferred appearance.",
      },
      {
        heading: "Region Selection",
        text: "Your selected pricing region (Nepal/international) is stored in a cookie so pricing displays correctly on return visits.",
      },
      {
        heading: "Why These Are Exempt",
        text: "These are strictly necessary for the site to function as intended and are not subject to opt-out under GDPR or CCPA.",
      },
    ],
  },
  {
    title: "3. No Advertising or Tracking Cookies",
    body: [
      {
        heading: "No Ad Tech",
        text: "We do not use advertising cookies, retargeting pixels, or third-party marketing trackers of any kind.",
      },
      {
        heading: "No Cross-Site Tracking",
        text: "We do not sell or share cookie data with data brokers or advertising networks.",
      },
    ],
  },
  {
    title: "4. Analytics",
    body: [
      {
        heading: "Current Use",
        text: "If we enable analytics in the future, tools will be configured to anonymize IP addresses and respect Do Not Track signals, consistent with our Privacy Policy.",
      },
      {
        heading: "Consent-Gated",
        text: "Analytics cookies, if introduced, will only load after you accept via the cookie banner.",
      },
    ],
  },
  {
    title: "5. Your Consent Choices",
    body: [
      {
        heading: "The Banner",
        text: "On your first visit, a banner lets you Accept or Deny non-essential cookies. Your choice is saved and respected on future visits.",
      },
      {
        heading: "Changing Your Mind",
        text: "To change your choice, clear modulifyr_cookie_consent from your browser's local storage (see Section 6) and reload the page — the banner will reappear.",
      },
    ],
  },
  {
    title: "6. Managing or Clearing Cookies",
    body: [
      {
        heading: "Browser Settings",
        text: "Most browsers let you view, delete, or block cookies and local storage through their privacy or security settings. See your browser's help documentation: Chrome, Firefox, Safari, Edge, or Opera.",
      },
      {
        heading: "Impact of Blocking",
        text: "Blocking essential cookies may cause preferences like theme or region to reset on each visit. It will not affect your ability to browse the site.",
      },
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      {
        heading: "Updates",
        text: "We may update this Cookie Policy as our tooling changes. Material changes will be reflected with an updated date at the top of this page.",
      },
    ],
  },
  {
    title: "8. Contact",
    body: [
      { heading: "Email", text: "contact@modulifyr.com" },
      {
        heading: "Address",
        text: "Modulifyr Enterprise Pvt. Ltd., Birtamode, Ward 1, Gauri Tol, Jhapa, Nepal",
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="flex w-full flex-col">
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-brand-teal mb-4 block text-xs font-bold tracking-widest uppercase">
              Legal
            </span>
            <h1 className="font-heading mb-4 text-4xl font-bold md:text-5xl">Cookie Policy</h1>
            <p className="text-text-muted text-lg leading-relaxed">
              What cookies Modulifyr uses, why, and how to control them.
            </p>
            <p className="text-text-muted mt-3 text-sm">Last Updated: August 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-4">
            {/* TOC */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-text-muted mb-4 text-xs font-bold tracking-widest uppercase">
                  Contents
                </p>
                <nav className="flex flex-col gap-1">
                  {sections.map((s, i) => (
                    <a
                      key={i}
                      href={`#s${i}`}
                      className="text-text-secondary hover:text-brand-orange hover:border-brand-orange border-l-2 border-transparent py-1.5 pl-3 text-sm transition-colors"
                    >
                      {s.title.replace(/^\d+\. /, "")}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="border-border-base rounded-3xl border bg-white p-8 md:p-12">
                <p className="text-text-secondary border-border-base mb-10 border-b pb-8 leading-relaxed">
                  This Cookie Policy explains how Modulifyr Enterprise Pvt. Ltd. ("we", "us", "our")
                  uses cookies and similar local storage technologies on{" "}
                  <span className="text-brand-teal font-medium">modulifyr.com</span>. It supplements
                  our Privacy Policy and should be read together with it.
                </p>

                <div className="space-y-10">
                  {sections.map((section, i) => (
                    <div key={i} id={`s${i}`} className="scroll-mt-28">
                      <h2 className="font-heading text-brand-navy mb-5 text-xl font-bold">
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {section.body.map((item, j) => (
                          <div key={j} className="flex gap-3">
                            <div className="bg-brand-orange mt-2 h-2 w-2 shrink-0 rounded-full" />
                            <div>
                              <span className="text-brand-navy text-sm font-semibold">
                                {item.heading}:{" "}
                              </span>
                              <span className="text-text-secondary text-sm leading-relaxed">
                                {item.text}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {i < sections.length - 1 && (
                        <div className="border-border-base mt-8 border-b" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="text-brand-teal text-sm font-medium hover:underline"
                >
                  Privacy Policy →
                </Link>
                <Link href="/terms" className="text-brand-teal text-sm font-medium hover:underline">
                  Terms of Service →
                </Link>
                <Link
                  href="/contact"
                  className="text-brand-teal text-sm font-medium hover:underline"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
