import React, { useState } from 'react';
import { Volume2, VolumeX, Radio, Shield, Waves, Sparkles } from 'lucide-react';

export default function AncSimulator() {
  const [mode, setMode] = useState('anc'); // off, anc, transparency, adaptive

  const modes = [
    {
      id: 'anc',
      name: 'Active Noise Cancellation',
      icon: <Shield className="w-5 h-5" />,
      description: 'Anti-noise is generated to cancel out unwanted sound before it reaches your ear. Immerse yourself completely.',
      noiseLevel: '5%',
      waveColor: 'from-cyan-500 to-blue-500',
      statusText: 'Silence Enabled (95% reduction)'
    },
    {
      id: 'transparency',
      name: 'Transparency Mode',
      icon: <Radio className="w-5 h-5" />,
      description: 'External sounds are let in so you can hear and interact with the world around you naturally.',
      noiseLevel: '100%',
      waveColor: 'from-emerald-400 to-teal-500',
      statusText: 'Natural Ambient Audio'
    },
    {
      id: 'adaptive',
      name: 'Adaptive Audio',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Dynamically tailors the noise control for you by blending Transparency and Active Noise Cancellation.',
      noiseLevel: 'Dynamic',
      waveColor: 'from-purple-500 to-pink-500',
      statusText: 'AI Real-time Tuning'
    },
    {
      id: 'off',
      name: 'Noise Control Off',
      icon: <VolumeX className="w-5 h-5" />,
      description: 'Standard acoustic isolation without electronic noise cancellation processing.',
      noiseLevel: '100%',
      waveColor: 'from-zinc-500 to-zinc-700',
      statusText: 'Unprocessed Sound'
    }
  ];

  const currentModeData = modes.find(m => m.id === mode);

  return (
    <section id="anc-sim" className="py-24 bg-black relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">Acoustic Engineering</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Hear what you want. Or nothing at all.
          </h3>
          <p className="text-zinc-400 text-lg">
            Test our advanced listening modes interactively and experience the power of the H2 chip.
          </p>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all ${mode === m.id ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25 scale-105' : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'}`}
            >
              {m.icon}
              <span>{m.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Visualizer Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-left">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Active Mode</span>
              <h4 className="text-3xl font-bold text-white mt-1 mb-2">{currentModeData.name}</h4>
              <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">{currentModeData.description}</p>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl px-6 py-4 text-center shrink-0">
              <span className="text-xs text-zinc-500 block mb-1">Ambient Noise</span>
              <span className="text-2xl font-bold text-cyan-400">{currentModeData.noiseLevel}</span>
            </div>
          </div>

          {/* Sound Wave Animation Visualizer */}
          <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800/80 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Waves className="w-64 h-64 text-cyan-500" />
            </div>

            <div className="relative z-10 flex items-center justify-center gap-1.5 h-32">
              {[40, 70, 30, 90, 60, 100, 45, 80, 20, 85, 95, 50, 75, 40, 90, 60, 35, 70, 100, 45].map((height, i) => {
                let h = height;
                if (mode === 'anc') h = height * 0.1; // low noise wave
                if (mode === 'transparency') h = height * 0.9;
                if (mode === 'adaptive') h = (i % 2 === 0) ? height * 0.3 : height * 0.8;

                return (
                  <div
                    key={i}
                    className={`w-2 rounded-full bg-gradient-to-t ${currentModeData.waveColor} transition-all duration-500`}
                    style={{ height: `${Math.max(8, h)}%` }}
                  />
                );
              })}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{currentModeData.statusText}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
