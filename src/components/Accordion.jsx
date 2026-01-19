import { useState } from "react";

function Accordion({ items }) {
    const [isExpanded, setIsExpanded] = useState(null);

    if (!items) return null;

    return (
        <div className="flex flex-col gap-3">
            {items.map((item, index) => {
                const isOpen = isExpanded === index;
                return (
                    <div
                        key={index}
                        className={`border transition-all duration-300 rounded-lg overflow-hidden ${isOpen ? "border-primary bg-primary/5" : "border-white/10 hover:border-white/30"
                            }`}
                    >
                        <button
                            className="w-full flex justify-between items-center p-4 text-left"
                            onClick={() => setIsExpanded(isOpen ? null : index)}
                        >
                            <span className={`font-medium ${isOpen ? "text-primary" : "text-gray-300"}`}>
                                {item.title}
                            </span>
                            <span className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-gray-500"}`}>
                                ▼
                            </span>
                        </button>

                        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden">
                                <p className="p-4 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Accordion;