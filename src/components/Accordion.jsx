// import { useState } from "react";

// function Accordion() {
//     const [isExpanded, setIsExpanded] = useState(null);

//     const handleAccordion = (id) => {
//         setIsExpanded(isExpanded === id ? null : id);
//     }

//     const accordionData = [
//         { id: 1, title: 'Rollbaserad åtkomst', content: "Lorem ipsum..." },
//         { id: 2, title: 'Databasdesign', content: "Här kan jag skriva om min databas..." },
//         { id: 3, title: "Frontend-utveckling", content: "Beskriv tekniker som React och Tailwind..." },
//         { id: 4, title: "Deployment", content: "Hur projektet lanserades..." }
//     ];

//     // Du måste ha en return här!
//     return (
//         <div className="flex flex-col"> {/* En container för att hålla ihop allt */}
//             {accordionData.map(accordion => {
//                 const isOpen = isExpanded === accordion.id;
//                 return (
//                     <div key={accordion.id} className={`border transition-colors duration-200 w-full cursor-pointer ${isOpen ? "border-primary bg-primary/5" : "border-gray-700 hover:border-primary/50"}`} onClick={() => handleAccordion(accordion.id)}>
//                         <div className="flex justify-between items-center p-3">
//                             <p className={`transition-colors duration-300 font-medium ${isOpen ? "text-primary" : "text-secondary"}`}>
//                                 {accordion.title}
//                             </p>
//                             <span className={`text-xl transition-transform duration-300 transform ${isOpen ? "rotate-135 text-primary" : "rotate-0 text-gray-500"}`}>
//                                 +
//                             </span>
//                         </div>

//                         <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
//                             <div className="overflow-hidden">
//                                 <p className="p-3 pt-2 text-accent text-sm leading-relaxed border-t border-primary/10 mt-1">
//                                     {accordion.content}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

// export default Accordion;

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