import React from 'react';
import { Play, Star } from 'lucide-react';

const demoItems = [
  {
    id: 1,
    title: 'The Astral Voyage',
    rating: 8.8,
    img:
      'https://images.unsplash.com/photo-1526312426976-593c2edd1f1a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Neon City Nights',
    rating: 9.1,
    img:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Rise of the Mecha',
    rating: 8.5,
    img:
      'https://images.unsplash.com/photo-1606117331085-5760e3b58520?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Quantum Drift',
    rating: 8.9,
    img:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function TrendingRow() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-white">Trending Now</h2>
        <button className="text-sm text-cyan-300 hover:text-cyan-200">See all</button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {demoItems.map((item) => (
          <div key={item.id} className="group overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <button className="absolute bottom-2 left-2 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-black shadow">
                <Play size={14} /> Play
              </button>
            </div>
            <div className="flex items-center justify-between p-3">
              <h3 className="truncate font-medium text-white">{item.title}</h3>
              <div className="flex items-center gap-1 text-yellow-300">
                <Star size={14} />
                <span className="text-xs text-white/90">{item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
