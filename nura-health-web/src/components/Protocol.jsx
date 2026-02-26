import { useEffect, useRef } from 'react';
import { Settings, Scan, Activity } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
    {
        title: "1. Mapeamento Genômico",
        desc: "Decodificamos sua assinatura biológica única para entender suas predisposições e capacidades ocultas.",
        Icon: Settings,
        color: "bg-moss text-cream",
        animLabel: "Sequenciamento DNA..."
    },
    {
        title: "2. Análise Bioquímica",
        desc: "Varredura completa de mais de 100 biomarcadores séricos, identificando gargalos metabólicos e hormonais.",
        Icon: Scan,
        color: "bg-clay text-cream",
        animLabel: "Escaneamento Celular..."
    },
    {
        title: "3. Otimização Contínua",
        desc: "Ajustes micro-direcionados em tempo real com base nos dados do seu wearable e feeling diário.",
        Icon: Activity,
        color: "bg-white text-moss",
        animLabel: "Telemetria Ativa..."
    }
];

export default function Protocol() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                // Sticky stacking effect
                if (i < cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.9,
                        filter: "blur(20px)",
                        opacity: 0.5,
                        ease: "none",
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: "top bottom",
                            end: "top top",
                            scrub: true,
                        }
                    });
                }
            });

            // Simple loop animations for artifacts
            gsap.to('.gear-spin', { rotation: 360, repeat: -1, duration: 8, ease: 'linear' });
            gsap.to('.scan-line', { top: '100%', repeat: -1, yoyo: true, duration: 2, ease: 'sine.inOut' });
            gsap.to('.pulse-path', { scale: 1.1, opacity: 0.5, repeat: -1, yoyo: true, duration: 1 });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" className="relative bg-cream py-24" ref={containerRef}>
            <div className="max-w-4xl mx-auto px-6 mb-20">
                <h2 className="text-4xl md:text-6xl font-sans font-bold text-moss tracking-tight text-center">
                    O Arquivo de Protocolos
                </h2>
            </div>

            <div className="flex flex-col gap-12 max-w-5xl mx-auto px-6 pb-24 relative">
                {protocols.map((p, i) => (
                    <div
                        key={i}
                        className={`protocol-card sticky top-24 w-full h-[70vh] min-h-[500px] rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center justify-between shadow-2xl origin-top ${p.color}`}
                        style={{ zIndex: i + 1 }}
                    >
                        <div className="md:w-1/2 flex flex-col justify-center h-full">
                            <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center mb-8">
                                <p.Icon size={32} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-serif italic font-semibold mb-6">
                                {p.title}
                            </h3>
                            <p className="text-lg md:text-xl font-sans opacity-80 leading-relaxed max-w-lg">
                                {p.desc}
                            </p>
                        </div>

                        {/* Artifact Visualizer */}
                        <div className="md:w-1/2 w-full h-64 md:h-full bg-black/5 rounded-[2rem] border border-white/10 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute top-6 left-6 font-mono text-xs uppercase tracking-wider opacity-60">Status</div>
                            <div className="absolute top-6 right-6 font-mono text-xs uppercase tracking-wider bg-black/10 px-3 py-1 rounded-full">{p.animLabel}</div>

                            {/* Unique animations based on index */}
                            {i === 0 && (
                                <div className="relative w-32 h-32">
                                    <Settings size={128} className="gear-spin absolute inset-0 opacity-20" />
                                    <Settings size={64} className="gear-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDirection: 'reverse' }} />
                                </div>
                            )}
                            {i === 1 && (
                                <div className="relative w-3/4 h-3/4 grid grid-cols-4 grid-rows-4 gap-2">
                                    <div className="scan-line absolute left-0 w-full h-1 bg-white/80 shadow-[0_0_10px_#fff] z-10" />
                                    {Array.from({ length: 16 }).map((_, j) => (
                                        <div key={j} className="bg-black/10 rounded-lg flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-white/20 pulse-path" style={{ animationDelay: `${j * 0.1}s` }} />
                                        </div>
                                    ))}
                                </div>
                            )}
                            {i === 2 && (
                                <div className="flex items-center gap-2">
                                    {Array.from({ length: 8 }).map((_, j) => (
                                        <div key={j} className="w-2 bg-moss/20 rounded-t-sm pulse-path" style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${j * 0.15}s` }} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
