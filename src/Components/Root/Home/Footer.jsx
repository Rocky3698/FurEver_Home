import { Link as ScrollLink } from 'react-scroll';
import { FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-4 bg-slate-600 text-neutral-content flex flex-wrap justify-between items-center">
            <div className="items-center flex flex-wrap">
                <div to='/' className="btn btn-ghost text-2xl text-black">
                    <figure><img className='w-10 rounded-lg' src="/logo.png" alt="" /></figure>
                    FurEver Home
                </div>
                <p>Copyright © 2024 - All right reserved</p>
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li>
                        <ScrollLink
                            activeClass="underline underline-offset-8 font-semibold text-dark pb-3"
                            className="text-dark font-semibold hover:opacity-65 cursor-pointer"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About Us
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink
                            activeClass="underline underline-offset-8 font-semibold text-dark pb-3"
                            className="text-dark font-semibold hover:opacity-65 cursor-pointer"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact Us
                        </ScrollLink>
                    </li>
                </ul>
            </div>
            <nav className="flex gap-4 md:place-self-center md:justify-self-end text-2xl">
                <FaFacebook className='text-blue-500'></FaFacebook>
                <FaYoutube className='text-red-500'></FaYoutube>
                <FaLinkedin className='text-blue-500'></FaLinkedin>
            </nav>
        </footer>
    );
};

export default Footer;