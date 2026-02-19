
import React, { useState } from 'react';
import { SkinType } from './types';
import BioScreen from './components/BioScreen';
import SkinSwitcher from './components/SkinSwitcher';

const App: React.FC = () => {
  const [activeSkin, setActiveSkin] = useState<SkinType>(SkinType.GLASS);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-[#050505] transition-colors duration-1000 overflow-hidden">
      {/* High-Fidelity Animation Engine */}
      <style>{`
        /* Global & Utility */
        @keyframes float-slow { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(30px, -40px) rotate(5deg); } }
        @keyframes mesh-drift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes grid-scroll { 0% { background-position: 0 0; } 100% { background-position: 100px 100px; } }
        @keyframes scanline { 0% { top: -100%; } 100% { top: 100%; } }
        @keyframes ripple { 0% { transform: scale(0); opacity: 0.8; } 100% { transform: scale(6); opacity: 0; } }
        
        /* Glass & Crystal */
        @keyframes prism-shift { 0% { filter: hue-rotate(0deg); transform: translateX(-50%) rotate(0deg); } 100% { filter: hue-rotate(360deg); transform: translateX(50%) rotate(180deg); } }
        
        /* Nebula & Space */
        @keyframes nebula-pulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.3); opacity: 0.7; } }
        @keyframes star-twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
        
        /* HP & Magic */
        @keyframes rune-glow { 0%, 100% { opacity: 0.2; filter: drop-shadow(0 0 2px #10b981); } 50% { opacity: 0.8; filter: drop-shadow(0 0 15px #10b981); } }
        @keyframes ember-rise { 0% { transform: translateY(0) scale(1) rotate(0); opacity: 1; } 100% { transform: translateY(-150px) scale(0) rotate(360deg); opacity: 0; } }
        
        /* Arcade & Synth */
        @keyframes synth-sun { 0% { transform: translateY(10px); filter: drop-shadow(0 0 20px #ff00ff); } 100% { transform: translateY(-10px); filter: drop-shadow(0 0 40px #00ffff); } }
        
        /* Glitch & Digital */
        @keyframes text-glitch { 
          0% { transform: translate(0); text-shadow: 2px 0 red, -2px 0 blue; }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Grotesk:wght@300;700&family=Cinzel:wght@400;900&family=Syncopate:wght@400;700&display=swap');
        
        .skin-arcade { font-family: 'Press Start 2P', cursive; font-size: 0.65rem; }
        .skin-hp-parchment, .skin-hp-emerald { font-family: 'Cinzel', serif; }
        .skin-glitch, .skin-neon { font-family: 'Space Grotesk', sans-serif; }
        .skin-minimal { font-family: 'Syncopate', sans-serif; text-transform: uppercase; }
      `}</style>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 items-center justify-center relative z-10">
        <div className="w-full lg:w-[400px] order-2 lg:order-1 h-auto lg:max-h-[850px] relative z-20">
          <SkinSwitcher activeSkin={activeSkin} onSelectSkin={setActiveSkin} />
        </div>

        <div className="w-full max-w-[430px] h-[900px] bg-black rounded-[70px] p-4 shadow-[0_0_120px_rgba(0,0,0,0.9)] relative border-[16px] border-[#1a1a1a] flex flex-col items-stretch overflow-hidden order-1 lg:order-2 flex-shrink-0">
          <div className="flex justify-between items-center px-12 pt-8 pb-4 text-white/30 text-[10px] font-bold tracking-widest relative z-50">
            <span>9:41</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-white/5" />
              <div className="w-6 h-3 rounded-[3px] border border-white/10" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto rounded-[50px] scrollbar-hide relative">
            <BioScreen activeSkin={activeSkin} />
          </div>

          <div className="h-1.5 w-40 bg-white/10 rounded-full mx-auto mb-6 mt-4 relative z-50" />
        </div>
      </div>
    </div>
  );
};

export default App;
