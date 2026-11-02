import React from 'react';
import { X, Plus, Minus, Trash2, Check, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartSidebar({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-50 animate-in fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-800 flex flex-col shadow-2xl animate-in slide-in-from-right-4">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Shopping Bag</h3>
              <p className="text-zinc-400 text-xs">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <ShoppingBag className="w-16 h-16 text-zinc-700 mb-4" />
              <p className="text-zinc-500 mb-2">Your bag is empty</p>
              <p className="text-zinc-600 text-sm">Looks like you haven't picked anything yet</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="glass-panel rounded-2xl p-4 border border-white/5 flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl bg-zinc-800"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-sm line-clamp-1">{item.name}</h4>
                  {item.engraving && (
                    <p className="text-cyan-400 text-xs font-mono mt-0.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {item.engraving}
                    </p>
                  )}
                  {item.color && item.color !== 'White' && (
                    <p className="text-zinc-500 text-xs mt-0.5">Color: {item.color}</p>
                  )}
                  <p className="text-cyan-400 font-semibold mt-1">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-white font-medium">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemoveItem(index)}
                      className="ml-auto p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary & Checkout */}
        <div className="p-6 border-t border-zinc-800 bg-zinc-900/50 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Subtotal</span>
            <span className="text-white">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Estimated Tax (8%)</span>
            <span className="text-white">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t border-zinc-800 pt-4">
            <span className="text-white">Total</span>
            <span className="text-white">${total.toFixed(2)}</span>
          </div>

          <button
            onClick={onCheckout}
            disabled={cartItems.length === 0}
            className="w-full py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-lg bg-cyan-500 text-black hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Check className="w-5 h-5" />
            <span>Checkout — ${total.toFixed(2)}</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-xs text-zinc-500">
            Free shipping · Free returns · Free engraving
          </p>
        </div>
      </div>
    </div>
  );
}