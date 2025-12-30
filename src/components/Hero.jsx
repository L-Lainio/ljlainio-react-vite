import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";
import profilePic from "../assets/images/aboutMe.jpg";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});


const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="py-20 px-6 text-left border-b border-neutral-800">
                <h1 className="text-5xl font-bold text-white tracking-tight">Lora Lainio</h1>
                <p className="text-xl text-neutral-400 mt-6 max-w-3xl leading-relaxed">
                    Full-Stack Developer bridging the gap between <span className="text-white font-semibold">financial compliance</span> and <span className="text-white font-semibold">modern web technology</span>.
                </p>
                <div className="mt-10">
                    <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-colors">
                        Get In Touch
                    </a>
                </div>
            </section>

            {/* Value Props Section */}
            <section className="grid md:grid-cols-3 gap-6 py-16 px-6">
                <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-all">
                    <div className="text-2xl mb-4">🛡️</div>
                    <h3 className="text-white font-bold text-lg mb-2">Data Integrity</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        Prioritizing "Security-by-Design" with ACID-compliant architectures like PostgreSQL.
                    </p>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-all">
                    <div className="text-2xl mb-4">⚖️</div>
                    <h3 className="text-white font-bold text-lg mb-2">Compliance-Driven</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        Expertise in HIPAA and Tax Law (PTIN) ensures strict privacy and regulatory standards.
                    </p>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl hover:border-neutral-700 transition-all">
                    <div className="text-2xl mb-4">♿</div>
                    <h3 className="text-white font-bold text-lg mb-2">Inclusive Tech</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        Building with a11y as a core requirement to ensure user safety and accessibility.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Hero
