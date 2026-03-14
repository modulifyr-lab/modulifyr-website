"use client";

// src/components/forms/ContactForm.tsx
// NOTE: No ratelimit imports here — rate limiting is handled server-side in the API route.

import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import {
    Mail, Phone, MapPin, Linkedin, Twitter, Github,
    ArrowRight, Clock, ShieldCheck, CheckCircle2, AlertCircle, Loader2,
} from "lucide-react";
import * as React from "react";
import Link from "next/link";

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
    website: string; // honeypot
}

const initialForm: FormState = { name: "", email: "", subject: "", message: "", website: "" };

export function ContactForm() {
    const [form, setForm] = React.useState<FormState>(initialForm);
    const [submitted, setSubmitted] = React.useState(false);
    const [status, setStatus] = React.useState<"idle" | "loading" | "error">("idle");
    const [errorMsg, setErrorMsg] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/submit-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Submission failed");
            setSubmitted(true);
            setForm(initialForm);
        } catch (err: unknown) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please email us directly at contact@modulifyr.com");
        } finally {
            setStatus("idle");
        }
    };

    if (submitted) {
        return (
            <div className="container-custom py-24 min-h-[60vh] flex items-center justify-center">
                <Card className="max-w-xl w-full text-center p-16 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-brand-orange" />
                    </div>
                    <CardTitle className="text-3xl mb-4">Message Sent</CardTitle>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                        Thanks for reaching out. Someone from our team will get back to you within one business day.
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
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy mb-6">
                            Let's Talk About <span className="text-brand-orange">Your Project</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            Whether you have a clear spec or just a problem you're trying to solve, reach out. We'll tell you honestly whether we can help and what it would take.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left: Contact Info */}
                        <div className="flex flex-col gap-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-brand-navy" />
                                    </div>
                                    <h4 className="font-heading font-bold text-lg text-brand-navy">Email Us</h4>
                                    <p className="text-sm text-text-secondary">Direct engineering inquiries:</p>
                                    <a href="mailto:contact@modulifyr.com" className="font-bold text-brand-orange hover:underline text-lg">contact@modulifyr.com</a>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="w-10 h-10 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-brand-navy" />
                                    </div>
                                    <h4 className="font-heading font-bold text-lg text-brand-navy">Call Us</h4>
                                    <p className="text-sm text-text-secondary">Mon – Fri, 9am – 6pm NPT:</p>
                                    <a href="tel:+9779764478571" className="font-bold text-brand-orange hover:underline text-lg">+977 9764478571</a>
                                </div>
                            </div>

                            <div className="p-8 bg-white border border-border-base rounded-3xl shadow-sm flex items-start gap-6">
                                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-brand-orange" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-heading font-bold text-xl text-brand-navy">Our Office</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Modulifyr Engineering<br />Birtamode, Jhapa<br />Province No. 1, Nepal
                                    </p>
                                    <a href="https://maps.google.com/maps?q=Birtamode,+Jhapa,+Nepal" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-brand-orange font-bold text-sm hover:underline mt-2">
                                        Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h4 className="font-heading font-bold text-brand-navy">Follow Our Work</h4>
                                <div className="flex gap-4">
                                    <Link href="https://www.linkedin.com/company/modulifyr/" className="w-12 h-12 border border-border-base rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                                    <Link href="https://x.com/modulifyr" className="w-12 h-12 border border-border-base rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
                                    <Link href="https://github.com/Modulifyr" className="w-12 h-12 border border-border-base rounded-full flex items-center justify-center hover:bg-brand-navy hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
                                </div>
                            </div>

                            <div className="bg-brand-navy text-white p-8 rounded-3xl flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-brand-gold" />
                                    <span className="font-bold">NPT (UTC+5:45) — Works in Your Timezone</span>
                                </div>
                                <p className="text-xs text-text-muted leading-relaxed">
                                    Nepal Standard Time gives us natural working hour overlap with both European mornings and Asian business hours.
                                </p>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="flex flex-col gap-8">
                            <Card className="p-8 md:p-12 shadow-xl border-t-8 border-t-brand-teal">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-2xl font-heading font-bold text-brand-navy mb-4">Send a Message</h2>

                                    {status === "error" && (
                                        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                                            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                            <p className="text-sm text-red-700">{errorMsg}</p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="contact-name" className="text-sm font-bold text-brand-navy font-heading">Your Name <span className="text-brand-orange">*</span></label>
                                            <input id="contact-name" type="text" name="name" value={(form as Record<string, unknown>).name as string} onChange={handleChange}
                                                placeholder="Full Name" required maxLength={200}
                                                className="flex h-12 w-full rounded-lg border border-border-base bg-background px-4 py-2 text-base placeholder:text-text-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange disabled:opacity-50 transition-all text-foreground" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="contact-email" className="text-sm font-bold text-brand-navy font-heading">Your Email <span className="text-brand-orange">*</span></label>
                                            <input id="contact-email" type="email" name="email" value={(form as Record<string, unknown>).email as string} onChange={handleChange}
                                                placeholder="email@company.com" required
                                                className="flex h-12 w-full rounded-lg border border-border-base bg-background px-4 py-2 text-base placeholder:text-text-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange disabled:opacity-50 transition-all text-foreground" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="contact-subject" className="text-sm font-bold text-brand-navy font-heading">Subject <span className="text-brand-orange">*</span></label>
                                        <input id="contact-subject" type="text" name="subject" value={(form as Record<string, unknown>).subject as string} onChange={handleChange}
                                            placeholder="How can we help?" required maxLength={300}
                                            className="flex h-12 w-full rounded-lg border border-border-base bg-background px-4 py-2 text-base placeholder:text-text-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange disabled:opacity-50 transition-all text-foreground" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="contact-message" className="text-sm font-bold text-brand-navy font-heading">Message <span className="text-brand-orange">*</span></label>
                                        <textarea id="contact-message" name="message" value={(form as Record<string, unknown>).message as string} onChange={handleChange}
                                            placeholder="Tell us about your project or question..." required maxLength={5000}
                                            className="flex min-h-[150px] w-full rounded-lg border border-border-base bg-background px-4 py-3 text-base placeholder:text-text-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange disabled:opacity-50 transition-all text-foreground resize-none" />
                                        <p className="text-xs text-text-muted text-right">{form.message.length}/5000</p>
                                    </div>

                                    {/* Honeypot */}
                                    <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
                                        <label htmlFor="contact-website">Website</label>
                                        <input id="contact-website" type="text" name="website" value={(form as Record<string, unknown>).website as string} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                                    </div>

                                    <div className="flex items-center gap-3 bg-bg-secondary p-4 rounded-lg">
                                        <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0" />
                                        <span className="text-[10px] text-text-secondary leading-tight italic">All communication is treated as confidential. We can sign an NDA before any technical discussion.</span>
                                    </div>

                                    <Button type="submit" disabled={status === "loading"} className="w-full h-14 text-lg">
                                        {status === "loading" ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</> : <>Send Message <ArrowRight className="w-5 h-5 ml-2" /></>}
                                    </Button>
                                </form>
                            </Card>
                            <div className="text-center px-4">
                                <p className="text-sm text-text-secondary">
                                    Have a detailed project brief? Use our structured <Link href="/request-proposal" className="text-brand-orange font-bold hover:underline">Proposal Request Form</Link> instead.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 md:px-0">
                <div className="container-custom">
                    <div className="w-full h-96 rounded-3xl overflow-hidden border border-border-base shadow-sm">
                        <iframe title="Modulifyr Office Location — Birtamode, Jhapa, Nepal"
                            src="https://maps.google.com/maps?q=Birtamode,+Jhapa,+Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <p className="text-xs text-text-muted text-center mt-3">Modulifyr Engineering · Birtamode, Jhapa, Province No. 1, Nepal</p>
                </div>
            </section>
        </div>
    );
}