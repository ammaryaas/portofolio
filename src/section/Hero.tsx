import profilePhoto from "../assets/pp.png"
import { motion } from "framer-motion"

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const navbarHeight = 80; // sesuaikan dengan tinggi navbar kamu
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

const AnimatedText = ({ text }: { text: string }) => {
    return (
        // whileHover di sini — hover seluruh h1 trigger semua huruf 
        <motion.h1
            className="flex overflow-hidden m-0 leading-none" 
            whileHover="hover" 
            initial="initial" 
            animate="initial"
        >
            {text.split("").map((char, i) => (
                <span key={i} className="relative inline-block" style={{ overflow: "hidden" }}>

                    {/* huruf asli - naik keluar */}
                    <motion.span
                        className="inline-block"
                        variants={{
                            initial: { y: "0%",    transition: { duration: 0.3, delay: i * 0.03 } },
                            hover: { y: "-100%", transition: { duration: 0.3, delay: i * 0.03 } },
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>

                    {/* huruf pengganti - masuk dari bawah */}
                    <motion.span
                        className="absolute inset-0 inline-block"
                        initial={{ y: "100%" }}
                        variants={{
                            initial: { y: "100%", transition: { duration: 0.3, delay: i * 0.03 } },
                            hover: { y: "0%", transition: { duration: 0.3, delay: i * 0.03 } },
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>

                </span>
            ))}
        </motion.h1>
    );
};

function Hero() {
    return (
        <div className="flex bg-text w-full h-screen items-end justify-center">
            <div className="max-w-40 absolute left-70 top-40 text-xl/6">
                <p>
                    <button
                        onClick={() => scrollTo("contacts")}
                        className="font-serif italic cursor-pointer">
                        <AnimatedText text="Let's work" />
                    </button>
                    together and make something beautiful
                </p>
            </div>
            <img src={profilePhoto} alt="Ammar Yassin"
                className="h-135 absolute"
            />
            <div className="w-full z-10">
                <div className="flex justify-between text-background text-xl px-10">
                    <p>Hey, I'm</p>
                    <p>a Data Enthusiast</p>
                </div>
                <h1 className="font-sora font-bold text-accent text-[170px] text-center leading-none">
                    Ammar Yassin
                </h1>
            </div>
        </div>
    )
}

export default Hero