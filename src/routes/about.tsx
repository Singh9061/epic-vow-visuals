import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import ornament from "@/assets/ornament.png";

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
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
          Picsdom is a wedding photography and films studio rooted in Raebareli. We believe life's most
          beautiful memories aren't posed — they're felt. The unsaid glances, joyful tears and quiet
          moments of love. We don't just photograph these, we live them with you.
        </p>
        <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-44 mx-auto mt-12 opacity-70" />
        <p className="mt-10 text-lg md:text-xl leading-relaxed text-muted-foreground">
          More than photographers and filmmakers, we are visual storytellers, memory keepers and
          emotional archivists — preserving your day in its rawest, most real form.
        </p>
      </section>
      <Footer />
    </main>
  ),
});
