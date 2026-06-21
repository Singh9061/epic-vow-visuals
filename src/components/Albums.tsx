import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Download, DownloadCloud } from "lucide-react";
import ar0 from "@/assets/aanya-rohan/ar_0.jpeg.asset.json";
import ar1 from "@/assets/aanya-rohan/ar_1.jpeg.asset.json";
import ar2 from "@/assets/aanya-rohan/ar_2.jpeg.asset.json";
import ar3 from "@/assets/aanya-rohan/ar_3.jpeg.asset.json";
import ar4 from "@/assets/aanya-rohan/ar_4.jpeg.asset.json";
import ar5 from "@/assets/aanya-rohan/ar_5.jpeg.asset.json";
import ar6 from "@/assets/aanya-rohan/ar_6.jpeg.asset.json";
import ar7 from "@/assets/aanya-rohan/ar_7.jpeg.asset.json";
import pp0 from "@/assets/prashant-priyanshi/pp_0.jpg.asset.json";
import pp1 from "@/assets/prashant-priyanshi/pp_1.jpg.asset.json";
import pp2 from "@/assets/prashant-priyanshi/pp_2.jpg.asset.json";
import pp3 from "@/assets/prashant-priyanshi/pp_3.jpg.asset.json";
import pp4 from "@/assets/prashant-priyanshi/pp_4.jpg.asset.json";
import pp5 from "@/assets/prashant-priyanshi/pp_5.jpg.asset.json";
import pp6 from "@/assets/prashant-priyanshi/pp_6.jpg.asset.json";
import pp7 from "@/assets/prashant-priyanshi/pp_7.jpg.asset.json";
import pp8 from "@/assets/prashant-priyanshi/pp_8.jpg.asset.json";
import pp9 from "@/assets/prashant-priyanshi/pp_9.jpg.asset.json";
import sv0 from "@/assets/sana-vikram/sv_0.jpg.asset.json";
import sv1 from "@/assets/sana-vikram/sv_1.jpg.asset.json";
import sv2 from "@/assets/sana-vikram/sv_2.jpg.asset.json";
import sv3 from "@/assets/sana-vikram/sv_3.jpg.asset.json";
import sv4 from "@/assets/sana-vikram/sv_4.jpg.asset.json";

const aanyaRohanPhotos = [ar0.url, ar1.url, ar2.url, ar3.url, ar4.url, ar5.url, ar6.url, ar7.url];
const prashantPriyanshiPhotos = [pp0.url, pp1.url, pp2.url, pp3.url, pp4.url, pp5.url, pp6.url, pp7.url, pp8.url, pp9.url];
const sanaVikramPhotos = [sv0.url, sv1.url, sv2.url, sv3.url, sv4.url];


async function downloadPhoto(url: string, filename: string) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  } catch {
    window.open(url, "_blank");
  }
}

async function downloadAll(urls: string[], prefix: string, onProgress?: (n: number) => void) {
  for (let i = 0; i < urls.length; i++) {
    await downloadPhoto(urls[i], `${prefix}-${String(i + 1).padStart(2, "0")}.jpg`);
    onProgress?.(i + 1);
    await new Promise((r) => setTimeout(r, 250));
  }
}

const seeds = [
  "wedding-bride", "wedding-couple", "wedding-rings", "wedding-flowers",
  "wedding-haldi", "wedding-mehndi", "wedding-decor", "wedding-dance",
  "wedding-portrait", "wedding-baraat", "wedding-pheras", "wedding-vidaai",
  "wedding-candid", "wedding-laughter", "wedding-feet", "wedding-detail",
  "wedding-lights", "wedding-sangeet", "wedding-kiss", "wedding-bouquet",
];

const albums = [
  { id: "aanya-rohan", title: "Aanya & Rohan", location: "Lucknow", cover: aanyaRohanPhotos[0], count: aanyaRohanPhotos.length },
  { id: "prashant-priyanshi", title: "Prashant & Priyanshi", location: "Lucknow", cover: prashantPriyanshiPhotos[0], count: prashantPriyanshiPhotos.length },
  { id: "sana-vikram", title: "Sana & Vikram", location: "Lucknow", cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200", count: 20 },
  { id: "isha-kabir", title: "Isha & Kabir", location: "Goa", cover: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1200", count: 20 },
  { id: "nisha-arjun", title: "Nisha & Arjun", location: "Raebareli", cover: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200", count: 20 },
  { id: "diya-veer", title: "Diya & Veer", location: "Varanasi", cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200", count: 20 },
];

function albumPhotos(id: string) {
  if (id === "aanya-rohan") return aanyaRohanPhotos;
  if (id === "prashant-priyanshi") return prashantPriyanshiPhotos;
  return seeds.map((s, i) => `https://picsum.photos/seed/${id}-${s}-${i}/900/1200`);
}

export function Albums() {
  const [active, setActive] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [zipping, setZipping] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const photos = active ? albumPhotos(active) : [];
  const album = albums.find((a) => a.id === active);

  const handleDownloadAll = async (id: string) => {
    setZipping(id);
    setProgress(0);
    await downloadAll(albumPhotos(id), id, setProgress);
    setZipping(null);
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">Our Albums</span>
          <h2 className="text-3xl md:text-5xl mt-3 max-w-3xl">
            Hand-picked <em className="gold-text not-italic">collections</em> from our recent weddings
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">Each album holds 20 carefully curated frames — open one to step inside the story.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {albums.map((a) => (
            <div key={a.id} className="group relative overflow-hidden aspect-[4/5]">
              <button
                onClick={() => { setActive(a.id); setIdx(0); }}
                className="absolute inset-0 text-left w-full h-full"
              >
                <img src={a.cover} alt={a.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold">{a.location} · {a.count} Photos</p>
                  <h3 className="text-2xl md:text-3xl text-white mt-2">{a.title}</h3>
                  <span className="inline-block mt-3 text-xs tracking-[0.3em] uppercase border-b border-gold pb-1 text-white">
                    View Album
                  </span>
                </div>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleDownloadAll(a.id); }}
                disabled={zipping === a.id}
                className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-black/60 hover:bg-gold hover:text-black text-white text-[10px] tracking-[0.25em] uppercase px-3 py-2 backdrop-blur-sm transition disabled:opacity-70"
                title="Download all 20 photos"
              >
                <DownloadCloud className="w-3.5 h-3.5" />
                {zipping === a.id ? `${progress}/${a.count}` : "Download All"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {active && album && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-white/10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold">{album.location}</p>
              <h3 className="text-xl md:text-2xl text-white">{album.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => downloadPhoto(photos[idx], `${album.id}-${String(idx + 1).padStart(2, "0")}.jpg`)}
                className="flex items-center gap-2 text-white hover:text-gold border border-white/20 hover:border-gold px-3 py-2 text-[10px] tracking-[0.25em] uppercase"
                title="Download this photo"
              >
                <Download className="w-3.5 h-3.5" /> Photo
              </button>
              <button
                onClick={() => handleDownloadAll(album.id)}
                disabled={zipping === album.id}
                className="flex items-center gap-2 bg-gold text-black hover:opacity-90 px-3 py-2 text-[10px] tracking-[0.25em] uppercase disabled:opacity-70"
                title="Download all 20 photos"
              >
                <DownloadCloud className="w-3.5 h-3.5" />
                {zipping === album.id ? `${progress}/${album.count}` : `All ${album.count}`}
              </button>
              <button onClick={() => setActive(null)} className="text-white hover:text-gold p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center relative overflow-hidden p-4">
            <button
              onClick={() => setIdx((i) => (i - 1 + photos.length) % photos.length)}
              className="absolute left-4 z-10 p-3 text-white hover:text-gold bg-black/40 rounded-full"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              key={photos[idx]}
              src={photos[idx]}
              alt={`${album.title} ${idx + 1}`}
              className="max-h-full max-w-full object-contain animate-fade-in"
            />
            <button
              onClick={() => setIdx((i) => (i + 1) % photos.length)}
              className="absolute right-4 z-10 p-3 text-white hover:text-gold bg-black/40 rounded-full"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-white/70">
              {idx + 1} / {photos.length}
            </span>
          </div>

          <div className="overflow-x-auto border-t border-white/10 p-3 flex gap-2">
            {photos.map((p, i) => (
              <button
                key={p}
                onClick={() => setIdx(i)}
                className={`shrink-0 w-16 h-20 overflow-hidden border-2 transition ${i === idx ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <img src={p} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
