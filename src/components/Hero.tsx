import heroVideo from "@/assets/hero-wedding.mp4.asset.json";

const words = ["We", "don't", "just", "capture", "weddings", "—", "we", "live", "them", "with", "you"];

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
      <div className="relative h-full flex flex-col items-center justify-end pb-24 md:pb-32 text-center px-6">
        <span className="text-[0.7rem] md:text-xs tracking-[0.5em] uppercase text-white/80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Timeless · Cinematic · Crafted
        </span>
        <h1 className="mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white max-w-3xl leading-snug">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.3em] animate-word-reveal"
              style={{ animationDelay: `${0.5 + i * 0.12}s` }}
            >
              {word === "live" || word === "them" || word === "with" || word === "you" ? (
                <em className="gold-text not-italic">{word}</em>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>
        <div className="h-px w-24 mt-8 bg-gold animate-fade-up" style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
}
