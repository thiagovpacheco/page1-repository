import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Utility to split text into words for animation
const SplitText = ({ text, className }) => {
    return (
        <span className="flex flex-wrap gap-x-3 gap-y-1">
            {text.split(' ').map((word, i) => (
                <span key={i} className="overflow-hidden inline-block text-reveal-container">
                    <span className={`inline-block text-reveal-word ${className}`}>{word}</span>
                </span>
            ))}
        </span>
    );
};

export default function Philosophy() {
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Split text reveal
            gsap.from('.text-reveal-word', {
                y: '100%',
                opacity: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="philosophy"
            className="relative min-h-[120vh] w-full bg-charcoal text-cream overflow-hidden flex flex-col justify-center py-32"
        >
            {/* Background Parallax */}
            <div
                ref={bgRef}
                className="absolute top-[-20%] left-0 w-full h-[140%] opacity-20 pointer-events-none bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09")' }}
            >
                <div className="absolute inset-0 bg-charcoal/80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col gap-32">
                    {/* Question 1 */}
                    <div className="md:w-3/4">
                        <p className="font-mono text-sm tracking-widest text-moss/80 uppercase mb-8">
                            O Paradigma Antigo
                        </p>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium text-cream/50 leading-tight">
                            <SplitText text="A medicina moderna pergunta: O que está errado?" className="text-cream/50" />
                        </h2>
                    </div>

                    {/* Question 2 */}
                    <div className="md:w-3/4 self-end text-right">
                        <p className="font-mono text-sm tracking-widest text-clay uppercase mb-8">
                            Nossa Abordagem
                        </p>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-clay leading-tight">
                            <SplitText text="Nós perguntamos: O que é ótimo?" className="text-clay" />
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
