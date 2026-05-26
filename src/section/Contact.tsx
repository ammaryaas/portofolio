import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

const TooltipFollow = ({ children, label, copiedLabel = "Copied!", onCopyRef }: {
    children: React.ReactNode;
    label: string;
    copiedLabel?: string;
    onCopyRef?: React.MutableRefObject<(() => void) | null>;  // ← ref untuk trigger dari luar
}) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    const triggerCopied = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);  // reset setelah 2 detik
    };

    // expose triggerCopied ke parent
    if (onCopyRef) onCopyRef.current = triggerCopied;

    return (
        <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => { setVisible(false); setCopied(false); }}
            onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        >
            {children}
            {createPortal(
                <AnimatePresence mode="wait">
                    {visible && (
                        <motion.div
                            key={copied ? "copied" : "label"}  // ← key berubah = animasi ulang
                            className="fixed z-50 pointer-events-none bg-accent text-text text-sm px-3 py-1 rounded-full font-medium"
                            style={{ left: pos.x + 12, top: pos.y + 12 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.15 }}
                        >
                            {copied ? copiedLabel : label}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

const Contact = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    // motion value untuk posisi — pakai spring agar gerakannya elastis
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // hitung jarak kursor dari titik tengah box
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // tarik box ke arah kursor — makin jauh dari center makin ketarik
        // bagi dengan angka besar (6-10) agar gerakan subtle, tidak terlalu ekstrem
        x.set((e.clientX - centerX) / 8);
        y.set((e.clientY - centerY) / 8);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        x.set(0);  // kembali ke posisi semula
        y.set(0);
    };

    const emailCopyRef = useRef<(() => void) | null>(null);
    const phoneCopyRef = useRef<(() => void) | null>(null);

    const copyToClipboard = (text: string, ref: React.MutableRefObject<(() => void) | null>) => {
        navigator.clipboard.writeText(text);
        ref.current?.();  // ← trigger "Copied!" di tooltip
    };

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}  // ← gerak magnetic
            className="bg-background w-5/6 max-w-3xl mx-auto cursor-pointer border-3 border-accent rounded p-16 text-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            {/* Konten Depan — headline */}
            <AnimatePresence mode="wait">
                {!hovered ? (
                    <motion.div
                        key="headline"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-accent text-3xl md:text-5xl font-bold leading-tight">
                            Got An Idea?<br />Let's Make It Real
                        </h2>
                    </motion.div>

                ) : (

                    // Konten Belakang — kontak
                    <motion.div
                        key="contact"
                        className="flex flex-col items-center gap-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TooltipFollow label="Copy email" copiedLabel="Copied!" onCopyRef={emailCopyRef}>
                            <p className="text-accent text-2xl md:text-4xl font-sora font-medium"
                                onClick={() => copyToClipboard("ammarizzatulhaq@gmail.com", emailCopyRef)}>
                                ammarizzatulhaq@gmail.com
                            </p>
                        </TooltipFollow>

                        <div className="w-16 h-px bg-accent/30" />

                        <TooltipFollow label="Copy number" copiedLabel="Copied!" onCopyRef={phoneCopyRef}>
                            <p className="text-accent text-2xl md:text-4xl font-sora font-medium"
                                onClick={() => copyToClipboard("+62 819 0204 1124", phoneCopyRef)}>
                                +62 819 0204 1124
                            </p>
                        </TooltipFollow>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Contact;