import ornament from "@/assets/ornament.png";
import s1 from "@/assets/story-1.jpg";
import s2 from "@/assets/story-2.jpg";
import s3 from "@/assets/story-3.jpg";

const stories = [
  { img: s1, name: "Aanya & Rohan", tag: "Romance in the city", text: "Three days of laughter, tears and unspoken glances — woven into a film that feels like memory itself." },
  { img: s2, name: "Meera & Aditya", tag: "A royal Jaipur affair", text: "Marigolds, mirrored courtyards and a love story lit by a thousand diyas." },
  { img: s3, name: "Sana & Vikram", tag: "Whispers of henna", text: "Quiet rituals, painted hands and the kind of intimacy only family can hold." },
];

export function Stories() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-48 md:w-64 opacity-80" />
          <h2 className="text-3xl md:text-5xl mt-6 max-w-3xl">
            A glimpse into our favourite <em className="gold-text not-italic">love stories</em> across the world
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {stories.map((s) => (
            <article key={s.name} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img src={s.img} alt={s.name} loading="lazy" width={1024} height={1280}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl md:text-3xl">{s.name}</h3>
              <p className="italic text-muted-foreground mt-1">{s.tag}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="inline-block mt-5 text-xs tracking-[0.3em] uppercase border-b border-gold pb-1 group-hover:text-gold transition-colors">
                See More
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
