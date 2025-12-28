import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }, // Speed of text reveal
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const title = "About Me";
  const bio = "I am a full-stack developer specializing in modern web technologies.";

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
      <div className="container mx-auto px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Animated Title */}
          <h2 className="text-5xl font-bold mb-8">
            {title.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </h2>

          {/* Animated Description */}
          <motion.p 
            variants={letterVariants}
            className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
          >
            {bio}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
