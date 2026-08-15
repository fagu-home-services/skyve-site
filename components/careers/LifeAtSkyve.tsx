import { Quote } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { LIFE_PHOTOS, FOUNDER_QUOTE } from "@/lib/careers-data";

export function LifeAtSkyve() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Life At Skyve
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LIFE_PHOTOS.map((src, i) => (
            <Photo
              key={i}
              src={src}
              alt="Life at Skyve"
              className="aspect-[4/3] rounded-xl shadow-card"
            />
          ))}
        </div>

        <figure className="mx-auto mt-12 max-w-2xl text-center">
          <Quote className="mx-auto h-7 w-7 text-sky" />
          <blockquote className="mt-4 font-serif text-xl italic leading-relaxed text-horizon">
            &ldquo;{FOUNDER_QUOTE.text}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-ridge">
            – {FOUNDER_QUOTE.author}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
