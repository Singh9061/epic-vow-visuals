import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Stories } from "@/components/Stories";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories — Picsdom" },
      { name: "description", content: "A glimpse into our favourite love stories captured by Picsdom." },
      { property: "og:title", content: "Stories — Picsdom" },
      { property: "og:description", content: "A glimpse into our favourite love stories captured by Picsdom." },
    ],
  }),
  component: () => (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHeader kicker="Our Work" title="Love Stories" />
      <Stories />
      <Footer />
    </main>
  ),
});
