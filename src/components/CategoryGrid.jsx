import React from 'react';
import { Film, Tv, Bot, Rocket, Radio, Trophy } from 'lucide-react';

const categories = [
  { key: 'movies', label: 'Movies', icon: Film, gradient: 'from-fuchsia-500 to-pink-500' },
  { key: 'series', label: 'Series', icon: Tv, gradient: 'from-indigo-500 to-purple-500' },
  { key: 'anime', label: 'Anime', icon: Bot, gradient: 'from-teal-400 to-cyan-500' },
  { key: 'live', label: 'Live TV', icon: Radio, gradient: 'from-amber-400 to-orange-500' },
  { key: 'sports', label: 'Sports', icon: Trophy, gradient: 'from-green-400 to-emerald-500' },
  { key: 'ai', label: 'SmartWatch AI', icon: Rocket, gradient: 'from-sky-400 to-blue-500' },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-2xl font-bold text-white">Browse Categories</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(({ key, label, icon: Icon, gradient }) => (
          <button
            key={key}
            className="group relative overflow-hidden rounded-xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <div
              className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-2xl`}
            />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="text-white" size={20} />
              </div>
              <span className="font-medium text-white">{label}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
