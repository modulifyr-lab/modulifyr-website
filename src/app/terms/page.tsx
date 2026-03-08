import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Modulifyr",
    description: "Modulifyr's terms of service governing website use and engagement with our software development services.",
};

const sections = [
    {
        title: "1. Acceptance of Terms",
        body: "By accessing modulifyr.vercel.app or engaging with any Modulifyr services, you agree to these Terms of Service. If you do not agree, please do not use our site. These Terms apply to all visitors, clients, and job applicants."
    },
    {
        title: "2. Services Description",
        body: "Modulifyr provides custom software development, system architecture, integrations, modernization, infrastructure, and data engineering services. The specific scope, deliverables, timelines, and pricing of any engagement are governed by a separately signed Statement of Work (SOW). These Terms govern general website use and interactions."
    },
    {
        title: "3. Proposals & Engagements",
        body: "Submitting a proposal request does not constitute a binding agreement. A formal engagement begins only when both parties have signed a Statement of Work and any applicable NDA. All proposals and estimates are indicative and subject to change based on final scoping. Modulifyr reserves the right to decline any project engagement at its sole discretion."
    },
    {
        title: "4. Intellectual Property",
        body: "Client Work: Upon full payment of agreed milestones, clients receive full ownership of all custom code, designs, and deliverables produced for their project as outlined in the signed SOW. Modulifyr IP: Modulifyr retains ownership of all proprietary frameworks, libraries, and methodologies developed independently. Website Content: All content on this website is the property of Modulifyr and may not be reproduced without written permission."
    },
    {
        title: "5. Confidentiality",
        body: "Both parties agree to maintain the confidentiality of any proprietary information shared during an engagement. Formal NDA terms are governed by separately executed confidentiality agreements. Information submitted through our forms is handled in accordance with our Privacy Policy."
    },
    {
        title: "6. Payment Terms",
        body: "Payment terms for all engagements are defined in the applicable SOW. Generally: Discovery and Pilot phases are billed upfront or on a milestone basis. Full Build engagements use milestone-based payment schedules. Retainer agreements are billed monthly in advance. All invoices are due within 14 days of issuance. Late payments may incur a 1.5% monthly late fee. Modulifyr reserves the right to pause work on outstanding invoices after written notice."
    },
    {
        title: "7. Warranties & Limitations",
        body: "Modulifyr warrants that all work is performed by qualified professionals using industry-standard practices. We provide a 30-day bug fix warranty on delivered software for defects attributable to our implementation. This website is offered 'as is' without warranties of any kind. Modulifyr is not liable for indirect, incidental, or consequential damages. Our total liability for any claim shall not exceed the total fees paid for the relevant project phase."
    },
    {
        title: "8. Acceptable Use",
        body: "You agree not to: submit false or misleading information; attempt unauthorized access to our systems; engage in any activity that violates applicable laws; harvest or scrape data from our website; or impersonate any person or entity. Violation may result in immediate termination of any ongoing engagement without refund."
    },
    {
        title: "9. Termination",
        body: "Either party may terminate an engagement per the provisions in the applicable SOW, generally with 30 days written notice. Upon termination, the client is responsible for payment of all work completed to date. Modulifyr will deliver all completed work and work-in-progress materials."
    },
    {
        title: "10. Governing Law",
        body: "These Terms are governed by the laws of Nepal. Disputes will first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in Kathmandu, Nepal. International clients may mutually agree on alternative dispute resolution mechanisms."
    },
    {
        title: "11. Changes to Terms",
        body: "Modulifyr reserves the right to update these Terms at any time. Changes will be posted on this page with an updated date. For active project engagements, material changes will be communicated directly. Continued use of the Site constitutes acceptance of the revised Terms."
    },
    {
        title: "12. Contact",
        body: "For questions about these Terms, contact us at contact@modulifyr.com. Address: Modulifyr Engineering Center, Kathmandu, Nepal. Response time: within 5 business days."
    }
];

export default function TermsPage() {
    return (
        <div className="flex flex-col w-full">
            <section className="bg-brand-navy text-white py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <span className="text-brand-teal font-bold tracking-widest uppercase text-xs mb-4 block">Legal</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
                        <p className="text-text-muted text-lg leading-relaxed">Terms governing use of the Modulifyr website and engagement with our services.</p>
                        <p className="text-text-muted text-sm mt-3">Last Updated: March 2026</p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-bg-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">

                        <div className="hidden lg:block">
                            <div className="sticky top-28">
                                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Contents</p>
                                <nav className="flex flex-col gap-1">
                                    {sections.map((s, i) => (
                                        <a key={i} href={`#t${i}`}
                                            className="text-sm text-text-secondary hover:text-brand-orange transition-colors py-1.5 border-l-2 border-transparent hover:border-brand-orange pl-3">
                                            {s.title.replace(/^\d+\. /, "")}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="bg-white border border-border-base rounded-3xl p-8 md:p-12">
                                <p className="text-text-secondary leading-relaxed mb-10 pb-8 border-b border-border-base">
                                    Please read these Terms carefully before engaging with Modulifyr. They establish the legal framework for all interactions between you and Modulifyr Engineering.
                                </p>

                                <div className="space-y-10">
                                    {sections.map((section, i) => (
                                        <div key={i} id={`t${i}`} className="scroll-mt-28">
                                            <h2 className="text-xl font-heading font-bold text-brand-navy mb-4">{section.title}</h2>
                                            <p className="text-text-secondary leading-relaxed text-sm">{section.body}</p>
                                            {i < sections.length - 1 && <div className="mt-8 border-b border-border-base" />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <Link href="/privacy" className="text-sm text-brand-teal hover:underline font-medium">Privacy Policy →</Link>
                                <Link href="/contact" className="text-sm text-brand-teal hover:underline font-medium">Contact Us →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}