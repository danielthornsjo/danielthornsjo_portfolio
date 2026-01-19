import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import {
    FaReact, FaNodeJs, FaGitAlt, FaJs, FaHtml5, FaCss3Alt, FaPhp, FaDocker, FaWordpress,
    FaFigma
} from 'react-icons/fa';
import {
    SiTailwindcss, SiTypescript, SiMysql, SiMongodb, SiExpress, SiFigma, SiTrello, SiInsomnia
} from 'react-icons/si';

const skillCategories = [
    {
        category: "Frontend & Design",
        skills: [
            { name: "React (SPA)", icon: <FaReact className="text-[#61DAFB]" /> },
            { name: "JavaScript / TS", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "Tailwind / CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
            { name: "UI/UX & Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
            { name: "HTML5/Markdown", icon: <FaHtml5 className="text-[#E34F26]" /> },
        ]
    },
    {
        category: "Backend & Databas",
        skills: [
            { name: "Node.js / Express", icon: <SiExpress /> },
            { name: "MySQL / SQL", icon: <SiMysql className="text-[#4479A1]" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
            { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
            { name: "REST API / CRUD", icon: <SiInsomnia className="text-[#4000BF]" /> },
        ]
    },
    {
        category: "Verktyg & Miljö",
        skills: [
            { name: "Git / GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
            { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
            { name: "WordPress", icon: <FaWordpress /> },
            { name: "Trello (Agilt)", icon: <SiTrello className="text-[#0052CC]" /> },
        ]
    },
    {
        category: "Design & UX/UI",
        skills: [
            { name: "Figma (Prototyping)", icon: <SiFigma className="text-[#F24E1E]" /> },
            { name: "Användarpsykologi", icon: <BiCodeAlt /> },
            { name: "Responsiv Layout", icon: <FaCss3Alt className="text-[#1572B6]" /> },
            { name: "Designspråk", icon: <FaHtml5 className="text-[#E34F26]" /> },
        ]
    },
];

function TechStack() {
    return (
        <section id="skills" className="w-full py-24 bg-secondary-bg flex items-center">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">
                    <p className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-2">// Kompetensområden</p>
                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Från skiss till <span className="text-primary italic">publicerad kod</span>.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {skillCategories.map((group, idx) => (
                        <div key={idx} className="bg-white/2 border border-white/5 p-8 rounded-3xl hover:border-primary/30 transition-all duration-500 group">
                            <h4 className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-10 group-hover:text-white">
                                {group.category}
                            </h4>

                            <div className="space-y-6">
                                {group.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-4 group/item">
                                        <div className="text-2xl text-gray-400 group-hover/item:scale-110 group-hover/item:text-white transition-all">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover/item:text-primary transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
                    <div className="space-y-4">
                        <h5 className="text-white font-semibold">Systemarkitektur & Workflow</h5>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Erfarenhet av att bygga skalbara **REST API:er**, hantera realtidskommunikation och arbeta med **Objektorienterad programmering**. Jag är van vid versionshantering i team via Git och att arbeta med agila metoder i Trello.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-white font-semibold">UX/UI & Strategi</h5>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Fokus på att skapa tillgängliga, responsiva gränssnitt baserat på psykologin kring användarbeteende. Jag omsätter designskisser från **Figma** till färdiga, högpresterande applikationer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;