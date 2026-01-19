// // src/components/Nav.jsx
// import { navItems, iconMap } from "../data/navItems";

// export default function Nav({ renderNav, setRenderNav, setRotateBurger }) {
//     const handleNav = () => {
//         setRotateBurger(false);
//         setRenderNav(false);
//     };

//     return (
//         <nav
//             className={`
//         fixed w-[80%] h-screen bg-secondary-bg top-0 right-0 
//         flex items-center justify-center 
//         ${renderNav ? "translate-x-0" : "translate-x-full"} 
//         transition duration-300 ease-in-out 
//         lg:relative lg:w-auto lg:h-auto lg:left-0 lg:translate-x-0`}>
//             <ul className="flex flex-col gap-8 lg:gap-10 xl:gap-16 lg:flex-row">
//                 {navItems.map((item) => {
//                     const Icon = iconMap[item.icon];
//                     return (
//                         <li key={item.id} onClick={handleNav}>
//                             <a
//                                 href={item.href}
//                                 className="text-accent flex gap-4 items-center cursor-pointer text-2xl lg:text-lg"
//                                 aria-label={item.navText}
//                             >
//                                 <Icon aria-hidden="true" className="text-2xl lg:text-lg" />
//                                 <p>{item.navText}</p>
//                             </a>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </nav>
//     );
// }

import { navItems, iconMap } from "../data/navItems";

export default function Nav({ renderNav, setRenderNav, setRotateBurger }) {
    const handleNav = () => {
        setRotateBurger(false);
        setRenderNav(false);
    };

    return (
        <nav
            className={`fixed lg:inset-auto h-screen lg:h-auto w-[85%] lg:w-auto 
    bg-secondary-bg/95 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none
    top-0 right-0 z-40
    flex items-center justify-center 
    ${renderNav ? "translate-x-0 visible" : "translate-x-full invisible lg:visible"} 
    transition-all duration-500 ease-in-out
    lg:relative lg:translate-x-0 border-l border-white/10 lg:border-none shadow-2xl lg:shadow-none`}
        >

            <ul className="flex flex-col gap-10 lg:gap-8 xl:gap-12 lg:flex-row items-start lg:items-center">
                {navItems.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                        <li key={item.id} onClick={handleNav} className="group relative">
                            <a
                                href={item.href}
                                className="flex gap-4 items-center cursor-pointer transition-all duration-300"
                                aria-label={item.navText}
                            >
                                {/* Ikon med cirkel-bakgrund på mobil, ren på desktop */}
                                <div className="p-3 lg:p-0 rounded-full bg-white/5 lg:bg-transparent group-hover:bg-primary/10 lg:group-hover:bg-transparent transition-colors">
                                    <Icon className="text-2xl lg:text-lg text-primary lg:text-gray-400 group-hover:text-primary transition-colors duration-300" />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-2xl lg:text-sm font-mono uppercase tracking-widest text-white lg:text-gray-400 group-hover:text-white transition-colors">
                                        {item.navText}
                                    </span>
                                    {/* Den lilla cyanblå linjen under länken på desktop */}
                                    <span className="hidden lg:block h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}