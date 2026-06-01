import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Team } from "@/components/Team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Picsdom" },
      { name: "description", content: "Meet the founders and creators behind Picsdom Raebareli." },
      { property: "og:title", content: "Team — Picsdom" },
      { property: "og:description", content: "Meet the founders and creators behind Picsdom Raebareli." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHeader kicker="The People" title="The Picsdom Team" />
      <Team />
      <Footer />
    </main>
  );
}
