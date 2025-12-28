import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiApollographql, SiExpress } from "react-icons/si";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { motion } from 'framer-motion';

// 1. Parent Container Variants (Triggers the stagger)
const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2, // Time between each icon appearing
        },
    },
};

// 2. Individual Item Variants (Entrance animation)
const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
};

// 3. Floating Animation (The continuous loop)
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const TECH_STACK = [
    { icon: <SiMongodb className="text-7xl text-green-500" />, duration: 2.5 },
    { icon: <SiExpress className="text-7xl" />, duration: 3 },
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 5 },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, duration: 2 },
    { icon: <SiApollographql className="text-7xl text-red-500" />, duration: 6 },
    { icon: <BiLogoPostgresql className="text-7xl text-blue-700" />, duration: 4 },
    { icon: <FaGithub className="text-7xl" />, duration: 3.5 },
    { icon: <FaHtml5 className="text-7xl text-orange-500" />, duration: 2.5 },
    { icon: <VscVscode className="text-7xl text-blue-500" />, duration: 4.5 },
];

const Technologies = () => {
    return (
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>
            
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Only animate once when scrolled into view
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {TECH_STACK.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants} // Handles the "pop-in"
                        className="rounded-2xl border-4 border-neutral-200 dark:border-neutral-800 p-4"
                    >
                        {/* Nested motion div handles the infinite floating loop */}
                        <motion.div
                            variants={iconVariants(tech.duration)}
                            initial="initial"
                            animate="animate"
                        >
                            {tech.icon}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
