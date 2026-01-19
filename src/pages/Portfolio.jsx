import Accordion from '../components/Accordion.jsx';
import { projectData } from '../data/projects.js';

function Portfolio() {
    return (
        <section id="portfolio" className="bg-secondary-bg text-white py-24 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="mb-20 text-center lg:text-left">
                    <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-2">// Mitt arbete</h2>
                    <h1 className="text-5xl font-bold">Utvalda Projekt</h1>
                </div>

                <div className="space-y-40">
                    {projectData.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={project.id}
                                className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                            >
                                <div className="w-full lg:w-1/2 group">
                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-500 group-hover:-translate-y-2">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="rounded-lg shadow-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div>
                                        <span className="text-primary font-mono text-xs">{project.tagline}</span>
                                        <h3 className="text-4xl font-bold mt-2">{project.title}</h3>
                                    </div>

                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="pt-4">
                                        <Accordion items={project.details} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-50 hover:opacity-100 transition-opacity">
                <a href="#portfolio" className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
                    <i className="fa-solid fa-angles-down animate-bounce"></i>
                </a>
            </div>
        </section>
    );
}

export default Portfolio;