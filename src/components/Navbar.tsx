import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import leftLogo from "../assets/ammar.svg"
import rightLogo from "../assets/yaas.svg"

const navItems = [
    { name: "about", id: "about" },
    { name: "projects", id: "projects" },
    { name: "experience", id: "experience" },
    { name: "contacts", id: "contacts" },
]

const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = 80; // sesuaikan dengan tinggi navbar kamu
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
    const [isScorlled, setIsScrolled] = useState(false)
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const isCollapsed = isScorlled && !isHover

    return (
        <header className="flex fixed top-0 left-0 z-50 w-full justify-center pt-5 px-3">

            <motion.nav
                animate={{ width: isCollapsed ? "150px" : "520px" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="flex items-center px-5 h-12 justify-between border border-white/10 rounded-sm bg-slate-500/10 backdrop-blur-3xl"
            >
                <img src={leftLogo} className="h-2.5 " />

                <div className="flex-1 flex justify-center overflow-hidden">
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.ul
                                key="ul"
                                initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="flex gap-5 px-12 pb-1"
                            >
                                {navItems.map(({ name, id }) => (
                                    <button
                                        key={id}
                                        onClick={() => scrollTo(id)}
                                        className="text-sm text-accent hover:text-hover cursor-pointer">
                                        {name}
                                    </button>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>

                <img src={rightLogo} className="h-3 " />
            </motion.nav>

        </header>
    )
}