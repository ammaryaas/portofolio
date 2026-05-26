import mnc from "../assets/projects/mnc.jpg"
import mnc1 from "../assets/projects/mnc1.png"
import mnc2 from "../assets/projects/mnc2.png"
import hmti from "../assets/projects/hmti.jpg"
import hmti1 from "../assets/projects/hmti1.png"
import hmti2 from "../assets/projects/hmti2.png"
import digiyok from "../assets/projects/digiyok.jpg"
import digiyok1 from "../assets/projects/digiyok1.png"
import digiyok2 from "../assets/projects/digiyok2.png"
import arterra from "../assets/projects/arterra.jpg"
import arterra1 from "../assets/projects/arterra1.png"
import arterra2 from "../assets/projects/arterra2.png"

const latestProjects = [
    {
        odd: true,
        name: "Digiyok Sales Automation",
        desc: "Digiyok is a telecommunications service website developed using the Laravel framework with Bootstrap for the user interface. In this project, I developed a CRM sales feature, covering UI design and system functionality, including workflows from product procurement to the purchasing process.",
        label: ["Fullstack"],
        imgMain: digiyok,
        img: [digiyok1, digiyok2],
    },
    {
        odd: false,
        name: "Media Naraya Cipta Company Profile",
        desc: "Developed a company profile website for an IT support company specializing in web applications, computer procurement, and networking solutions. My role focused on UI/UX design and frontend implementation using Tailwind CSS, with an emphasis on responsiveness and user experience.",
        label: ["UI/UX Designer", "Frontend"],
        imgMain: mnc,
        img: [mnc1, mnc2],
    },
    {
        odd: true,
        name: "Arterra",
        desc: "Arterra AI is an education analytics platform that evaluates regional education quality using data-driven insights and machine learning. In this project, I was responsible for building the data pipeline, processing datasets, and integrating the results into the web platform.",
        label: ["Data Engineer", "Backend"],
        imgMain: arterra,
        img: [arterra1, arterra2],
    },
    {
        odd: false,
        name: "HMTI Unsoed Company Profile",
        desc: "Developed a student association website with a focus on backend development using Filament. The project involved building and managing the system’s core functionality, data management, and admin panel features to support organizational activities and content management efficiently.",
        label: ["Backend"],
        imgMain: hmti,
        img: [hmti1, hmti2],
    },
]

function Project() {
    return (
        <div className="bg-background text-text py-8 px-8 md:px-16">
            <div>
                <h3 className="text-teal-400 text-lg font-semibold mb-4">Ideas Brought to Life</h3>
                <h2 className="text-5xl lg:text-6xl font-bold leading-none mb-16 max-w-3xl">
                    Latest Projects & Collaborations
                </h2>
            </div>
            {latestProjects.map((project) => (
                <div className={`flex flex-col-reverse mb-10 ${project.odd ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="p-5 md:w-2/3">
                        <img src={project.imgMain} alt={`Landing Page Website ${project.name} `}/>
                        <div className="flex gap-5 mt-5">
                            {project.img.map((image) => (
                                <img src={image} alt=""
                                    className="hidden lg:block w-[48.5%] object-cover" />
                            ))}
                        </div>
                    </div>
                    <div className="p-5 md:w-1/3">
                        <div className="flex gap-3">
                            {project.label.map((skill) => (
                                <div className="border border-text rounded-full text-sm md:text-md lg:text-xl px-4 py-1 w-fit">
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-sora font-semibold mt-5 mb-1">
                            {project.name}
                        </h4>
                        <p>
                            {project.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project