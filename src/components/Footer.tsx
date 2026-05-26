import { SiGithub, SiInstagram} from "react-icons/si"
import copyright from "../assets/copyright.png"
import { FaLinkedin } from "react-icons/fa"
import logo from "../assets/ammaryaas.svg"

function Footer() {
    return (
        <div className="bg-text text-accent p-5">
            <div className="justify-between">
                <div className="md:flex h-96 justify-between">
                    <h1 className="font-sora font-semibold text-4xl md:text-5xl lg:text-6xl">
                        Turning Ideas Into <br />
                        <span className="font-serif font-light italic">&nbsp;Digital&nbsp;</span> 
                        Experiences.
                    </h1>
                    <img src={copyright} alt="" 
                        className="h-36 md:h-24 lg:h-36"/>
                </div>
                <p className="md:max-w-4/5 text-sm md:text-lg md:font-medium mb-2">
                    Created by ammaryaas — thoughtfully crafted with passion, countless cups of coffee, late-night ideas, and probably less sleep than recommended. But also with a genuine love for creating meaningful digital experiences.
                </p>
            </div>

            {/* Line */}
            <div className="w-full h-0.5 bg-accent"></div>

            <div className="flex flex-col h-48 md:h-fit md:flex-row mt-4 justify-between">
                <div>
                    <img src={logo} alt="Logo ammaryaas" />
                    <p>
                        All rights reserved © 2026
                    </p>
                </div>
                <p className="leading-none">
                    Based in Bandung<br/>West Java, Indonesia
                </p>
                <div className="flex gap-3">
                    <a href="https://github.com/ammaryaas/" target="_blank">
                        <SiGithub size={20}/>
                    </a>
                    <a href="https://www.linkedin.com/in/ammar-yassin-29a564239/">
                        <FaLinkedin size={20}/>
                    </a>
                    <a href="https://www.instagram.com/ammaryaas_/">
                        <SiInstagram size={20}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer