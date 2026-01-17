import { motion } from "framer-motion";

const About = () => {

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl 
            bg-sky-50 border border-sky-100 
            dark:bg-sky-950/40 dark:border-sky-500/20 
            transition-all duration-1000 ease-in-out">
            
          <h2 className="text-5xl font-bold mb-8 text-slate-800 dark:text-sky-100">
            About Me
          </h2>
          
          <p className="text-lg leading-relaxed text-slate-600 dark:text-sky-200/80">
            I am a full-stack developer specializing in modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
