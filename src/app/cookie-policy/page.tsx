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
    title: "1. What Storage We Use",
    body: [
      {
        heading: "Definition",
        text: "Small data items stored on your device via browser cookies or local storage when you visit our website.",
      },
      {
        heading: "Scope",
        text: "This policy covers functional browser storage and analytics tags on modulifyr.com. It should be read alongside our Privacy Policy.",
      },
    ],
  },
  {
    title: "2. Functional Storage",
    body: [
      {
        heading: "Theme Preference",
        text: "Your colour theme preference (light/dark mode) is saved in local storage via next-themes so the site loads in your chosen appearance.",
      },
      {
        heading: "Region Choice",
        text: "Your selected pricing region is saved in a cookie named modulifyr_region and in local storage for one year so pricing displays in your preferred currency.",
      },
      {
        heading: "Language Preference",
        text: "Your language choice is saved in local storage under modulifyr_lang to render content in your chosen language.",
      },
      {
        heading: "Purpose",
        text: "This functional storage provides the exact features you select while navigating the site.",
      },
    ],
  },
  {
    title: "3. Analytics",
    body: [
      {
        heading: "Google Tag Manager",
        text: "We use Google Tag Manager to measure site usage, including pages viewed, traffic sources, device type, and browser type when a page opens.",
      },
      {
        heading: "Provider & Policy",
        text: "Google provides this analytics measurement capability. You can learn more by visiting Google's Privacy Policy at https://policies.google.com/privacy.",
      },
      {
        heading: "Browser Control",
        text: "You can block analytics scripts at any time using your browser settings or a content-blocking extension.",
      },
    ],
  },
  {
    title: "4. No Advertising or Chat Tools",
    body: [
      {
        heading: "No Ad Tech",
        text: "We do not use advertising tools, retargeting pixels, or marketing trackers.",
      },
      {
        heading: "No Chat Widgets",
        text: "We do not run third-party chat widgets on the site.",
      },
    ],
  },
  {
    title: "5. Managing Storage",
    body: [
      {
        heading: "Browser Settings",
        text: "You can view, manage, or clear cookies and local storage through your browser settings at any time.",
      },
      {
        heading: "Impact",
        text: "Clearing or disabling local storage will simply reset your theme or region preferences to default values on future visits.",
      },
    ],
  },
  {
    title: "6. Changes to This Policy",
    body: [
      {
        heading: "Updates",
        text: "We may update this policy as our infrastructure evolves. Material changes will be noted with an updated date.",
      },
    ],
  },
  {
    title: "7. Contact",
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
            <p className="text-text-muted mt-3 text-sm">Last Updated: October 2026</p>
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
                      className="text-text-secondary hover:text-[#2D738D] hover:border-[#2D738D] border-l-2 border-transparent py-1.5 pl-3 text-sm transition-colors"
                    >
                      {s.title.replace(/^\d+\. /, "")}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="border-border-base rounded-3xl border bg-bg-alt p-8 md:p-12">
                <p className="text-text-secondary border-border-base mb-10 border-b pb-8 leading-relaxed">
                  This Cookie Policy explains how Modulifyr Enterprise Pvt. Ltd. ("we", "us", "our")
                  uses cookies and similar local storage technologies on{" "}
                  <span className="text-brand-teal font-medium">modulifyr.com</span>. It supplements
                  our Privacy Policy and should be read together with it.
                </p>

                <div className="space-y-10">
                  {sections.map((section, i) => (
                    <div key={i} id={`s${i}`} className="scroll-mt-28">
                      <h2 className="font-heading text-foreground mb-5 text-xl font-bold">
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {section.body.map((item, j) => (
                          <div key={j} className="flex gap-3">
                            <div className="bg-[#2D738D] mt-2 h-2 w-2 shrink-0 rounded-full" />
                            <div>
                              <span className="text-foreground text-sm font-semibold">
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
