import React, { useState } from 'react';
import { AIRPODS_MODELS } from '../data/products';
import { Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductShowcase({ onAddToCart }) {
  const [selectedColors, setSelectedColors] = useState({
    'airpods-max': '#3b3d40'
  });
  const [airpods4Type, setAirpods4Type] = useState('anc'); // standard or anc
  const [addedIds, setAddedIds] = useState({});

  const handleColorSelect = (modelId, color) => {
    setSelectedColors(prev => ({ ...prev, [modelId]: color }));
  };

  const handleAdd = (model) => {
    let price = model.price;
    let name = model.name;
    if (model.id === 'airpods-4') {
      price = airpods4Type === 'anc' ? 179 : 129;
      name = airpods4Type === 'anc' ? 'AirPods 4 with Active Noise Cancellation' : 'AirPods 4';
    }

    const item = {
      id: `${model.id}-${airpods4Type}`,
      name,
      price,
      image: model.image,
      color: selectedColors[model.id] || 'White',
      engraving: '',
      quantity: 1
    };

    onAddToCart(item);

    setAddedIds(prev => ({ ...prev, [model.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [model.id]: false }));
    }, 2000);
  };

  return (
    <section id="models" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">Lineup</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Which AirPods are right for you?
          </h3>
          <p className="text-zinc-400 text-lg">
            Explore our complete family of wireless headphones designed for pristine sound.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {AIRPODS_MODELS.map((model) => {
            const isMax = model.id === 'airpods-max';
            const isAirPods4 = model.id === 'airpods-4';
            const currentPrice = isAirPods4
              ? (airpods4Type === 'anc' ? 179 : 129)
              : model.price;

            return (
              <div
                key={model.id}
                className="glass-panel rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group"
              >
                {/* Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                  {model.badge}
                </div>

                <div>
                  {/* Image */}
                  <div className="w-full h-64 rounded-2xl bg-zinc-900/60 mb-6 flex items-center justify-center overflow-hidden p-4 relative">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    {isMax && (
                      <div
                        className="absolute bottom-4 left-4 w-6 h-6 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: selectedColors['airpods-max'] }}
                      />
                    )}
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2">{model.name}</h4>
                  <p className="text-cyan-400 font-medium text-sm mb-4">{model.tagline}</p>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{model.description}</p>

                  {/* AirPods 4 Variant Selector */}
                  {isAirPods4 && (
                    <div className="mb-6 p-1 bg-zinc-900 rounded-xl border border-zinc-800 flex">
                      <button
                        onClick={() => setAirpods4Type('standard')}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${airpods4Type === 'standard' ? 'bg-cyan-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'}`}
                      >
                        Standard ($129)
                      </button>
                      <button
                        onClick={() => setAirpods4Type('anc')}
                        className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${airpods4Type === 'anc' ? 'bg-cyan-500 text-black font-semibold' : 'text-zinc-400 hover:text-white'}`}
                      >
                        With ANC ($179)
                      </button>
                    </div>
                  )}

                  {/* AirPods Max Color Picker */}
                  {isMax && (
                    <div className="mb-6">
                      <p className="text-xs text-zinc-400 mb-2 font-medium">
                        Finish: <span className="text-white">{model.colorNames[model.colors.indexOf(selectedColors['airpods-max']) || 0]}</span>
                      </p>
                      <div className="flex gap-2">
                        {model.colors.map((color, idx) => (
                          <button
                            key={color}
                            onClick={() => handleColorSelect('airpods-max', color)}
                            className={`w-7 h-7 rounded-full transition-all ${selectedColors['airpods-max'] === color ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-zinc-950 scale-110' : 'opacity-70 hover:opacity-100'}`}
                            style={{ backgroundColor: color }}
                            title={model.colorNames[idx]}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {model.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Add to Bag */}
                <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-400 block">From</span>
                    <span className="text-2xl font-bold text-white">${currentPrice}</span>
                  </div>

                  <button
                    onClick={() => handleAdd(model)}
                    className={`px-6 py-3 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${addedIds[model.id] ? 'bg-emerald-500 text-black' : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20'}`}
                  >
                    {addedIds[model.id] ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Bag</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
