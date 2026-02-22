import { Header } from "@/components/Header";
import { EmergencyHero } from "@/components/EmergencyHero";
import { FastResponse } from "@/components/FastResponse";
import { WhatWeFix } from "@/components/WhatWeFix";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { FAQ } from "@/components/FAQ";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <Header />
      <main>
        <EmergencyHero />
        <FastResponse />
        <WhatWeFix />
        <HowItWorks />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
