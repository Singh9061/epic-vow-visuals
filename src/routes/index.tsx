import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Splash } from "@/components/Splash";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PageHeader } from "@/components/PageHeader";
import { FilmsSection } from "@/components/FilmsSection";
import { Albums } from "@/components/Albums";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Picsdom — Wedding Films & Photography" },
      { name: "description", content: "Picsdom — timeless, cinematic, crafted wedding films and photography in Raebareli and beyond." },
      { property: "og:title", content: "Picsdom — Wedding Films & Photography" },
      { property: "og:description", content: "Cinematic wedding films and timeless photography across India and beyond." },
    ],
  }),
  component: Index,
});

function Index() {
  const [splashDone, setSplashDone] = useState(false);
  return (
    <>
      {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
      <main className="min-h-screen bg-background">
        <Nav />
        <Hero />
        <PageHeader kicker="In Motion" title="Our Films" />
        <FilmsSection />
        <Albums />
        <PageHeader kicker="Who We Are" title="About Picsdom" />
        <AboutSection />
        <PageHeader kicker="Say Hello" title="Let's Talk" />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
