import React from 'react';
import { X, Check, Sparkles, Shield, Volume2, Wifi, Battery, Cpu, Scale, Zap } from 'lucide-react';

const SPECS = {
  'airpods-4': {
    name: 'AirPods 4',
    chip: 'Apple H2 Headphone Chip',
    audio: ['Personalized Spatial Audio with dynamic head tracking', 'Adaptive EQ', 'Voice Isolation', 'Sensors: Dual beamforming microphones, Inward-facing microphone, Motion-detecting accelerometer, Speech-detecting accelerometer'],
    anc: 'Active Noise Cancellation (ANC model only), Transparency mode (ANC model only)',
    battery: 'Up to 5 hours listening time (4 hours with ANC), Up to 30 hours total with case',
    charging: 'USB-C Charging Case, MagSafe wireless charging (ANC model only), Apple Watch charger compatible (ANC model only)',
    connectivity: 'Bluetooth 5.3, Find My network, Precision Finding with U1 chip (ANC model only)',
    sensors: 'Optical sensor, Motion-detecting accelerometer, Speech-detecting accelerometer, Force sensor, Skin-detect sensor',
    resistance: 'IP54 Dust, sweat, and water resistance (earbuds and case)',
    weight: 'Earbuds: 4.3g each, Case: 32.3g (ANC model: 34.5g)',
    dimensions: 'Earbuds: 30.2 × 18.3 × 18.1 mm, Case: 46.2 × 50.1 × 21.2 mm',
  },
  'airpods-pro-2': {
    name: 'AirPods Pro (2nd Generation)',
    chip: 'Apple H2 Headphone Chip + U1 Chip in MagSafe Charging Case',
    audio: ['Personalized Spatial Audio with dynamic head tracking', 'Adaptive EQ', 'Adaptive Audio (ANC + Transparency blend)', 'Voice Isolation', 'Conversation Awareness', 'Sensors: Dual beamforming microphones, Inward-facing microphone, Vent system'],
    anc: 'Up to 2x more Active Noise Cancellation, Transparency Mode, Adaptive Audio, Conversation Awareness, Hearing Protection',
    battery: 'Up to 6 hours listening time (5.5 hours with Spatial Audio), Up to 30 hours total with case',
    charging: 'MagSafe Charging Case (USB-C) with Speaker & Lanyard Loop, MagSafe wireless charging, Apple Watch charger compatible, Qi-certified wireless charging',
    connectivity: 'Bluetooth 5.3, Find My network with Precision Finding, Built-in speaker in case for Find My, U1 chip',
    sensors: 'Dual beamforming microphones, Inward-facing microphone, Optical sensor, Motion-detecting accelerometer, Speech-detecting accelerometer, Force sensor (touch control), Skin-detect sensor',
    resistance: 'IP54 Dust, sweat, and water resistance (earbuds and case)',
    weight: 'Earbuds: 5.3g each, Case: 45.6g (USB-C MagSafe)',
    dimensions: 'Earbuds: 30.9 × 21.8 × 24.0 mm, Case: 45.2 × 60.6 × 21.7 mm',
  },
  'airpods-max': {
    name: 'AirPods Max',
    chip: 'Apple H1 Chip (one in each earcup)',
    audio: ['Personalized Spatial Audio with dynamic head tracking', 'Adaptive EQ', 'Computational audio', 'Nine microphones (eight for ANC, three for voice pickup)'],
    anc: 'Active Noise Cancellation, Transparency Mode',
    battery: 'Up to 20 hours listening time with ANC and Spatial Audio enabled',
    charging: 'USB-C charging, Smart Case puts headphones in ultra-low-power state',
    connectivity: 'Bluetooth 5.0, Find My network',
    sensors: 'Optical sensor (each earcup), Position sensor (each earcup), Case-detect sensor, Accelerometer, Gyroscope',
    resistance: 'Not rated for water resistance',
    weight: '384.8g (without Smart Case)',
    dimensions: '187.3 × 168.6 × 83.4 mm',
  }
};

export default function SpecsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 animate-in fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute inset-4 md:inset-10 lg:inset-20 flex flex-col bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Technical Specifications</h3>
              <p className="text-zinc-400 text-xs">Complete product details</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-800 overflow-x-auto px-4 -mb-px">
          {Object.keys(SPECS).map((key) => (
            <button
              key={key}
              className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white border-b-2 border-transparent hover:border-cyan-500 transition-colors whitespace-nowrap"
            >
              {SPECS[key].name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {Object.entries(SPECS).map(([modelKey, specs]) => (
            <div key={modelKey} className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white font-semibold text-lg">{specs.chip}</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Volume2 className="w-4 h-4" />
                    <span>Audio</span>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    {specs.audio.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Shield className="w-4 h-4" />
                    <span>Noise Control</span>
                  </div>
                  <p className="text-sm text-zinc-300">{specs.anc}</p>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Battery className="w-4 h-4" />
                    <span>Battery</span>
                  </div>
                  <p className="text-sm text-zinc-300">{specs.battery}</p>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Zap className="w-4 h-4" />
                    <span>Charging</span>
                  </div>
                  <p className="text-sm text-zinc-300">{specs.charging}</p>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Wifi className="w-4 h-4" />
                    <span>Connectivity</span>
                  </div>
                  <p className="text-sm text-zinc-300">{specs.connectivity}</p>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Scale className="w-4 h-4" />
                    <span>Weight & Dimensions</span>
                  </div>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li>Weight: {specs.weight}</li>
                    <li>Dimensions: {specs.dimensions}</li>
                  </ul>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>Durability</span>
                  </div>
                  <p className="text-sm text-zinc-300">{specs.resistance}</p>
                </div>

                <div className="glass-panel p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Cpu className="w-4 h-4" />
                    <span>Sensors</span>
                  </div>
                  <p className="text-sm text-zinc-300">{specs.sensors}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}