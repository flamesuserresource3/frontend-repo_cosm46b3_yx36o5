import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import TrendingRow from './components/TrendingRow';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-[#0b0b16] to-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-40" aria-hidden="true">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-80 w-80 -translate-x-1/3 rounded-full bg-purple-600 blur-3xl" />
        <div className="absolute bottom-[-10%] right-0 h-96 w-96 translate-x-1/3 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <CategoryGrid />
      <TrendingRow />
      <Footer />
    </div>
  );
}
