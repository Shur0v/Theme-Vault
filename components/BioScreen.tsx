
import React, { useState, useCallback, useMemo } from 'react';
import { SkinType, LinkButton } from '../types';

interface BioScreenProps {
  activeSkin: SkinType;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
  buttonId: string;
}

const BUTTONS: LinkButton[] = [
  { id: '1', label: 'Website', url: '#' },
  { id: '2', label: 'Email', url: '#' },
  { id: '3', label: 'Instagram', url: '#' },
  { id: '4', label: 'Magic Portal', url: '#' },
];

const BioScreen: React.FC<BioScreenProps> = ({ activeSkin }) => {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleButtonClick = useCallback((e: React.MouseEvent, id: string) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rippleId = Date.now();
    setRipples(prev => [...prev, { x, y, id: rippleId, buttonId: id }]);
    setLoadingId(id);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== rippleId));
      setLoadingId(null);
    }, 1200);
  }, []);

  const Background = useMemo(() => {
    switch (activeSkin) {
      case SkinType.GLASS:
        return (
          <div className="absolute inset-0 bg-[#f0f4f8] overflow-hidden">
            {/* Prismatic Light Rays */}
            <div className="absolute inset-0 opacity-40 animate-[prism-shift_20s_linear_infinite] bg-gradient-to-r from-blue-300 via-pink-200 to-indigo-300 blur-[100px]" />
            <div className="absolute top-[20%] left-[-20%] w-full h-[150%] bg-white/20 -rotate-45 blur-3xl" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          </div>
        );
      case SkinType.NEON:
        return (
          <div className="absolute inset-0 bg-[#020617] overflow-hidden">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#06b6d4_1px,_transparent_1px),_linear-gradient(90deg,#06b6d4_1px,_transparent_1px)] [background-size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-center animate-[grid-scroll_10s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            <div className="absolute h-[2px] w-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-scanline" />
          </div>
        );
      case SkinType.GRADIENT:
        return (
          <div className="absolute inset-0 bg-[#0a0a20] overflow-hidden">
            {/* Nebula Clouds */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 animate-[mesh-drift_15s_ease_infinite] bg-[length:400%_400%]" />
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute rounded-full filter blur-[100px] animate-[nebula-pulse_8s_infinite]" 
                style={{ 
                  width: 300+i*50, height: 300+i*50, 
                  background: `radial-gradient(circle, ${['#4f46e5', '#9333ea', '#db2777'][i%3]}44, transparent)`, 
                  left: `${(i*30)%100}%`, top: `${(i*25)%100}%`, animationDelay: `${i*1.5}s` 
                }} />
            ))}
            {/* Twinkling Stars */}
            {[...Array(40)].map((_, i) => (
              <div key={i} className="absolute bg-white rounded-full animate-[star-twinkle_3s_infinite]" 
                style={{ 
                  width: Math.random()*2+1, height: Math.random()*2+1, 
                  left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, animationDelay: `${Math.random()*5}s` 
                }} />
            ))}
          </div>
        );
      case SkinType.PARCHMENT:
        return (
          <div className="absolute inset-0 bg-[#e6d5b8] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-60 mix-blend-multiply" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_transparent_40%,_#8b4513_150%)]" />
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
              <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#5c4a31" strokeWidth="0.5" className="animate-[snakePath_20s_linear_infinite]" />
            </svg>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute text-xl opacity-0 animate-[ember-rise_6s_infinite] filter sepia" style={{ left: `${15 + i * 14}%`, bottom: '10%', animationDelay: `${i * 1.2}s` }}>👣</div>
            ))}
          </div>
        );
      case SkinType.EMERALD:
        return (
          <div className="absolute inset-0 bg-[#040d06] overflow-hidden">
            {/* Runic Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-4 border-emerald-500/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#10b98133_0%,_transparent_60%)]" />
            {/* Ascending Magical Embers */}
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-[ember-rise_5s_infinite] blur-[1px]" 
                style={{ left: `${Math.random()*100}%`, top: '110%', animationDelay: `${Math.random()*8}s` }} />
            ))}
            {/* Glowing Runes */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute text-emerald-500/20 text-3xl font-serif animate-[rune-glow_4s_infinite]" 
                style={{ left: `${Math.random()*90}%`, top: `${Math.random()*90}%`, animationDelay: `${Math.random()*4}s` }}>
                {['ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᚲ','ᚷ','ᚹ','ᚺ','ᚻ'][i%10]}
              </div>
            ))}
          </div>
        );
      case SkinType.OCEANIC:
        return (
          <div className="absolute inset-0 bg-sky-600 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950" />
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] animate-[grid-scroll_20s_linear_infinite]" />
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute bg-white/10 rounded-full filter blur-xl animate-float-slow" style={{ width: 80+i*30, height: 80+i*30, left: `${(i*23)%100}%`, top: `${(i*17)%100}%`, animationDelay: `${i*1.1}s` }} />
            ))}
          </div>
        );
      case SkinType.ARCADE:
        return (
          <div className="absolute inset-0 bg-[#0d0221] overflow-hidden">
            {/* Retro Sun */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-b from-[#ff00ff] to-[#ffcd47] animate-[synth-sun_4s_ease-in-out_infinite] [mask-image:linear-gradient(to_bottom,black_70%,transparent_70%,transparent_75%,black_75%,black_80%,transparent_80%,transparent_85%,black_85%)]" />
            {/* Scrolling Grid Perspective */}
            <div className="absolute bottom-0 w-full h-[40%] [background-image:linear-gradient(#ff00ff44_2px,_transparent_2px),_linear-gradient(90deg,#ff00ff44_2px,_transparent_2px)] [background-size:40px_40px] [transform:perspective(150px)_rotateX(60deg)] animate-[grid-scroll_2s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        );
      case SkinType.GLITCH:
        return (
          <div className="absolute inset-0 bg-black overflow-hidden">
            {/* VHS Scanlines */}
            <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(0deg,#fff,#fff_2px,transparent_2px,transparent_4px)]" />
            {/* Color Bursts */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="absolute bg-red-600/10 mix-blend-screen animate-glitch" 
                style={{ width: '100%', height: '10%', top: `${i*20}%`, animationDelay: `${i*0.5}s` }} />
            ))}
            <div className="absolute h-[1px] w-full bg-white/20 animate-scanline" />
          </div>
        );
      case SkinType.MINIMAL:
        return (
          <div className="absolute inset-0 bg-white overflow-hidden">
            {/* Bauhaus Geometric Shapes */}
            <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#ff3b3b] rounded-full mix-blend-multiply opacity-20 animate-[float-slow_10s_infinite]" />
            <div className="absolute bottom-[10%] right-[-30px] w-80 h-40 bg-[#ffcd47] -rotate-12 mix-blend-multiply opacity-20 animate-[float-slow_15s_infinite]" />
            <div className="absolute top-[40%] right-[10%] w-32 h-32 bg-[#007aff] mix-blend-multiply opacity-20 animate-[float-slow_12s_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px] opacity-5" />
          </div>
        );
      case SkinType.MATTE:
        return (
          <div className="absolute inset-0 bg-[#e0e0e0] overflow-hidden">
            {/* Floating Soft Blocks */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="absolute bg-[#e0e0e0] shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff] rounded-[40px] animate-float-slow"
                style={{ width: 200, height: 200, left: `${i*25}%`, top: `${i*15}%`, animationDelay: `${i*2}s` }} />
            ))}
          </div>
        );
      default: return null;
    }
  }, [activeSkin]);

  const getButtonStyles = (id: string) => {
    const isLoading = loadingId === id;
    const base = "group w-full min-h-[64px] px-8 rounded-2xl flex items-center justify-center font-bold transition-all duration-300 relative overflow-hidden active:scale-95 shadow-lg select-none";
    
    switch (activeSkin) {
      case SkinType.GLASS:
        return `${base} bg-white/30 backdrop-blur-3xl border border-white/40 text-slate-900 hover:shadow-xl hover:translate-y-[-4px]`;
      case SkinType.NEON:
        return `${base} bg-transparent border-2 border-cyan-500 text-cyan-400 [box-shadow:0_0_10px_#06b6d444] hover:[box-shadow:0_0_30px_#06b6d488] hover:bg-cyan-500/10`;
      case SkinType.GRADIENT:
        return `${base} bg-indigo-600 text-white border-none hover:shadow-indigo-500/50 hover:scale-105 active:scale-100`;
      case SkinType.PARCHMENT:
        return `${base} rounded-none bg-transparent border-2 border-[#5c4a31] text-[#4a3721] font-serif tracking-widest hover:bg-[#5c4a31] hover:text-[#e6d5b8] shadow-none`;
      case SkinType.EMERALD:
        return `${base} bg-[#0b1a0e]/80 border border-emerald-500/40 text-emerald-400 shadow-[inset_0_0_20px_#10b98122] hover:shadow-[0_0_30px_#10b98188] hover:text-emerald-200`;
      case SkinType.OCEANIC:
        return `${base} rounded-[3rem] bg-white/20 backdrop-blur-md text-white border-2 border-white/40 animate-[fluid-blob_6s_infinite] hover:bg-white/40`;
      case SkinType.ARCADE:
        return `${base} rounded-none border-4 border-[#00ffff] bg-black text-[#00ffff] [box-shadow:8px_8px_0_#ff00ff] hover:[box-shadow:2px_2px_0_#ff00ff] hover:translate-x-1.5 hover:translate-y-1.5 active:[box-shadow:0_0_0]`;
      case SkinType.GLITCH:
        return `${base} rounded-none bg-white text-black font-mono tracking-tighter hover:bg-red-600 hover:text-white transition-colors duration-75 border-b-4 border-black active:translate-y-1 active:border-b-0`;
      case SkinType.MINIMAL:
        return `${base} bg-black text-white rounded-none tracking-widest hover:pl-12 shadow-none border border-black hover:bg-white hover:text-black`;
      case SkinType.MATTE:
        return `${base} bg-[#e0e0e0] shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] text-slate-600 hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:shadow-inner`;
      default: return base;
    }
  };

  return (
    <div className="h-full w-full relative flex flex-col items-center pt-24 px-12 pb-20 overflow-x-hidden">
      {Background}

      <div className="relative z-10 w-full flex flex-col items-center h-full">
        {/* Profile Avatar */}
        <div className="mb-14 group cursor-pointer relative">
          <div className={`w-40 h-40 rounded-full overflow-hidden border-4 transition-all duration-700 group-hover:scale-105 ${
            activeSkin === SkinType.NEON ? 'border-cyan-400 shadow-[0_0_60px_rgba(6,182,212,0.8)]' :
            activeSkin === SkinType.ARCADE ? 'border-[#ff00ff] [box-shadow:14px_14px_0_#00ffff] rounded-none rotate-3' :
            activeSkin === SkinType.PARCHMENT ? 'border-[#5c4a31] filter sepia(0.8) contrast-125' :
            activeSkin === SkinType.GLITCH ? 'border-white grayscale brightness-125 skew-x-[-12deg]' :
            activeSkin === SkinType.MINIMAL ? 'border-black' :
            'border-white shadow-2xl'
          }`}>
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeSkin}&backgroundColor=transparent`} alt="Alex" className="w-full h-full scale-125 object-cover" />
          </div>
          {activeSkin === SkinType.NEON && <div className="absolute -inset-6 border border-cyan-400/30 rounded-full animate-ping pointer-events-none" />}
        </div>

        {/* Name Heading */}
        <h1 className={`text-4xl font-black mb-16 tracking-tighter text-center transition-all duration-700 relative ${
          activeSkin === SkinType.NEON ? 'text-white drop-shadow-[0_0_20px_cyan]' :
          activeSkin === SkinType.ARCADE ? 'text-[#ffcd47] uppercase scale-110 [text-shadow:4px_4px_0_#ff00ff]' :
          activeSkin === SkinType.PARCHMENT ? 'text-[#4a3721] font-serif uppercase tracking-[0.3em] font-black' :
          activeSkin === SkinType.EMERALD ? 'text-emerald-400 drop-shadow-[0_0_12px_#10b981]' :
          activeSkin === SkinType.GLITCH ? 'text-white italic animate-[text-glitch_1s_infinite]' :
          activeSkin === SkinType.MINIMAL ? 'text-black border-y-2 border-black py-2 px-6' :
          'text-slate-900'
        }`}>
          Alex Rivera
        </h1>

        {/* Link Stack */}
        <div className="w-full space-y-7 flex-1 max-w-[340px]">
          {BUTTONS.map((btn) => (
            <button
              key={btn.id}
              onClick={(e) => handleButtonClick(e, btn.id)}
              className={getButtonStyles(btn.id)}
            >
              {/* Ripple Effect (Local to Button) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit">
                {ripples.filter(r => r.buttonId === btn.id).map(r => (
                  <span 
                    key={r.id} 
                    className={`absolute rounded-full animate-[ripple_0.9s_ease-out] ${
                      activeSkin === SkinType.ARCADE ? 'bg-[#ff00ff]/60' :
                      activeSkin === SkinType.GLITCH ? 'bg-cyan-500/60' :
                      activeSkin === SkinType.EMERALD ? 'bg-emerald-300/40' :
                      'bg-white/50'
                    }`}
                    style={{ left: r.x, top: r.y, width: 25, height: 25, transform: 'translate(-50%, -50%)' }}
                  />
                ))}
              </div>

              <span className={`relative z-10 transition-all duration-300 ${loadingId === btn.id ? 'opacity-20 translate-x-10' : ''}`}>
                {btn.label}
              </span>

              {loadingId === btn.id && (
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 border-3 border-current border-t-transparent rounded-full animate-spin" />
              )}
              
              {/* Extra Interactive Icons */}
              {activeSkin === SkinType.PARCHMENT && <span className="absolute left-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-[-10px]">🕯️</span>}
              {activeSkin === SkinType.ARCADE && <span className="absolute right-5 animate-pulse hidden group-hover:block">COIN</span>}
              {activeSkin === SkinType.EMERALD && <span className="absolute right-4 text-emerald-500/40 rotate-12 group-hover:rotate-0 transition-transform">🐍</span>}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-14 text-center">
          <p className={`text-[10px] font-black uppercase tracking-[0.6em] transition-all duration-500 ${
            activeSkin === SkinType.NEON ? 'text-cyan-400 opacity-70' :
            activeSkin === SkinType.PARCHMENT ? 'text-[#4a3721] opacity-60 font-serif italic' :
            activeSkin === SkinType.ARCADE ? 'text-[#00ffff] [text-shadow:2px_2px_0_#ff00ff]' :
            activeSkin === SkinType.MINIMAL ? 'text-black font-bold' :
            'text-slate-500 opacity-40'
          }`}>
            {activeSkin === SkinType.PARCHMENT ? "I solemnly swear" : activeSkin === SkinType.ARCADE ? "GAME OVER" : "VIRTUAL IDENTITY"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioScreen;
