import React, { useState, useEffect } from 'react';
import { ShoppingBag, Headphones, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenSpecs }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Models', href: '#models' },
    { name: 'Noise Control', href: '#anc-sim' },
    { name: 'Spatial Audio', href: '#spatial-audio' },
    { name: 'Engraving', href: '#engraving' },
    { name: 'Compare', href: '#compare' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-xl' : 'bg-black/60 backdrop-blur-md py-4 border-b border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Headphones className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white font-sans">AirPods Studio</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenSpecs}
            className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Specs
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-cyan-500/50 transition-all group"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 text-black text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href="#models"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-cyan-500 text-black font-medium text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            Buy Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-nav border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-cyan-400 py-2 border-b border-zinc-800/50"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenSpecs(); }}
            className="text-base font-medium text-zinc-300 hover:text-cyan-400 py-2 border-b border-zinc-800/50 text-left flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
Tech Specs
          </button>
          <a
            href="#models"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 rounded-full bg-cyan-500 text-black font-semibold text-center shadow-lg shadow-cyan-500/20"
          >
            Buy Now
          </a>
        </div>
      )}
    </header>
  );
}
