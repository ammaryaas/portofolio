import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import leftLogo from "../assets/ammar.svg"
import rightLogo from "../assets/yaas.svg"

const navItems = [
    {name: "about",      id: "about"},
    {name: "projects",   id: "projects"},
    {name: "experience", id: "experience"},
    {name: "contacts",   id: "contacts"},
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
        <header className="fixed top-0 left-0 z-50 w-full flex justify-center">
            <nav
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={`flex mt-3 items-center px-5 border border-white/10 rounded-full backdrop-blur-3xl
                    ${isCollapsed ? "gap-0 py-3" : "gap-14 py-1.5"}
                }`}
                
            >
                <img src={leftLogo} className="h-2.5"/>
                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.ul
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex gap-5"
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
                <img src={rightLogo} className="h-3"/>
            </nav>
        </header>
    )
}