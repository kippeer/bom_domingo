import React from 'react';
import { Moon, Stars, Cloud, Diamond, Sparkle } from 'lucide-react';
import { SleepingCat } from './components/SleepingCat';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-2xl">
        {/* Luxury sparkles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <Diamond 
              key={i} 
              className="text-yellow-200/60 absolute animate-twinkle animate-pulse-glow"
              style={{
                width: `${Math.random() * 12 + 8}px`,
                height: `${Math.random() * 12 + 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-200/30 rounded-full animate-floating-particles"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Floating clouds with golden lining */}
        <div className="absolute inset-0">
          <Cloud className="text-purple-300/20 w-24 h-24 absolute -top-12 left-8 animate-float-slow [filter:drop-shadow(0_0_8px_rgba(255,215,0,0.2))]" />
          <Cloud className="text-purple-300/20 w-16 h-16 absolute top-8 right-12 animate-float-medium [filter:drop-shadow(0_0_8px_rgba(255,215,0,0.2))]" />
          <Cloud className="text-purple-300/20 w-20 h-20 absolute -bottom-8 left-16 animate-float-fast [filter:drop-shadow(0_0_8px_rgba(255,215,0,0.2))]" />
        </div>

        {/* Stars background with premium glow */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <Stars 
              key={i} 
              className="text-yellow-200/80 absolute animate-twinkle [filter:drop-shadow(0_0_5px_rgba(255,215,0,0.5))]"
              style={{
                width: `${Math.random() * 16 + 12}px`,
                height: `${Math.random() * 16 + 12}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Moon with luxury glow effect */}
        <div className="absolute -top-16 right-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200 rounded-full blur-2xl transform scale-150 opacity-60"></div>
            <Moon className="text-yellow-200 w-16 h-16 relative z-10 [filter:drop-shadow(0_0_15px_rgba(255,215,0,0.5))]" />
          </div>
        </div>

        {/* Main content with premium glass effect */}
        <div className="bg-gradient-to-br from-purple-100/20 to-purple-200/20 p-12 rounded-3xl relative z-10 backdrop-blur-md border border-yellow-200/30 luxury-shadow animate-shimmer">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold premium-text mb-3 animate-fade-in">Bom Domingo!</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-purple-300 text-lg animate-fade-in-delay">Hora de descansar em grande estilo...</p>
          </div>

          {/* Premium sleeping cat scene */}
          <div className="relative w-64 h-48 mx-auto">
            {/* Luxury sleeping Z's with enhanced sparkles */}
            <div className="absolute -right-4 -top-8 animate-sleep z-20">
              <span className="text-2xl font-bold premium-text [filter:drop-shadow(0_0_5px_rgba(255,215,0,0.5))]">Z</span>
              <Sparkle className="absolute -right-2 -top-2 w-4 h-4 text-yellow-100 animate-pulse-glow" />
              <span className="absolute -right-4 -top-4 text-lg premium-text [filter:drop-shadow(0_0_5px_rgba(255,215,0,0.5))]">z</span>
              <Sparkle className="absolute -right-6 -top-6 w-3 h-3 text-yellow-100 animate-pulse-glow" />
            </div>

            {/* SVG Cat */}
            <div className="relative w-full h-full">
              <SleepingCat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;