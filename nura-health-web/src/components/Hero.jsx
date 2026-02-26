import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-text', {
                y: 80,
                opacity: 0,
                duration: 1.4,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });

            gsap.fromTo('.hero-bg',
                { scale: 1.05 },
                { scale: 1, duration: 2.5, ease: 'power2.out' }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="relative min-h-[100dvh] w-full overflow-hidden flex items-center pt-24 pb-12"
        >
            {/* Background Image & Gradient Overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="hero-bg absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d")' }}
                />
                {/* Refined gradient: dark at bottom/left for text readability, blending to moss/transparent */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-moss/30 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="md:w-3/4 lg:w-2/3">
                    <p className="hero-text text-moss text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6">
                        A Nova Fronteira Clínica
                    </p>
                    <h1 className="flex flex-col gap-1 md:gap-3 mb-8">
                        <span className="hero-text font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-cream leading-tight">
                            A natureza é o
                        </span>
                        <span className="hero-text font-serif italic text-6xl md:text-8xl lg:text-[10rem] text-clay leading-none md:-ml-2">
                            Algoritmo.
                        </span>
                    </h1>
                    <p className="hero-text text-cream/80 text-lg md:text-xl lg:text-2xl font-sans max-w-2xl leading-relaxed mb-12 font-light">
                        Nós decodificamos a complexidade orgânica para entregar a máxima otimização da fisiologia humana. O que era instinto, agora é ciência de precisão.
                    </p>

                    <div className="hero-text flex flex-wrap gap-6 items-center">
                        <button className="magnetic-btn bg-moss hover:bg-moss/90 text-cream px-8 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(42,59,44,0.3)] hover:shadow-[0_0_40px_rgba(42,59,44,0.5)] flex items-center gap-3">
                            <span>Iniciar Diagnóstico</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
                        </button>
                        <a href="#philosophy" className="text-sm font-semibold text-cream hover:text-clay transition-colors border-b border-transparent hover:border-clay pb-1 uppercase tracking-wider">
                            Ler Manifesto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
