import ornament from "@/assets/ornament.png";

export function PageHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="pt-36 md:pt-44 pb-16 px-6 text-center bg-background">
      <img src={ornament} alt="" loading="lazy" width={1024} height={512} className="w-40 md:w-56 mx-auto opacity-70" />
      <p className="mt-4 text-xs tracking-[0.5em] uppercase text-muted-foreground">{kicker}</p>
      <h1 className="mt-3 text-4xl md:text-6xl">
        <em className="gold-text not-italic">{title}</em>
      </h1>
    </header>
  );
}
