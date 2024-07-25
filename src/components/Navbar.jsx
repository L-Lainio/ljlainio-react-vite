import logo from "../assets/images/LJLLogo3.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="m-2 w-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/lora-lainio-1a3a55255/"><FaLinkedin /></a>
                <a href="https://github.com/L-Lainio"><FaGithub /></a>
                <a href="https://x.com/LLainio"><FaXTwitter /></a>
                <a href="https://x.com/LainioLora64370"><FaInstagram /></a>
            </div>
        </nav>
    )
}


export default Navbar
