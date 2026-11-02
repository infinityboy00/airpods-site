import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AncSimulator from './components/AncSimulator';
import SpatialAudioDemo from './components/SpatialAudioDemo';
import CaseEngraving from './components/CaseEngraving';
import ComparisonMatrix from './components/ComparisonMatrix';
import CartSidebar from './components/CartSidebar';
import SpecsModal from './components/SpecsModal';
import confetti from 'canvas-confetti';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  const addToCart = useCallback((item) => {
    setCartItems(prev => {
      // Check if identical item (same model + engraving + color) exists
      const existingIndex = prev.findIndex(i =>
        i.id === item.id &&
        i.engraving === item.engraving &&
        i.color === item.color
      );

      if (existingIndex >= 0) {
        return prev.map((i, idx) =>
          idx === existingIndex ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      // Fire confetti for new additions
      confetti({
        particleCount: 60,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#22d3ee', '#67e8f9', '#ffffff'],
      });

      return [...prev, item];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((index, newQty) => {
    setCartItems(prev => {
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      return prev.map((item, i) =>
        i === index ? { ...item, quantity: newQty } : item
      );
    });
  }, []);

  const removeItem = useCallback((index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  }, []);

  const checkout = useCallback(() => {
    if (cartItems.length === 0) return;

    // Confetti burst
    confetti({
      particleCount: 150,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#06b6d4', '#22d3ee', '#67e8f9', '#ffffff', '#a855f7'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.5 },
        colors: ['#06b6d4', '#22d3ee', '#67e8f9', '#ffffff'],
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.5 },
        colors: ['#06b6d4', '#22d3ee', '#67e8f9', '#ffffff'],
      });
    }, 150);

    alert(`Order placed! Total: $${cartItems.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)}\n\nThank you for shopping at AirPods Studio!`);
    setCartItems([]);
    setIsCartOpen(false);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSpecs={() => setIsSpecsOpen(true)}
      />

      <main>
        <Hero onAddToCart={addToCart} />
        <ProductShowcase onAddToCart={addToCart} />
        <AncSimulator />
        <SpatialAudioDemo />
        <CaseEngraving onAddToCart={addToCart} />
        <ComparisonMatrix />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a3 3 0 013 3v7h3a1 1 0 011 1v4a1 1 0 01-1 1h-3v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7H6a1 1 0 01-1-1v-4a1 1 0 011-1h3V5a3 3 0 013-3z"/></svg>
                </div>
                <span className="font-semibold text-lg">AirPods Studio</span>
              </div>
              <p className="text-zinc-400 text-sm max-w-xs">
                The ultimate destination for premium Apple audio. Experience sound like never before with AirPods Pro, AirPods Max, and the all-new AirPods 4.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#models" className="hover:text-cyan-400 transition-colors">Shop AirPods</a></li>
                <li><a href="#anc-sim" className="hover:text-cyan-400 transition-colors">Noise Control</a></li>
                <li><a href="#spatial-audio" className="hover:text-cyan-400 transition-colors">Spatial Audio</a></li>
                <li><a href="#engraving" className="hover:text-cyan-400 transition-colors">Free Engraving</a></li>
                <li><a href="#compare" className="hover:text-cyan-400 transition-colors">Compare Models</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Find My Setup</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm">
              © 2025 AirPods Studio. All rights reserved. Not affiliated with Apple Inc.
            </p>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </footer>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={checkout}
      />

      <SpecsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
      />
    </div>
  );
}

export default App;