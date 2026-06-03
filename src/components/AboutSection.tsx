import ornament from "@/assets/ornament.png";

export function AboutSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
      <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
        Photography has been my passion since childhood. What started as a love for capturing moments
        gradually turned into a dream of building a leading company in the photography industry.
      </p>
      <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-44 mx-auto mt-12 opacity-70" />
      <p className="mt-10 text-lg md:text-xl leading-relaxed text-muted-foreground">
        Today, I am proud to work alongside a talented team of 22 professionals who share the same vision
        and dedication. Our goal is to deliver high-quality photography and creative solutions that help
        preserve life's most meaningful moments.
      </p>
      <p className="mt-10 text-lg md:text-xl leading-relaxed text-muted-foreground">
        We believe every picture tells a story, and we are committed to capturing those stories with
        creativity, professionalism, and attention to detail.
      </p>
    </section>
  );
}
