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
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map((i) => (
            <figure key={i} className="relative aspect-video overflow-hidden ring-1 ring-gold/20">
              <video src={heroVideo.url} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 text-white text-sm tracking-[0.3em] uppercase drop-shadow">
                Film No. {String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
