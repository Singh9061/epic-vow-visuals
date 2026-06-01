import heroVideo from "@/assets/hero-wedding.mp4.asset.json";

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
        <h1 className="mt-6 text-4xl md:text-7xl text-white max-w-4xl leading-tight animate-fade-up" style={{ animationDelay: "0.5s" }}>
          We don't just capture weddings — <em className="gold-text not-italic">we live them with you</em>
        </h1>
        <div className="h-px w-24 mt-8 bg-gold animate-fade-up" style={{ animationDelay: "0.9s" }} />
      </div>
    </section>
  );
}
