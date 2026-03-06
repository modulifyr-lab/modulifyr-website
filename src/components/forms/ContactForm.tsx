"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/FormElements";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Github,
    ArrowRight,
    Clock,
    ShieldCheck,
    CheckCircle2
} from "lucide-react";
import * as React from "react";
import Link from "next/link";

export function ContactForm() {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container-custom py-24 min-h-[60vh] flex items-center justify-center">
                <Card className="max-w-xl w-full text-center p-16 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-brand-orange" />
                    </div>
                    <CardTitle className="text-3xl mb-4">Message Sent Successfully</CardTitle>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                        Thank you for reaching out. A member of our engineering team will review your message and respond shortly.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full bg-bg-light">
            <section className="py-24 border-b border-border-base bg-white">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-6">Let's Discuss Your <span className="text-brand-orange">Engineering</span> Challenge</h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            Whether you're ready to start a project or just have a few technical questions, we're here to help. Reach out through our direct channels or use the quick contact form.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Content: Contact Info */}
                        <div className="flex flex-col gap-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-brand-navy" />
                                    </div>
                                    <h4 className="font-heading font-bold text-lg text-brand-navy">Email Us</h4>
                                    <p className="text-sm text-text-secondary">Direct engineering inquiries:</p>
                                    <a href="mailto:hello@modulifyr.com" className="font-bold text-brand-orange hover:underline text-lg">hello@modulifyr.com</a>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-brand-navy" />
                                    </div>
                                    <h4 className="font-heading font-bold text-lg text-brand-navy">Call Us</h4>
                                    <p className="text-sm text-text-secondary">Mon – Fri, 9am – 6pm NPT:</p>
                                    <a href="tel:+9779800000000" className="font-bold text-brand-orange hover:underline text-lg">+977 9800000000</a>
                                </div>
                            </div>

                            <div className="p-8 bg-white border border-border-base rounded-3xl shadow-sm flex items-start gap-6">
                                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-heading font-bold text-xl text-brand-navy">Headquarters</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
                                        Modulifyr Engineering Center<br />
                                        Kathmandu, Nepal<br />
                                        B2B Hub, 3rd Floor
                                    </p>
                                    <Button variant="ghost" className="p-0 h-auto text-brand-orange font-bold text-sm w-fit hover:bg-transparent hover:text-brand-orange/80 mt-2">
                                        Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h4 className="font-heading font-bold text-brand-navy">Follow Our Technical Updates</h4>
                                <div className="flex gap-4">
                                    <Link href="#" className="w-12 h-12 border border-border-base rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="w-12 h-12 border border-border-base rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </Link>
                                    <Link href="#" className="w-12 h-12 border border-border-base rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-brand-navy text-white p-8 rounded-3xl flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-brand-gold" />
                                    <span className="font-bold">Operating in Multiple Timezones</span>
                                </div>
                                <p className="text-xs text-text-muted leading-relaxed">
                                    Our engineering team is distributed across Kathmandu and remote hubs, allowing us to support organizations in North America, Europe, and Asia with overlapped working hours.
                                </p>
                            </div>
                        </div>

                        {/* Right Content: Quick Form */}
                        <div className="flex flex-col gap-8">
                            <Card className="p-8 md:p-12 shadow-xl border-t-8 border-t-brand-teal">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-2xl font-heading font-bold text-brand-navy mb-4">Quick Message</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-brand-navy font-heading">Your Name</label>
                                            <Input placeholder="Full Name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-brand-navy font-heading">Your Email</label>
                                            <Input type="email" placeholder="email@company.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy font-heading">Subject</label>
                                        <Input placeholder="How can we help?" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-navy font-heading">Message</label>
                                        <Textarea placeholder="Share your thoughts, questions, or project briefing..." required className="min-h-[150px]" />
                                    </div>
                                    <div className="flex items-center gap-3 py-2 bg-bg-secondary p-4 rounded-lg">
                                        <ShieldCheck className="w-5 h-5 text-brand-teal" />
                                        <span className="text-[10px] text-text-secondary leading-tight italic">
                                            All communication is encrypted and confidential. We do not share your contact data with 3rd parties.
                                        </span>
                                    </div>
                                    <Button type="submit" className="w-full h-14 text-lg">
                                        Send Message <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </form>
                            </Card>
                            <div className="text-center px-4">
                                <p className="text-sm text-text-secondary">Expected an RFP? Use our structured <Link href="/request-proposal" className="text-brand-orange font-bold hover:underline">Proposal Request Form</Link> instead.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-12 px-4 md:px-0">
                <div className="container-custom">
                    <div className="w-full h-96 bg-bg-secondary border border-border-base rounded-3xl overflow-hidden grayscale relative flex items-center justify-center">
                        <div className="p-8 bg-white border border-border-base rounded-2xl shadow-xl z-10 flex flex-col items-center gap-4 text-center">
                            <MapPin className="w-8 h-8 text-brand-orange" />
                            <h4 className="font-heading font-bold text-brand-navy">Kathmandu Engineering Center</h4>
                            <p className="text-xs text-text-muted">Interactive map coming soon.</p>
                        </div>
                        {/* Fake Map Grid */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    </div>
                </div>
            </section>
        </div>
    );
}
