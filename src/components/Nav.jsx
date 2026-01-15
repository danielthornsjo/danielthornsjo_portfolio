function Nav({ renderNav, setRenderNav }) {
    return (
        <>
            {/* <nav className="fixed w-[80%] h-screen bg-background top-0 right-0 flex items-center justify-center"> */}
            <nav className={`fixed w-[80%] h-screen bg-background top-0 right-0 flex items-center justify-center ${renderNav ? "translate-x-0" : "translate-x-100"} transition duration-300 ease-in-out`}>
                <ul className="text-accent flex flex-col gap-6 text-center">
                    <li><a className="text-2xl" href="/" onClick={() => setRenderNav(false)}>Start</a></li>
                    <li><a className="text-2xl" href="/" onClick={() => setRenderNav(false)}>Projekt</a></li>
                    <li><a className="text-2xl" href="/" onClick={() => setRenderNav(false)}>Kontakta mig</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav