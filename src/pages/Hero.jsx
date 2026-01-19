import { FaChevronDown } from "react-icons/fa";

function Hero() {
    return (
        <>
            <section id="hero" className="h-screen w-full bg-secondary-bg flex flex-col justify-center mt-12 px-6 mx-auto">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-primary font-mono tracking-tighter mb-4 text-lg md:text-2xl">
                        Hej, mitt namn är
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                        Daniel. <br />
                        <span className="text-gray-500">Jag bygger digitala upplevelser.</span>
                    </h1>
                    <p className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed">
                        Jag är en fullstack-utvecklare specialiserad på att bygga (och ibland designa)
                        exceptionella digitala system. Just nu fokuserar jag på tillgängliga lösningar
                        som **Karstorps Koloniförening**.
                    </p>
                    <div className="flex gap-4 mb-32">
                        <a href="#portfolio" className="px-8 py-4 border border-primary text-primary hover:bg-primary/10 transition-all rounded-md font-mono">
                            Se mina projekt
                        </a>
                        <a href="/resume.pdf" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white transition-all rounded-md font-mono">
                            Ladda ner CV
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-50 hover:opacity-100 transition-opacity">
                    <a href="#portfolio" className="flex flex-col items-center gap-2">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
                        <i className="fa-solid fa-angles-down animate-bounce"></i>
                    </a>
                </div>
            </section>
        </>
    );
}

export default Hero