import React, { useState } from 'react';
import { Compass, Sparkles, Volume2, Move } from 'lucide-react';

export default function SpatialAudioDemo() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(10, Math.min(90, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(10, Math.min(90, ((e.clientY - rect.top) / rect.height) * 100));
    setPosition({ x, y });
  };

  const getAudioSourceDescription = () => {
    if (position.x < 40 && position.y < 40) return 'Sound coming from Front-Left stage';
    if (position.x > 60 && position.y < 40) return 'Sound coming from Front-Right stage';
    if (position.x < 40 && position.y > 60) return 'Sound coming from Behind-Left';
    if (position.x > 60 && position.y > 60) return 'Sound coming from Behind-Right';
    return 'Directly center in acoustic sweet spot';
  };

  return (
    <section id="spatial-audio" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">Immersive Sound</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Spatial Audio with dynamic head tracking.
          </h3>
          <p className="text-zinc-400 text-lg">
            Places sound all around you to create a theater-like acoustic experience for music, TV shows, and movies. Drag the sound source below to test.
          </p>
        </div>

        {/* Interactive Head Tracking Arena */}
        <div
          className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative text-center cursor-crosshair select-none shadow-2xl"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Head Graphic Center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-48 rounded-full border border-cyan-500/20 flex items-center justify-center animate-spin-slow">
              <div className="w-32 h-32 rounded-full border border-dashed border-cyan-500/30" />
            </div>
            <div className="absolute w-20 h-24 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-2xl">
              <div className="w-8 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center">
                <Compass className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Draggable Sound Source Node */}
          <div
            className="absolute w-12 h-12 rounded-full bg-cyan-500 text-black font-bold flex items-center justify-center shadow-xl shadow-cyan-500/50 transition-all duration-75 cursor-grab active:cursor-grabbing z-20"
            style={{ left: `${position.x}%`, top: `${position.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <Volume2 className="w-6 h-6" />
          </div>

          <div className="relative z-10 h-80 flex flex-col justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mx-auto">
              <Move className="w-3.5 h-3.5 text-cyan-400" />
              <span>Click and drag anywhere to move sound source</span>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 max-w-sm mx-auto">
              <p className="text-white font-medium text-sm">{getAudioSourceDescription()}</p>
              <div className="flex justify-center gap-4 mt-1 text-xs text-zinc-400">
                <span>X: {Math.round(position.x)}%</span>
                <span>Y: {Math.round(position.y)}%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
