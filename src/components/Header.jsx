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

    return (
        <>
            {/* <header className="px-6 sticky bg-secondary-bg top-0 p-4 md:p-4 lg:py-4 z-10 transition duration-500 ease-in-out">
                <div className="flex justify-between mx-auto items-center font-mono max-w-7xl">
                    <h1 className="text-2xl text-accent tracking-wider">Daniel Thörnsjö</h1>
                    <div className="flex flex-col gap-0.5 items-end z-10 py-2 cursor-pointer lg:hidden" onClick={handleNav}>
                        <div className={`w-7 h-0.5 bg-primary transition duration-300 ease-in-out rounded ${rotateBurger ? "rotate-45 translate-y-1" : "rotate-0"}`}></div>
                        <div className={`w-5 h-0.5 bg-primary transition duration-300 ease-in-out rounded ${rotateBurger ? "-rotate-45 w-7" : "rotate-0"}`}></div>
                    </div>
                    <Nav renderNav={renderNav} setRenderNav={setRenderNav} rotateBurger={rotateBurger} setRotateBurger={setRotateBurger} />
                </div>
            </header> */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${scrolled
                    ? "bg-bg/80 backdrop-blur-md border-b border-white/5 py-3"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold tracking-tighter text-white group">
                        Daniel<span className="text-primary group-hover:animate-pulse">.</span>T
                    </a>

                    {/* Desktop & Mobile Navigation */}
                    <Nav
                        renderNav={renderNav}
                        setRenderNav={setRenderNav}
                        setRotateBurger={setRotateBurger}
                    />

                    {/* Burger Button (Endast mobil) */}
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

                    {/* Overlay när mobilmenyn är öppen */}
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