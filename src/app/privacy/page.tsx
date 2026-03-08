import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Modulifyr",
    description: "Modulifyr's privacy policy — how we collect, use, and protect your personal information.",
};

const sections = [
    {
        title: "1. Information We Collect",
        body: [
            { heading: "Contact & Inquiry Data", text: "Name, company, email, phone, and project details submitted through our proposal request, contact, or job application forms." },
            { heading: "Usage Data", text: "Technical information about how you access our website including IP address, browser type, device type, pages visited, and time on site. This is collected via standard web analytics." },
            { heading: "Communication Data", text: "Any content you share with us through email, forms, or direct channels. We do not collect payment information directly — all financial transactions are handled through secure third-party processors." },
        ]
    },
    {
        title: "2. How We Use Your Information",
        body: [
            { heading: "Proposal & Inquiry Responses", text: "Form submissions are used solely to evaluate project fit and respond to your request. We do not use this data for marketing without consent." },
            { heading: "Job Application Processing", text: "Application data is used to assess candidates for open positions at Modulifyr only." },
            { heading: "Service Improvement", text: "Aggregated, anonymized usage data helps us improve our website experience." },
            { heading: "Communications", text: "With your consent, we may send project updates or engineering insights. You may unsubscribe at any time." },
            { heading: "No Data Sales", text: "We do not sell, rent, or trade your personal data to third parties for any purpose." },
        ]
    },
    {
        title: "3. Data Storage & Security",
        body: [
            { heading: "Encryption", text: "All data submitted through our forms is processed through TLS/SSL encrypted channels." },
            { heading: "Third-Party Platforms", text: "We use Notion (CRM), Resend (email), Vercel (hosting), and Discord (internal alerts). Each platform complies with international data protection standards." },
            { heading: "Access Control", text: "Personal data access is restricted to team members who require it to respond to your inquiry." },
            { heading: "Security Reviews", text: "We conduct regular security reviews of our toolchain and data integrations." },
        ]
    },
    {
        title: "4. Cookies",
        body: [
            { heading: "Essential Only", text: "We use minimal cookies required for core functionality such as theme preferences (light/dark mode)." },
            { heading: "No Advertising Cookies", text: "We do not use tracking cookies or third-party advertising cookies of any kind." },
            { heading: "Analytics", text: "If analytics tools are used, they are configured to anonymize IP addresses and respect Do Not Track signals." },
        ]
    },
    {
        title: "5. Your Rights",
        body: [
            { heading: "Access", text: "Request a copy of the personal data we hold about you." },
            { heading: "Correction", text: "Request correction of inaccurate or incomplete data." },
            { heading: "Deletion", text: "Request deletion of your personal data, subject to legal obligations." },
            { heading: "Portability", text: "Request your data in a portable, machine-readable format." },
            { heading: "Objection", text: "Object to certain types of data processing. Contact us at contact@modulifyr.com to exercise any of these rights. We will respond within 30 days." },
        ]
    },
    {
        title: "6. Data Retention",
        body: [
            { heading: "Proposal & Inquiry Data", text: "Retained for up to 2 years for business continuity, unless you request earlier deletion." },
            { heading: "Job Applications", text: "Retained for up to 1 year. Unsuccessful applications are deleted after this period." },
            { heading: "Project Communication", text: "Retained for the duration of any active engagement plus 1 year." },
            { heading: "Analytics", text: "Anonymized and aggregated data retained indefinitely." },
        ]
    },
    {
        title: "7. Children's Privacy",
        body: [
            { heading: "Age Restriction", text: "Modulifyr's services are intended for businesses and professionals. We do not knowingly collect personal information from individuals under 18. Contact us immediately if you believe a minor has submitted data." },
        ]
    },
    {
        title: "8. Changes to This Policy",
        body: [
            { heading: "Updates", text: "We may update this Privacy Policy periodically. Material changes will be noted with an updated date at the top of this page. Continued use of our website constitutes acceptance of any updated policy." },
        ]
    },
    {
        title: "9. Contact",
        body: [
            { heading: "Email", text: "contact@modulifyr.com" },
            { heading: "Address", text: "Modulifyr Engineering Center, Kathmandu, Nepal" },
            { heading: "Response Time", text: "Within 5 business days." },
        ]
    }
];

export default function PrivacyPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-brand-navy text-white py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-brand-teal font-bold tracking-widest uppercase text-xs mb-4 block">Legal</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
                        <p className="text-text-muted text-lg leading-relaxed">How Modulifyr collects, uses, and protects your information.</p>
                        <p className="text-text-muted text-sm mt-3">Last Updated: March 2026</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-bg-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

                        {/* TOC */}
                        <div className="hidden lg:block">
                            <div className="sticky top-28">
                                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Contents</p>
                                <nav className="flex flex-col gap-1">
                                    {sections.map((s, i) => (
                                        <a key={i} href={`#s${i}`}
                                            className="text-sm text-text-secondary hover:text-brand-orange transition-colors py-1.5 border-l-2 border-transparent hover:border-brand-orange pl-3">
                                            {s.title.replace(/^\d+\. /, "")}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white border border-border-base rounded-3xl p-8 md:p-12">
                                <p className="text-text-secondary leading-relaxed mb-10 pb-8 border-b border-border-base">
                                    Modulifyr ("we", "us", "our") is committed to protecting your privacy. This policy applies to all information collected through our website at <span className="text-brand-teal font-medium">modulifyr.vercel.app</span> and any related services or communications.
                                </p>

                                <div className="space-y-10">
                                    {sections.map((section, i) => (
                                        <div key={i} id={`s${i}`} className="scroll-mt-28">
                                            <h2 className="text-xl font-heading font-bold text-brand-navy mb-5">{section.title}</h2>
                                            <div className="space-y-4">
                                                {section.body.map((item, j) => (
                                                    <div key={j} className="flex gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                                                        <div>
                                                            <span className="font-semibold text-brand-navy text-sm">{item.heading}: </span>
                                                            <span className="text-text-secondary text-sm leading-relaxed">{item.text}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {i < sections.length - 1 && <div className="mt-8 border-b border-border-base" />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <Link href="/terms" className="text-sm text-brand-teal hover:underline font-medium">Terms of Service →</Link>
                                <Link href="/contact" className="text-sm text-brand-teal hover:underline font-medium">Contact Us →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}