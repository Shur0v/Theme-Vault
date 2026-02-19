
import React from 'react';
import { SkinType } from '../types';

interface SkinSwitcherProps {
  activeSkin: SkinType;
  onSelectSkin: (skin: SkinType) => void;
}

const SKIN_CONFIG = [
  { id: SkinType.GLASS, name: 'Crystal Prism', icon: '💎', color: 'from-blue-200 to-indigo-100' },
  { id: SkinType.NEON, name: 'Grid Runner', icon: '📡', color: 'bg-[#020617] border-cyan-500' },
  { id: SkinType.MINIMAL, name: 'Bauhaus Flow', icon: '🎨', color: 'bg-white border-slate-900' },
  { id: SkinType.GRADIENT, name: 'Nebula Pulse', icon: '🌌', color: 'from-purple-800 to-indigo-900' },
  { id: SkinType.MATTE, name: 'Tactile Float', icon: '🔘', color: 'bg-[#e0e0e0]' },
  { id: SkinType.PARCHMENT, name: 'Marauders Map', icon: '📜', color: 'bg-[#e6d5b8]' },
  { id: SkinType.EMERALD, name: 'Runic Emerald', icon: '🐍', color: 'bg-[#040d06] border-emerald-500' },
  { id: SkinType.GLITCH, name: 'Digital Decay', icon: '💾', color: 'bg-red-600' },
  { id: SkinType.OCEANIC, name: 'Abyssal Depth', icon: '🌀', color: 'bg-blue-600' },
  { id: SkinType.ARCADE, name: 'Synth Sunset', icon: '👾', color: 'bg-[#0d0221] border-[#ff00ff]' },
];

const SkinSwitcher: React.FC<SkinSwitcherProps> = ({ activeSkin, onSelectSkin }) => {
  return (
    <div className="bg-[#111] p-8 rounded-[48px] shadow-2xl border border-white/5 h-full flex flex-col">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-white tracking-tighter">Theme Vault</h2>
        <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2">10 Immersive Archetypes</p>
      </div>

      <div className="flex-1 overflow-y-auto pr-3 space-y-4 scrollbar-hide">
        {SKIN_CONFIG.map((skin) => (
          <button
            key={skin.id}
            onClick={() => onSelectSkin(skin.id)}
            className={`w-full flex items-center gap-5 p-5 rounded-[28px] transition-all duration-500 border-2 group ${
              activeSkin === skin.id 
                ? 'border-indigo-600 bg-white shadow-[0_0_30px_rgba(79,70,229,0.3)] scale-[1.04]' 
                : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10'
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner bg-gradient-to-br border-2 ${skin.color}`}>
              {skin.icon}
            </div>
            <div className="text-left flex-1">
              <div className={`text-base font-black tracking-tight transition-colors ${activeSkin === skin.id ? 'text-indigo-600' : 'text-white'}`}>
                {skin.name}
              </div>
              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                Engine: v2.0-animated
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-white/5">
        <div className="bg-indigo-600 p-6 rounded-[32px] text-white shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
          <p className="text-[10px] font-black uppercase tracking-widest mb-2 text-indigo-200">System Priority</p>
          <p className="text-xs leading-relaxed font-medium">Structure remains 100% locked. Animations are CSS-only state injections.</p>
        </div>
      </div>
    </div>
  );
};

export default SkinSwitcher;
