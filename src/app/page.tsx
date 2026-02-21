import { content } from "@/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ServiceArea } from "@/components/ServiceArea";
import { FAQ } from "@/components/FAQ";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { Gallery } from "@/components/Gallery";
import { Guarantee } from "@/components/Guarantee";

function LawnTemplate() {
  return (
    <>
      <Hero />
      <Pricing />
      <Services />
      <Gallery />
      <Guarantee />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <QuoteForm />
    </>
  );
}

function DefaultTemplate() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <QuoteForm />
    </>
  );
}

export default function Home() {
  const template = (content as any).template;
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <Header />
      <main>
        {template === "lawn" ? <LawnTemplate /> : <DefaultTemplate />}
      </main>
      <Footer />
    </div>
  );
}
