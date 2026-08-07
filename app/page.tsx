import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Differentiators from "@/components/Differentiators";
import WaitlistForm from "@/components/WaitlistForm";
import Credibility from "@/components/Credibility";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 z-50 rounded-sm border border-rule bg-surface px-4 py-2 text-sm font-medium text-ink"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Differentiators />
        <WaitlistForm />
        <Credibility />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
