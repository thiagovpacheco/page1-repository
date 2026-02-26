import { CheckCircle2, ArrowRight } from 'lucide-react';

const plans = [
    {
        name: "Foundation",
        price: "$290",
        period: "/mês",
        desc: "Acesso base ao ecossistema de dados clínicos.",
        bg: "bg-white",
        text: "text-charcoal",
        btn: "bg-charcoal text-white hover:bg-moss",
        features: ["Integração Wearables API", "Dashboard Clínico Básico", "1 Consulta Trimestral", "Acesso aos Protocolos Open-Source"]
    },
    {
        name: "Performance",
        price: "$850",
        period: "/mês",
        desc: "Para quem busca a fronteira da otimização humana.",
        bg: "bg-moss scale-105 shadow-[0_20px_40px_rgba(46,64,54,0.3)] z-10",
        text: "text-cream",
        btn: "bg-clay text-cream hover:bg-clay/90 scale-105 shadow-xl",
        features: ["Tudo do Foundation", "Sequenciamento Genômico Anual", "Biomarcadores Séricos (Mensal)", "Chat 24/7 com Médicos Especialistas", "Acesso a Nootrópicos Exclusivos"],
        popular: true
    },
    {
        name: "Longevity",
        price: "$2.5k",
        period: "/mês",
        desc: "Acompanhamento hiper-personalizado e presencial.",
        bg: "bg-charcoal",
        text: "text-cream",
        btn: "bg-white text-charcoal hover:bg-cream",
        features: ["Tudo do Performance", "Gestor de Saúde Dedicado", "Terapia Epigenética", "Acesso VIP as Clínicas Físicas", "Equipamentos Home-Lab Inclusos"]
    }
];

export default function Footer() {
    return (
        <>
            <section className="py-32 px-6 md:px-12 bg-cream" id="membership">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 md:w-2/3 mx-auto">
                        <h2 className="text-4xl md:text-6xl font-serif italic font-semibold text-moss mb-6">
                            O Acesso à Elite Orgânica
                        </h2>
                        <p className="font-sans text-lg text-charcoal/70">
                            Nossa capacidade de atendimento é estritamente limitada para garantir a precisão milimétrica em cada paciente.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {plans.map((plan, i) => (
                            <div key={i} className={`rounded-[3rem] p-10 transition-transform hover:-translate-y-2 duration-500 flex flex-col h-full border border-black/5 ${plan.bg} ${plan.text}`}>
                                {plan.popular && (
                                    <div className="mb-6 font-mono text-xs font-bold text-clay uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
                                        Mais Escolhido
                                    </div>
                                )}
                                <h3 className="text-3xl font-sans font-bold mb-2">{plan.name}</h3>
                                <p className="opacity-70 text-sm mb-8 h-10">{plan.desc}</p>
                                <div className="mb-8">
                                    <span className="text-5xl font-sans font-bold tracking-tighter">{plan.price}</span>
                                    <span className="opacity-70 font-sans">{plan.period}</span>
                                </div>

                                <ul className="flex flex-col gap-4 mb-12 flex-grow">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3 opacity-90 text-sm">
                                            <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-full font-bold font-sans transition-all flex items-center justify-center gap-2 group ${plan.btn}`}>
                                    Requisitar Acesso
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Charcoal Footer */}
            <footer className="bg-charcoal text-cream pt-24 pb-12 px-6 md:px-12 rounded-t-[4rem] relative overflow-hidden mt-[-2rem] z-20">
                <div className="noise-overlay" />
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    <div className="md:w-1/3">
                        <div className="font-sans font-bold text-2xl tracking-tight mb-6">Nura Health</div>
                        <p className="opacity-60 text-sm mb-12 leading-relaxed">
                            Otimização clínica desenhada por algoritmos. Aperfeiçoada pela natureza.
                        </p>
                        <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-2xl w-fit border border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                            <span className="font-mono text-xs uppercase tracking-widest opacity-80 font-bold">System Operational</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12 md:w-1/2">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-clay mb-4">Utilidades</h4>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm">Laboratórios Parceiros</a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm">Estudos Clínicos (Open Data)</a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm">Manifesto</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-clay mb-4">Acesso</h4>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm">Login de Pacientes</a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm">Portal Médico</a>
                            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm">Privacidade de Dados HIPAA</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-xs">
                    <p>&copy; 2026 Nura Health Labs. All biological data encrypted.</p>
                    <div className="flex gap-4">
                        <a href="#">Instagram</a>
                        <a href="#">X / Twitter</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
