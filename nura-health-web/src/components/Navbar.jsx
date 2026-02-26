import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full transition-all duration-500">
            <nav
                className={`flex items-center justify-between w-full max-w-5xl rounded-[3rem] px-8 py-4 transition-all duration-500 ${scrolled
                        ? 'bg-white/60 backdrop-blur-md border border-white/20 shadow-lg text-moss'
                        : 'bg-transparent text-white'
                    }`}
            >
                <div className="font-sans font-bold text-xl tracking-tight">Nura Health</div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#philosophy" className="hover:opacity-70 transition-opacity">Filosofia</a>
                    <a href="#features" className="hover:opacity-70 transition-opacity">Tecnologia</a>
                    <a href="#protocol" className="hover:opacity-70 transition-opacity">Protocolo</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className={`hidden md:block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${scrolled ? 'bg-moss text-cream hover:bg-moss/90' : 'bg-white text-moss hover:bg-white/90'
                        }`}>
                        Acesso
                    </button>
                    <button className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </div>
    );
}
