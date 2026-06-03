import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { PageHeader } from "@/components/PageHeader";
import { Albums } from "@/components/Albums";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/albums")({
  head: () => ({
    meta: [
      { title: "Albums — Picsdom Wedding Photography" },
      { name: "description", content: "Browse Picsdom wedding albums — each with 20 hand-picked photographs." },
      { property: "og:title", content: "Albums — Picsdom" },
      { property: "og:description", content: "Curated wedding photo albums by Picsdom." },
    ],
  }),
  component: AlbumsPage,
});

function AlbumsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHeader kicker="Galleries" title="Our Albums" />
      <Albums />
      <Footer />
    </main>
  );
}
