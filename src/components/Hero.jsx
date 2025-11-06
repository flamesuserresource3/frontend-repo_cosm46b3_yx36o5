import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15">
            <Star size={14} className="text-yellow-300" />
            Premium Picks for You
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Your Gateway to Cinematic Worlds
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            Watch movies, series, anime, live TV and sports in every language. Smart recommendations, multi-language
            subtitles, and stunning 3D visuals — all in one place.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg transition hover:shadow-xl">
              <Play size={18} /> Start Watching
            </button>
            <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15">
              Explore Library
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
