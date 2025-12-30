import logo from "../assets/images/LJLLogo3.png";
import aboutMeImg from "../assets/images/aboutMe.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="m-2 w-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl text-black dark:text-white">
                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
                <a href="https://www.linkedin.com/in/lora-lainio-1a3a55255/"><FaLinkedin /></a>
                <a href="https://github.com/L-Lainio"><FaGithub /></a>
                <a href="https://x.com/LLainio"><FaXTwitter /></a>
                <a href="https://x.com/LainioLora64370"><FaInstagram /></a>
            </div>
            <div className="flex justify-center mt-4">
                <img className="w-32 h-32 rounded-full object-cover" src={aboutMeImg} alt="About Me" />
            </div>
        </nav>
    )
}


export default Navbar
