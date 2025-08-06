import { NoiseEffect } from "@/components/effects/noise-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Mail } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Testimonials } from "@/components/home/testimonials";
import { ALL_FEATURES } from "@/utils/subscription";

export const metadata: Metadata = {
  title: "Pricing — tweakcn",
  robots: "index, follow",
};

export default function PricingPage() {
  return (
    <div className="from-background via-background to-muted/20 relative isolate min-h-screen bg-gradient-to-br">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute top-0 right-0 size-80 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-secondary/10 absolute bottom-0 left-0 size-80 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto space-y-28 px-4 py-20 md:px-6">
        {/* Header Section */}
        <section className="space-y-2 text-center">
          <h1 className="from-foreground to-foreground/50 bg-gradient-to-r bg-clip-text text-5xl font-bold tracking-tight text-pretty text-transparent md:text-6xl py-2">
            Everything is Free!
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-base text-balance md:text-lg">
            We&apos;ve made all features completely free for everyone. No limits, no paywalls, just
            pure creativity.
          </p>
        </section>

        {/* Pricing Card */}
        <section className="mx-auto max-w-2xl">
          <Card className="group ring-primary/50 from-card to-primary/5 relative border-2 bg-gradient-to-b ring-2 transition-all duration-300">
            <div className="relative flex h-full flex-col">
              <CardHeader className="relative space-y-2 border-b text-center">
                <NoiseEffect />

                <div className="flex items-center justify-center gap-3">
                  <CardTitle className="text-4xl font-medium">Free Forever</CardTitle>
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold tracking-tight lg:text-5xl">$0</span>
                  <span className="text-muted-foreground text-lg">/forever</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  No credit card required • No limits • No catches
                </p>
              </CardHeader>
              <CardContent className="flex-1 pt-6">
                <ul className="space-y-3">
                  {ALL_FEATURES.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary/15 flex items-center justify-center rounded-full p-1">
                        <Check className="text-primary size-3 stroke-2" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="h-12 w-full text-base font-medium">
                  <Link href="/editor/theme">Start Creating Themes</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        </section>

        <div className="-mt-8">
          <Testimonials />
        </div>

        {/* FAQs Section */}
        <section className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              FAQs
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base text-balance md:text-lg">
              Here&apos;s everything you may want to know. For any other info, just{" "}
              <Link href="mailto:sahaj@tweakcn.com" className="text-primary hover:underline">
                reach us
              </Link>
              .
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {PRICING_FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Contact Section */}
        <section className="mx-auto max-w-2xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Still have questions?</h2>
            <p className="text-muted-foreground text-lg">
              We&apos;d love to help you create amazing themes.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="mailto:sahaj@tweakcn.com" className="inline-flex items-center gap-2">
                <Mail className="size-4" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

const PRICING_FAQS = [
  {
    question: "Is tweakcn really completely free?",
    answer: `Yes! We've removed all paywalls and limitations. All features including unlimited AI theme generation, unlimited saved themes, and all premium features are now completely free for everyone.`,
  },
  {
    question: "Why did you make everything free?",
    answer: `We believe in making design tools accessible to everyone. By removing all barriers, we hope to foster creativity and help more developers build beautiful applications.`,
  },
  {
    question: "Will there be any limits in the future?",
    answer: `No plans for that! We're committed to keeping tweakcn free and open for everyone. The goal is to build the best theme creation tool without any restrictions.`,
  },
  {
    question: "How do you sustain the project if it's free?",
    answer: `We're exploring sustainable ways to support the project including potential sponsorships, donations, and partnerships, but the core tool will always remain free.`,
  },
  {
    question: "What features are included?",
    answer: `Everything! Unlimited AI theme generation, unlimited saved themes, theme export, Figma integration, contrast checking, and all future features we develop.`,
  },
];
