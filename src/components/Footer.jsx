import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/60">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} FlickHub. All rights reserved. Streams and data provided by licensed partners
            and APIs.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/90">Privacy</a>
            <a href="#" className="hover:text-white/90">Terms</a>
            <a href="#" className="hover:text-white/90">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
