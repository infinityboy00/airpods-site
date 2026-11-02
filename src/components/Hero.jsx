import React from 'react';
import { Sparkles, ShieldCheck, Zap, Volume2, ArrowRight } from 'lucide-react';

export default function Hero({ onAddToCart }) {
  const handleBuyPro = () => {
    onAddToCart({
      id: 'airpods-pro-2',
      name: 'AirPods Pro 2',
      price: 249,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      engraving: '',
      color: 'White',
      quantity: 1
    });
  };

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
      {/* Background Glowing Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-cyan-400 mb-6 shadow-inner backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Introducing AirPods Pro 2 with Hearing Health Experience</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          Magic. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Placed in your ears.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-400 mb-10">
          Powered by the Apple H2 chip. Up to 2x more Active Noise Cancellation, Adaptive Audio, and pristine acoustic fidelity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={handleBuyPro}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 text-base group"
          >
            <span>Buy AirPods Pro 2 — $249</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#models"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-all text-base"
          >
            Explore All Models
          </a>
        </div>

        {/* Floating Product Image with Shadow */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-2xl -z-10" />
          <div className="rounded-3xl glass-panel p-4 sm:p-8 border border-white/10 shadow-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1400&q=80"
              alt="AirPods Pro 2 Showcase"
              className="w-full h-auto max-h-[480px] object-cover rounded-2xl animate-float group-hover:scale-105 transition-transform duration-700 shadow-2xl"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <p className="text-white font-semibold text-lg">AirPods Pro (2nd generation)</p>
                <p className="text-zinc-400 text-sm">MagSafe Charging Case (USB-C) with Speaker & Lanyard Loop</p>
              </div>
              <div className="text-right">
                <span className="text-cyan-400 font-bold text-xl">$249</span>
                <p className="text-xs text-zinc-500">Free delivery & engraving</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="glass-panel p-6 rounded-2xl text-left border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Apple H2 Chip</h3>
            <p className="text-zinc-400 text-sm">Pro computational audio for intelligent noise reduction.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-left border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Adaptive Audio</h3>
            <p className="text-zinc-400 text-sm">Dynamically blends ANC and Transparency mode.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-left border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Spatial Audio</h3>
            <p className="text-zinc-400 text-sm">Personalized sound with dynamic head tracking.</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-left border border-white/5 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Hearing Health</h3>
            <p className="text-zinc-400 text-sm">Clinically validated hearing test & protection features.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
