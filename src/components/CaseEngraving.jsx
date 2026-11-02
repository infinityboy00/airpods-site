import React, { useState } from 'react';
import { EMOJI_LIST } from '../data/products';
import { Sparkles, Check, ShoppingBag } from 'lucide-react';

export default function CaseEngraving({ onAddToCart }) {
  const [engravingText, setEngravingText] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('✨');
  const [selectedModel, setSelectedModel] = useState({
    id: 'airpods-pro-2-engraved',
    name: 'AirPods Pro 2 with Custom Engraving',
    price: 249,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
  });
  const [success, setSuccess] = useState(false);

  const handleAddEngraved = () => {
    const item = {
      id: selectedModel.id,
      name: `${selectedModel.name} (${selectedEmoji} ${engravingText || 'Custom'})`,
      price: selectedModel.price,
      image: selectedModel.image,
      color: 'White',
      engraving: `${selectedEmoji} ${engravingText}`,
      quantity: 1
    };

    onAddToCart(item);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <section id="engraving" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Laser Engraving</span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Make them unmistakably yours.
          </h3>
          <p className="text-zinc-400 text-lg">
            Add a combination of emoji, text, and numbers for free, exclusively at AirPods Studio.
          </p>
        </div>

        {/* Customizer Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center shadow-2xl">

          {/* Live Preview Case */}
          <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800 flex flex-col items-center justify-center relative min-h-[320px]">
            <img
              src={selectedModel.image}
              alt="Charging Case Preview"
              className="w-48 h-48 object-cover rounded-xl shadow-lg mb-6"
            />
            {/* Engraving Preview Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 px-4 py-1.5 rounded bg-zinc-900/90 border border-cyan-500/50 text-cyan-300 font-mono text-sm tracking-widest shadow-xl">
              {selectedEmoji} {engravingText || 'YOUR TEXT'}
            </div>
            <span className="text-xs text-zinc-500">Live Case Engraving Preview</span>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-6 text-left">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Choose Model
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedModel({ id: 'airpods-pro-2-engraved', name: 'AirPods Pro 2', price: 249, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80' })}
                  className={`p-3 rounded-xl border text-left text-sm font-medium transition-all ${selectedModel.id.includes('pro') ? 'bg-cyan-500/10 border-cyan-500 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'}`}
                >
                  AirPods Pro 2 ($249)
                </button>
                <button
                  onClick={() => setSelectedModel({ id: 'airpods-4-engraved', name: 'AirPods 4 ANC', price: 179, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80' })}
                  className={`p-3 rounded-xl border text-left text-sm font-medium transition-all ${!selectedModel.id.includes('pro') ? 'bg-cyan-500/10 border-cyan-500 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'}`}
                >
                  AirPods 4 ANC ($179)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Select Emoji / Icon
              </label>
              <div className="grid grid-cols-8 gap-2 bg-zinc-900 p-3 rounded-xl border border-zinc-800">
                {EMOJI_LIST.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => setSelectedEmoji(emoji)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all ${selectedEmoji === emoji ? 'bg-cyan-500 text-black scale-110' : 'hover:bg-zinc-800 text-zinc-300'}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Custom Text (Max 14 chars)
              </label>
              <input
                type="text"
                maxLength={14}
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value)}
                placeholder="Type your name or initials"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 transition-all font-mono"
              />
            </div>

            <button
              onClick={handleAddEngraved}
              className={`w-full py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-lg ${success ? 'bg-emerald-500 text-black' : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-cyan-500/20'}`}
            >
              {success ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added with Free Engraving!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add Custom Engraved to Bag — ${selectedModel.price}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
