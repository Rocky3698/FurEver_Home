import { Link } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { FaSignInAlt } from "react-icons/fa";
const Hero_Section = () => {
    const loggedin = localStorage.getItem('isOkay');
    return (
        <div className="w-5/6 mx-auto flex flex-col items-start justify-center h-[50vh]">
            <div className="text-center w-2/4">
                <div className="flex items-center justify-center my-4  gap-2">
                    <img src="/logo.png" className="w-12 rounded-md" alt="" />
                    <h2 className="text-2xl text-black font-semibold">FurEver Home</h2>
                </div>
                <h2 className="md:text-5xl text-2xl">Find Your Perfect Pet Companion</h2>
                <h3 className="md:text-2xl">Bridging the Gap Between Pets and Loving Families</h3>
                <p className="text-pretty md:block hidden">FurEver Home is your trusted platform for pet adoption, bringing together animal shelters and pet enthusiasts to find forever homes for pets in need. Explore detailed pet profiles, manage shelter information, and submit adoption requests—all through a secure, user-friendly interface designed with love for our furry friends. Join us in making a difference, one adoption at a time.</p>
                <div className='flex gap-3 mt-5 mx-auto w-52 '>
                    {
                        loggedin ? <Link to='/adopter' className="btn btn-wide btn-outline">Adopt Now</Link> : <div className="flex gap-5">
                            <Link to='/registration' className='btn btn-outline'> <FaSignInAlt></FaSignInAlt> Join Now</Link>
                            <Link to='/registration' className='btn btn-outline '> <LuLogIn></LuLogIn> Login</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Hero_Section;