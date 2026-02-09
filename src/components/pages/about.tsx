import Beams from "../Beams"

const About = () => {
    return (
        <>
            <div className = "h-70 bg-zinc-800 w-screen flex relative">
                <Beams/>
                <div className = "w-full h-70 p-7 grid grid-cols-1 lg:grid-cols-2 z-120">
                    <div>
                        <h1 className = "text-3xl font-semibold text-white">Why Projectize?</h1>
                        <ul className = "text-white/70">
                            <li>Projectize is simple and easy to learn & use,</li>
                            <li>Projectize is full of useful features,</li>
                            <li>In some operating systems, projectize is trusted enough to be default,</li>
                            <li>Projectize has an open source code base and tech stack.</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className = "text-3xl font-semibold text-white">About projectize.</h1>
                        <ul className = "text-white/70">
                            <li>Projectize was founded in early 2026,</li>
                            <li>Projectize does not require an internet connection,</li>
                            <li>Projectize is currently only available for desktop/laptop devices,</li>
                            <li>Projectize is open for contributions in github, you can do so by following the instructions there.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About