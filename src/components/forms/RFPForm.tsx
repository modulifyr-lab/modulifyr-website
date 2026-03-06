"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/FormElements";
import {
    ShieldCheck,
    Upload,
    Clock,
    CheckCircle2,
    Mail,
    Building2,
    User,
    ArrowRight
} from "lucide-react";

export function RFPForm() {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container-custom py-24 min-h-[60vh] flex items-center justify-center">
                <Card className="max-w-xl w-full text-center p-16 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10 text-brand-teal" />
                    </div>
                    <CardTitle className="text-3xl mb-4">Proposal Request Received</CardTitle>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                        Thank you for your interest in Modulifyr. Our lead architect will review your project requirements and get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another Request</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full bg-bg-secondary min-h-screen">
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Content */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-navy leading-tight">Request a <span className="text-brand-orange">Technical Proposal</span></h1>
                                <p className="text-xl text-text-secondary leading-relaxed">
                                    Provide us with your project requirements, and we'll deliver a structured technical proposal, architecture plan, and estimate for your review.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <ShieldCheck className="w-6 h-6 text-brand-orange shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-brand-navy mb-1">Confidentiality Assured</h4>
                                        <p className="text-sm text-text-muted">We sign NDAs before sharing any technical or operational data. Every submission is treated with the highest security standards.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-brand-teal shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-brand-navy mb-1">Fast Response</h4>
                                        <p className="text-sm text-text-muted">Receive an automated reply immediately and a tailored follow-up from our engineering team within one business day.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-border-base p-8 rounded-2xl shadow-sm mt-4">
                                <h4 className="font-heading font-bold text-brand-navy mb-4">What happens next?</h4>
                                <ol className="space-y-4 text-sm text-text-secondary">
                                    <li className="flex gap-3">
                                        <span className="font-bold text-brand-orange">1.</span>
                                        <span>Review of requirements by our lead architect.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-brand-orange">2.</span>
                                        <span>15-minute qualification call (optional).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="font-bold text-brand-orange">3.</span>
                                        <span>Draft technical SOW and cost estimate delivery.</span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {/* RFP Form */}
                        <Card className="p-8 md:p-12 shadow-2xl transition-none scale-100 border-t-8 border-t-brand-orange bg-background">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground flex items-center gap-2 font-heading">
                                            <User className="w-4 h-4" /> Full Name
                                        </label>
                                        <Input placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground flex items-center gap-2 font-heading">
                                            <Mail className="w-4 h-4" /> Work Email
                                        </label>
                                        <Input type="email" placeholder="john@company.com" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground flex items-center gap-2 font-heading">
                                        <Building2 className="w-4 h-4" /> Company Name
                                    </label>
                                    <Input placeholder="Acme Corp" required />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground font-heading block">Project Summary</label>
                                    <Textarea placeholder="Please describe your system requirements, goals, and any specific technical constraints." required />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground font-heading block">Budget Range (Optional)</label>
                                        <select className="w-full h-12 bg-bg-secondary border border-border-base rounded-lg px-4 text-sm focus:ring-2 focus:ring-brand-orange outline-none text-foreground appearance-none">
                                            <option value="" className="bg-background text-foreground">Select Range</option>
                                            <option value="5-15k" className="bg-background text-foreground">$5k – $15k</option>
                                            <option value="15-50k" className="bg-background text-foreground">$15k – $50k</option>
                                            <option value="50-100k" className="bg-background text-foreground">$50k – $100k</option>
                                            <option value="100k+" className="bg-background text-foreground">$100k+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-foreground font-heading block">Expected Timeline</label>
                                        <select className="w-full h-12 bg-bg-secondary border border-border-base rounded-lg px-4 text-sm focus:ring-2 focus:ring-brand-orange outline-none text-foreground appearance-none">
                                            <option value="" className="bg-background text-foreground">Select Timeline</option>
                                            <option value="urgent" className="bg-background text-foreground">Urgent (&lt; 1 month)</option>
                                            <option value="standard" className="bg-background text-foreground">Standard (3-6 months)</option>
                                            <option value="long" className="bg-background text-foreground">Long-term (6+ months)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="p-4 bg-bg-secondary rounded-lg border-2 border-dashed border-border-base flex items-center justify-center cursor-pointer hover:bg-background transition-colors">
                                    <div className="flex flex-col items-center gap-2 text-text-dim">
                                        <Upload className="w-6 h-6" />
                                        <span className="text-xs font-semibold">Upload RFP or Technical Specs (PDF/DOCX)</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 py-2">
                                    <input type="checkbox" id="nda" className="w-4 h-4 accent-brand-orange" />
                                    <label htmlFor="nda" className="text-xs text-text-alt font-medium select-none">
                                        Send me a non-disclosure agreement (NDA) before sharing detailed data.
                                    </label>
                                </div>

                                <Button type="submit" className="w-full py-4 text-lg">
                                    Submit Proposal Request <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>

                                <p className="text-[10px] text-center text-text-dim italic px-4 leading-relaxed">
                                    By submitting this form, you agree to our privacy policy and terms of service. We use your data exclusively for proposal communication.
                                </p>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
