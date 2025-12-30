import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">
                Get in Touch
            </motion.h1>
            
            <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.5 }}
                className="text-indigo-800italic mb-4"
            >
                <ContactForm />
            </motion.div>

            <div className="text-center tracking-tighter mt-12">
                <motion.p 
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="text-neutral-400 italic mb-4"
                >
                    &ldquo;Thank you for reaching out. I look forward to discussing how my background in 
                    secure development and financial compliance can add value to your next project.&rdquo;
                </motion.p>
            </div>

            <div className="text-center tracking-tighter mt-8">
                <p className="text-sm font-medium text-purple-800">
                    Based in Florida, USA
                </p>
            </div>
        </div>
    );
};

export default Contact;
