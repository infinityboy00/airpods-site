import React from 'react';
import { COMPARISON_FEATURES } from '../data/products';
import { Check, X } from 'lucide-react';

export default function ComparisonMatrix() {
  return (
    <section id="compare" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">Compare Models</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Find the perfect match for your ears.
          </h3>
          <p className="text-zinc-400 text-lg">
            Compare technical specifications, audio features, and battery performance side by side.
          </p>
        </div>

        {/* Table Container */}
        <div className="max-w-5xl mx-auto overflow-x-auto glass-panel rounded-3xl border border-white/10 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/60">
                <th className="p-6 text-white font-bold text-lg w-1/4">Model</th>
                <th className="p-6 text-white font-bold text-lg w-1/4">AirPods 4</th>
                <th className="p-6 text-white font-bold text-lg w-1/4">AirPods Pro 2</th>
                <th className="p-6 text-white font-bold text-lg w-1/4">AirPods Max</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {COMPARISON_FEATURES.map((section, idx) => (
                <React.Fragment key={idx}>
                  <tr className="bg-zinc-900/30">
                    <td colSpan={4} className="px-6 py-3 text-cyan-400 font-semibold text-xs uppercase tracking-wider">
                      {section.category}
                    </td>
                  </tr>
                  {section.items.map((item, itemIdx) => (
                    <tr key={itemIdx} className="hover:bg-zinc-900/40 transition-colors">
                      <td className="p-6 text-sm font-medium text-zinc-300">{item.name}</td>
                      <td className="p-6 text-sm text-zinc-400">{item['airpods-4']}</td>
                      <td className="p-6 text-sm text-cyan-300 font-medium">{item['airpods-pro-2']}</td>
                      <td className="p-6 text-sm text-zinc-300">{item['airpods-max']}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
