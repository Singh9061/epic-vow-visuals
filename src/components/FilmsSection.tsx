import film1 from "@/assets/videos/film1.mp4.asset.json";
import film2 from "@/assets/videos/film2.mp4.asset.json";
import film3 from "@/assets/videos/film3.mp4.asset.json";
import film4 from "@/assets/videos/film4.mp4.asset.json";

const films = [
  { video: film1.url, title: "Aanya & Rohan", location: "Lucknow" },
  { video: film2.url, title: "Prashant & Priyanshi", location: "Lucknow" },
  { video: film3.url, title: "Sana & Vikram", location: "Lucknow" },
  { video: film4.url, title: "Isha & Kabir", location: "Goa" },
];

export function FilmsSection() {
  return (
    <section className="px-6 md:px-12 pb-24 bg-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {films.map((f, i) => (
          <figure key={i} className="relative aspect-video overflow-hidden ring-1 ring-gold/20 group">
            <video src={f.video} autoPlay loop muted playsInline className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-4 left-4">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-1">{f.location}</p>
              <p className="text-white text-sm tracking-[0.2em] uppercase drop-shadow">{f.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
