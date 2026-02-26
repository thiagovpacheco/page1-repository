import { useState, useEffect, useRef } from 'react';
import { Activity, Beaker, Fingerprint, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// C1: Diagnostic Shuffler
function DiagnosticShuffler() {
    const [cards, setCards] = useState([
        { id: 1, label: "Idade Epigenética", value: "34.2 Anos", icon: Fingerprint, delay: '0s' },
        { id: 2, label: "Score do Microbioma", value: "98/100", icon: Beaker, delay: '0.1s' },
        { id: 3, label: "Otimização de Cortisol", value: "Nível Ideal", icon: Activity, delay: '0.2s' }
    ]);
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-64 w-full flex items-center justify-center p-6 bg-moss/5 rounded-[2rem] border border-moss/10" ref={containerRef}>
            <div className="absolute top-6 left-6 font-mono text-xs text-moss/60 uppercase tracking-wider font-bold">Diagnóstico Contínuo</div>
            {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                    <div
                        key={card.id}
                        className="absolute w-full max-w-[280px] bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-moss/5 transition-all duration-[800ms] flex items-center gap-4"
                        style={{
                            transform: `translateY(${index * 12}px) scale(${1 - index * 0.05})`,
                            zIndex: 3 - index,
                            opacity: 1 - index * 0.2,
                            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-moss">
                            <Icon size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-moss/50 uppercase tracking-widest mb-1">{card.label}</p>
                            <p className="font-sans font-bold text-lg text-charcoal">{card.value}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

// C2: Telemetry Typewriter
function TelemetryTypewriter() {
    const messages = [
        "Otimizando Ritmo Circadiano...",
        "Calibrando Frequência Neural...",
        "Sintetizando Dados Genômicos..."
    ];
    const [text, setText] = useState("");
    const [msgIndex, setMsgIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentMsg = messages[msgIndex];
        let timing = 100;

        if (!isDeleting && text === currentMsg) {
            timing = 2000;
            setTimeout(() => setIsDeleting(true), timing);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setMsgIndex((prev) => (prev + 1) % messages.length);
            timing = 500;
        } else {
            const nextText = isDeleting
                ? currentMsg.substring(0, text.length - 1)
                : currentMsg.substring(0, text.length + 1);

            timing = isDeleting ? 30 : 60;

            const timeout = setTimeout(() => {
                setText(nextText);
            }, timing);
            return () => clearTimeout(timeout);
        }
    }, [text, isDeleting, msgIndex, messages]);

    return (
        <div className="h-64 w-full bg-charcoal rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-moss/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="flex justify-between items-center relative z-10">
                <div className="font-mono text-xs text-cream/40 uppercase tracking-wider">Stream Neural</div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-clay animate-pulse" />
                    <span className="text-[10px] text-clay/80 uppercase tracking-widest font-mono">Live Feed</span>
                </div>
            </div>

            <div className="font-mono text-cream/90 text-sm md:text-base leading-relaxed relative z-10">
                <span className="text-moss/60 mr-2">{'>'}</span>
                {text}
                <span className="inline-block w-2 bg-clay h-4 ml-1 animate-pulse align-middle" />
            </div>

            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative z-10">
                <div className="h-full bg-moss/40 w-1/3 rounded-full animate-[slide_2s_ease-in-out_infinite_alternate]" />
            </div>
        </div>
    );
}

// C3: Mock Cursor Protocol Scheduler
function ProtocolScheduler() {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const dayRef = useRef(null);
    const saveRef = useRef(null);
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [activeDay, setActiveDay] = useState(-1);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const getTargetPos = (ref) => {
                if (!ref.current || !containerRef.current) return { x: 0, y: 0 };
                const parentRect = containerRef.current.getBoundingClientRect();
                const childRect = ref.current.getBoundingClientRect();
                return {
                    x: childRect.left - parentRect.left + childRect.width / 2 - 2,
                    y: childRect.top - parentRect.top + childRect.height / 2 - 2
                };
            };

            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: false, repeatRefresh: true });

            // Reset state
            tl.call(() => { setActiveDay(-1); setSaved(false); });

            // Move in (dynamic x/y depending on target positions)
            tl.fromTo(cursorRef.current,
                { x: () => (containerRef.current ? containerRef.current.offsetWidth : 250), y: 200, opacity: 0 },
                { x: () => getTargetPos(dayRef).x + 40, y: () => getTargetPos(dayRef).y + 40, opacity: 1, duration: 1, ease: 'power3.out' }
            );

            // Move to Tuesday (index 2)
            tl.to(cursorRef.current, { x: () => getTargetPos(dayRef).x, y: () => getTargetPos(dayRef).y, duration: 0.8, ease: 'power2.inOut' });

            // Click simulation
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.call(() => setActiveDay(2));
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

            // Move to Save button
            tl.to(cursorRef.current, { x: () => getTargetPos(saveRef).x, y: () => getTargetPos(saveRef).y, duration: 0.6, ease: 'power2.inOut', delay: 0.4 });

            // Click Save
            tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
            tl.call(() => setSaved(true));
            tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

            // Fade out
            tl.to(cursorRef.current, { x: () => getTargetPos(saveRef).x + 40, y: () => getTargetPos(saveRef).y + 40, opacity: 0, duration: 0.8, ease: 'power2.in' });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="h-64 w-full bg-cream rounded-[2rem] border border-moss/10 p-8 flex flex-col justify-between relative overflow-hidden" ref={containerRef}>
            <div className="font-mono text-xs text-moss/60 uppercase tracking-wider font-bold">Regime Adaptativo</div>

            <div className="grid grid-cols-7 gap-2 my-auto">
                {days.map((d, i) => (
                    <div
                        key={i}
                        ref={i === 2 ? dayRef : null}
                        className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeDay === i
                            ? 'bg-moss text-cream scale-110 shadow-lg'
                            : 'bg-white text-moss/50 border border-moss/5'
                            }`}
                    >
                        {d}
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-4">
                <div ref={saveRef} className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${saved ? 'bg-moss/10 text-moss' : 'bg-white text-moss/50 border border-moss/10'
                    }`}>
                    {saved ? <><Check size={14} /> Protocolo Salvo</> : 'Salvar Regime'}
                </div>
            </div>

            {/* Mock Cursor SVG */}
            <div
                ref={cursorRef}
                className="absolute top-0 left-0 w-6 h-6 pointer-events-none z-50 origin-top-left drop-shadow-md"
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-charcoal">
                    <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.78 6.74 21.34L11.44 16.92C11.62 16.75 11.85 16.66 12.1 16.66H19.78C20.44 16.66 20.77 15.86 20.3 15.39L6.56 2.5C6.11 2.07 5.5 2.4 5.5 3.21Z" fill="currentColor" />
                </svg>
            </div>
        </div>
    );
}

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="features" ref={sectionRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-20 md:w-2/3">
                <h2 className="font-serif italic font-medium text-5xl md:text-7xl text-moss mb-6 leading-tight">
                    Dashboard de Micro-Inteligência
                </h2>
                <p className="font-sans text-lg text-charcoal/70 max-w-lg">
                    Nossos artefatos funcionais monitoram e otimizam sua biologia em tempo real. Uma fusão de telemetria médica e software interativo.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="feature-card">
                    <DiagnosticShuffler />
                </div>
                <div className="feature-card">
                    <TelemetryTypewriter />
                </div>
                <div className="feature-card">
                    <ProtocolScheduler />
                </div>
            </div>
        </section>
    );
}
