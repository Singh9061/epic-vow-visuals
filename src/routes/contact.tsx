import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Picsdom" },
      { name: "description", content: "Get in touch with Picsdom Raebareli to plan your wedding film & photography." },
      { property: "og:title", content: "Contact — Picsdom" },
      { property: "og:description", content: "Get in touch with Picsdom Raebareli." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { Icon: Phone, label: "Call", value: "+91 00000 00000" },
    { Icon: Mail, label: "Email", value: "hello@picsdom.in" },
    { Icon: MapPin, label: "Studio", value: "Raebareli, Uttar Pradesh" },
    { Icon: Instagram, label: "Instagram", value: "@picsdom.raebareli" },
  ];
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <PageHeader kicker="Say Hello" title="Let's Talk" />
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-center text-muted-foreground max-w-xl mx-auto">
          We'd love to hear about your story. Drop us a line and we'll get back within 24 hours.
        </p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map(({ Icon, label, value }) => (
            <div key={label} className="border border-gold/30 p-8 flex items-center gap-5 hover:border-gold transition-colors">
              <Icon className="w-7 h-7 text-gold" strokeWidth={1.4} />
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{label}</p>
                <p className="mt-1 text-lg">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
