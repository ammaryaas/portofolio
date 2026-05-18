const jobExperience = [
    {
        name: "UI/UX Designer & Frontend Developer",
        company: "PT Cakrawala Global Yaksa",
        period: "Jul 2025 - Aug 2025",
    },
    {
        name: "Frontend Developer",
        company: "PT Quran Cordoba International",
        period: "Jan 2026 - Feb 2026",
    },
]

function Experience() {
    return (
        <div className="bg-background text-text p-16">
            <div>
                <h3 className="text-accent text-lg font-semibold mb-4">Experience</h3>
                <h2 className="text-5xl lg:text-6xl font-bold leading-none mb-16 max-w-xl">
                    Learning Through Real Work
                </h2>
            </div>
            <div className="relative">
                <div className="absolute w-0.75 h-30 bg-accent left-2"></div>
                {jobExperience.map((job) => (
                    <div className="flex mt-10">
                        {/* Circle */}
                        <div className="bg-background border-3 border-accent w-5 h-5 rounded-full z-20"></div>

                        {/* Job Detail */}
                        <div className="pl-3">
                            <h4 className="text-accent font-sora font-semibold m-0">
                                {job.name}
                            </h4>
                            <p>{job.company}</p>
                            <p>{job.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default Experience