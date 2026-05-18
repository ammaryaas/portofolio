import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { createPortal } from "react-dom";
import { SiBootstrap, SiCodeigniter, SiFigma, SiGit, SiLaravel, SiLivewire, SiMysql, SiNextdotjs, SiNodedotjs, SiPostman, SiPython, SiReact, SiTailwindcss, SiTypescript, SiVite, SiVuedotjs, SiWebflow } from "react-icons/si"

const skillCategories = [
  {
    name: "Frontend",
    icons: [
        { icon: SiVuedotjs,     label: "Vue"},
        { icon: SiReact,        label: "React"},
        { icon: SiTailwindcss,  label: "Tailwind"},
        { icon: SiBootstrap,    label: "Bootstrap"},
        { icon: SiVite,         label: "Vite"},
        { icon: SiLivewire,     label: "Livewire"},
        { icon: SiTypescript,   label: "Typescript"},
        { icon: SiNextdotjs,    label: "Next"},
    ],
  },
  {
    name: "Backend",
    icons: [
        { icon: SiLaravel, label: "Laravel"},
        { icon: SiCodeigniter, label: "Codeigniter"},
        { icon: SiNodedotjs, label: "Node Js"},
        { icon: SiPython, label: "Python"},
        { icon: SiMysql, label: "MySQL"},
        { icon: SiPostman, label: "Postman"},
    ],
  },
  {
    name: "Others",
    icons: [
        { icon: SiFigma, label: "Figma"},
        { icon: SiGit, label: "Git"},
        { icon: SiWebflow, label: "Webflow"},
    ],
  },
]

const TooltipFollow = ({ children, label }: { children: React.ReactNode; label: string }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {children}

      {createPortal(
        <AnimatePresence>
          {visible && (
            <motion.div
              className="fixed z-50 pointer-events-none bg-accent text-white text-sm px-2 py-1 rounded"
              style={{ left: pos.x + 12, top: pos.y + 12 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body // ← tooltip di-render langsung ke body
      )}
    </div>
  );
};

function Skill() {
  return (
    <section className="bg-slate-950 text-white p-16 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div>
          <h3 className="text-teal-400 text-lg font-semibold mb-4">Tech Stack</h3>
          <h2 className="text-5xl lg:text-6xl font-bold leading-none mb-16 max-w-3xl">
            Tools and technologies that shape my workflow
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div className="border border-white/20 rounded-2xl p-8 pt-5 backdrop-blur-sm hover:border-white/40 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-8">{category.name}</h3>
              <div className="grid grid-cols-4 gap-6">
                {category.icons.map(({icon: Icon, label}) => (
                  <div className="text-3xl font-bold text-center hover:text-teal-400 transition-colors">
                    <TooltipFollow label={label}>
                        <Icon size={40} color='white'/>
                    </TooltipFollow>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill