import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/919235513863?text=" + encodeURIComponent("Hi Picsdom! I'd like to enquire about wedding photography.");
const INSTAGRAM = "https://www.instagram.com/picsdom.rbl?igsh=MXM1OXk3Z2syOGJ0bQ==";
const ADDRESS = "666X+WPC, Vishnu Nagar, Doorwani Nagar, Indira Nagar Awas Vikas Colony, Raebareli, Uttar Pradesh 229001";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

export function ContactSection() {
  const items = [
    { Icon: Phone, label: "Call", value: "+91 92355 13863", href: "tel:+919235513863" },
    { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: WHATSAPP },
    { Icon: Mail, label: "Email", value: "picdomrbl@gmail.com", href: "mailto:picdomrbl@gmail.com" },
    { Icon: Instagram, label: "Instagram", value: "@picsdom.rbl", href: INSTAGRAM },
    { Icon: MapPin, label: "Studio", value: "Indira Nagar, Raebareli, UP 229001", href: MAPS },
  ];
  return (
    <section className="max-w-4xl mx-auto px-6 pb-24">
      <p className="text-center text-muted-foreground max-w-xl mx-auto">
        We'd love to hear about your story. Drop us a line and we'll get back within 24 hours.
      </p>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map(({ Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="border border-gold/30 p-8 flex items-center gap-5 hover:border-gold hover:bg-secondary/40 transition-colors"
          >
            <Icon className="w-7 h-7 text-gold shrink-0" strokeWidth={1.4} />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{label}</p>
              <p className="mt-1 text-lg">{value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">From the Gram</span>
          <h2 className="text-3xl md:text-4xl mt-2">
            <em className="gold-text not-italic">@picsdom.rbl</em>
          </h2>
        </div>
        <div className="border border-gold/30 overflow-hidden">
          <iframe
            src="https://www.instagram.com/picsdom.rbl/embed"
            title="Picsdom on Instagram"
            className="w-full h-[640px] bg-white"
            loading="lazy"
            allow="encrypted-media"
          />
        </div>
        <div className="mt-6 text-center">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs tracking-[0.4em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
