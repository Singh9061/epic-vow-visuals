import ornament from "@/assets/ornament.png";

export function AboutSection() {
  return (
    <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
      <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
        Picsdom is a wedding photography and films studio rooted in Raebareli. We believe life's most
        beautiful memories aren't posed — they're felt. The unsaid glances, joyful tears and quiet
        moments of love. We don't just photograph these, we live them with you.
      </p>
      <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-44 mx-auto mt-12 opacity-70" />
      <p className="mt-10 text-lg md:text-xl leading-relaxed text-muted-foreground">
        More than photographers and filmmakers, we are visual storytellers, memory keepers and
        emotional archivists — preserving your day in its rawest, most real form.
      </p>
    </section>
  );
}
