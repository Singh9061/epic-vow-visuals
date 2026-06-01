import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Splash } from "@/components/Splash";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stories } from "@/components/Stories";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Picsdom — Wedding Films & Photography" },
      { name: "description", content: "Picsdom — cinematic wedding films and timeless photography. We don't just capture weddings, we live them with you." },
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
        <Stories />
        <Footer />
      </main>
    </>
  );
}
