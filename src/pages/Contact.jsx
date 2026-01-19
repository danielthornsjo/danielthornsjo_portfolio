import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function ContactAndFooter() {
    return (
        <footer id="contact" className="w-full bg-bg pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
                    <div className="max-w-xl">
                        <h2 className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-4">
                            // Kontakt
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Sugen på att samarbeta? <br />
                            <span className="text-gray-500">Hör av dig!</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Jag söker just nu nya utmaningar som junior utvecklare.
                            Oavsett om du har en fråga eller bara vill säga hej,
                            ska jag göra mitt bästa för att svara!
                        </p>
                        <a
                            href="mailto:danielthornsjo@live.se"
                            className="inline-block px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary/10 transition-all rounded-md font-mono text-lg"
                        >
                            Säg Hej
                        </a>
                    </div>

                    <div className="flex flex-col gap-6 text-xl">
                        <a href="https://github.com/danielthornsjo" target='_blank' className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                            <FaGithub className="group-hover:text-primary" />
                            <span className="text-sm font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-300">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-th%C3%B6rnsj%C3%B6-2b8a112a5/" target='_blank' className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                            <FaLinkedin className="group-hover:text-primary" />
                            <span className="text-sm font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-300">LinkedIn</span>
                        </a>
                        <a href="mailto:danielthornsjo@live.se" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                            <FaEnvelope className="group-hover:text-primary" />
                            <span className="text-sm font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-300">E-post</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
                    <p className="text-gray-600 text-sm font-mono">
                        © 2026 Daniel Thörnsjö. Byggd med React & Tailwind.
                    </p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <span className="text-gray-600 text-xs font-mono">UI/UX i Figma</span>
                        <span className="text-gray-600 text-xs font-mono">Kod i VS Code</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default ContactAndFooter;