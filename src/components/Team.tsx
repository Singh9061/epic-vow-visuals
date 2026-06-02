import founder from "@/assets/founder.jpg";
import cofounder from "@/assets/cofounder.jpg";
import ornament from "@/assets/ornament.png";

const team = [
  {
    img: founder,
    name: "Amit Pal",
    role: "Founder & MD",
    bio: "A storyteller at heart, Amit founded Picsdom with one belief — every wedding deserves to be remembered the way it felt, not just the way it looked.",
  },
  {
    img: cofounder,
    name: "Prashant Pal",
    role: "Co-Founder & Cinematographer",
    bio: "Prashant's films feel like memory itself — slow, warm and honest. He leads our cinema team and shapes the soul of every Picsdom wedding film.",
  },
];

export function Team({ compact = false }: { compact?: boolean }) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-44 md:w-56 opacity-80" />
          <span className="mt-4 text-xs tracking-[0.5em] uppercase text-muted-foreground">The People</span>
          <h2 className="text-3xl md:text-5xl mt-3 max-w-2xl">
            Meet the <em className="gold-text not-italic">faces</em> behind Picsdom
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {team.map((p) => (
            <article key={p.name} className="group text-center md:text-left">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-gold/30" />
              </div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold">{p.role}</p>
              <h3 className="text-3xl md:text-4xl mt-2">{p.name}</h3>
              {!compact && <p className="mt-4 text-muted-foreground leading-relaxed max-w-md md:max-w-none">{p.bio}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
