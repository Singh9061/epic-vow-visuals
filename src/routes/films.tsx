import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { FilmsSection } from "@/components/FilmsSection";

export const Route = createFileRoute("/films")({
  head: () => ({
    meta: [
      { title: "Films — Picsdom" },
      { name: "description", content: "Cinematic wedding films crafted by Picsdom Raebareli." },
      { property: "og:title", content: "Films — Picsdom" },
      { property: "og:description", content: "Cinematic wedding films crafted by Picsdom Raebareli." },
    ],
  }),
  component: FilmsPage,
});

function FilmsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHeader kicker="In Motion" title="Our Films" />
      <FilmsSection />
      <Footer />
    </main>
  );
}
