import { useState } from "react"
import Nav from "./Nav"

function Header() {
    const [renderNav, setRenderNav] = useState(false);
    const [rotateBurger, setRotateBurger] = useState(false);

    const handleNav = () => {
        setRenderNav(!renderNav);
        setRotateBurger(!rotateBurger);
    }

    return (
        <>
            <header className="flex items-center justify-between p-4 bg-background">
                <h1 className="text-[1.3rem] font-primary text-accent tracking-wider">Daniel Thörnsjö</h1>
                <div className="flex flex-col gap-0.5 items-end z-10 py-2 cursor-pointer" onClick={handleNav}>
                    <div className={`w-7 h-0.5 bg-accent transition duration-300 ease-in-out ${rotateBurger ? "rotate-45 translate-y-1" : "rotate-0"}`}></div>
                    <div className={`w-5 h-0.5 bg-accent transition duration-300 ease-in-out ${rotateBurger ? "-rotate-45 w-7" : "rotate-0"}`}></div>
                </div>
                <Nav renderNav={renderNav} setRenderNav={setRenderNav} />
            </header>
        </>
    )
}

export default Header