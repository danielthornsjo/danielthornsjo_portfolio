import { useEffect, useState } from "react"
import Nav from "./Nav"

function Header() {
    const [renderNav, setRenderNav] = useState(false);
    const [rotateBurger, setRotateBurger] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setRenderNav(!renderNav);
        setRotateBurger(!rotateBurger);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (renderNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [renderNav]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled
                    ? "bg-bg/80 backdrop-blur-md border-b border-white/5 py-3"
                    : "bg-secondary-bg py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <a href="#" className="text-2xl font-bold tracking-tighter text-white group">
                        Daniel<span className="text-primary group-hover:animate-pulse">.</span>T
                    </a>

                    <Nav
                        renderNav={renderNav}
                        setRenderNav={setRenderNav}
                        setRotateBurger={setRotateBurger}
                    />

                    <button
                        onClick={toggleMenu}
                        className="relative z-50 flex flex-col gap-1.5 lg:hidden focus:outline-none"
                        aria-label="Meny"
                    >
                        <span className={`h-0.5 w-7 bg-white transition-all duration-300 ${rotateBurger ? "rotate-45 translate-y-2" : ""
                            }`}></span>
                        <span className={`h-0.5 w-7 bg-white transition-all duration-300 ${rotateBurger ? "opacity-0" : ""
                            }`}></span>
                        <span className={`h-0.5 w-7 bg-white transition-all duration-300 ${rotateBurger ? "-rotate-45 -translate-y-2" : ""
                            }`}></span>
                    </button>

                    {renderNav && (
                        <div
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
                        />
                    )}
                </div>
            </header>
        </>
    )
}

export default Header