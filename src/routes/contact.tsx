import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Picsdom" },
      { name: "description", content: "Get in touch with Picsdom Raebareli to plan your wedding film & photography." },
      { property: "og:title", content: "Contact — Picsdom" },
      { property: "og:description", content: "Get in touch with Picsdom Raebareli." },
    ],
  }),
  component: () => (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHeader kicker="Say Hello" title="Let's Talk" />
      <ContactSection />
      <Footer />
    </main>
  ),
});
