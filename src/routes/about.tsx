import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/components/AboutSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Picsdom" },
      { name: "description", content: "Picsdom is a wedding photography & films studio based in Raebareli, telling honest love stories." },
      { property: "og:title", content: "About — Picsdom" },
      { property: "og:description", content: "Picsdom is a wedding photography & films studio based in Raebareli." },
    ],
  }),
  component: () => (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHeader kicker="Who We Are" title="About Picsdom" />
      <AboutSection />
      <Footer />
    </main>
  ),
});
