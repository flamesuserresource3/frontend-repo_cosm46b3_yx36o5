import React from 'react';
import { Film, Tv, Trophy, Sparkles, Search, User, Rocket } from 'lucide-react';

const NavButton = ({ icon: Icon, label, active }) => (
  <button
    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
      active
        ? 'bg-white/10 text-white shadow-lg'
        : 'text-white/80 hover:text-white hover:bg-white/5'
    }`}
  >
    <Icon size={18} />
    <span className="hidden sm:inline">{label}</span>
  </button>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 blur-md opacity-60" />
            <div className="relative flex items-center gap-2 rounded-lg bg-black/70 px-3 py-1.5 ring-1 ring-white/10">
              <Rocket size={18} className="text-cyan-300" />
              <span className="font-semibold tracking-wide text-white">FlickHub</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2 ml-4">
            <NavButton icon={Film} label="Movies" active />
            <NavButton icon={Tv} label="Series" />
            <NavButton icon={Sparkles} label="Anime" />
            <NavButton icon={Trophy} label="Sports" />
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="group relative hidden sm:block">
            <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
            <input
              type="text"
              placeholder="Search titles, genres, people..."
              className="w-64 rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-4 text-sm text-white placeholder-white/50 outline-none transition focus:border-cyan-400/40"
            />
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 hover:bg-white/20">
            <User size={18} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
