import { FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import Icon from './Icon';
const Team = () => {
    return (
        <div className="w-5/6 mx-auto text-center">
            <Icon></Icon>
            <h2 className="text-4xl font-bold">The Team</h2>
            <h2 className="font-mono text-sm italic mb-5">Creative people fuelied with passion</h2>
            <div className="flex flex-wrap justify-around gap-5">
                <div className="w-80 h-96 rounded-lg text-center border space-y-2">
                    <figure className="h-52 w-full overflow-hidden rounded-t-lg ">
                        <img src="person1.jpg" alt="profile" className="object-cover h-full w-full" />
                    </figure>
                    <h2 className="font-bold text-2xl">Priya Chowdhury</h2>
                    <h3 className="font-mono">Designer | 5 yesrs of experience</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="flex text-2xl gap-5 justify-center items-center">
                        <FaFacebook className='text-blue-500'></FaFacebook>
                        <FaYoutube className='text-red-500'></FaYoutube>
                        <FaLinkedin className='text-blue-500'></FaLinkedin>
                    </div>
                </div>
                <div className="w-80 h-96 rounded-lg text-center border space-y-2">
                    <figure className="h-52 w-full overflow-hidden rounded-t-lg ">
                        <img src="person3.jpg" alt="profile" className="object-cover h-full w-full" />
                    </figure>
                    <h2 className="font-bold text-2xl">Rocky Chowdhury</h2>
                    <h3 className="font-mono">Designer | 5 yesrs of experience</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="flex text-2xl gap-5 justify-center items-center">
                        <FaFacebook className='text-blue-500'></FaFacebook>
                        <FaYoutube className='text-red-500'></FaYoutube>
                        <FaLinkedin className='text-blue-500'></FaLinkedin>
                    </div>
                </div>
                <div className="w-80 h-96 rounded-lg text-center border space-y-2">
                    <figure className="h-52 w-full overflow-hidden rounded-t-lg ">
                        <img src="person3.avif" alt="profile" className="object-cover h-full w-full" />
                    </figure>
                    <h2 className="font-bold text-2xl">Devid Jhon</h2>
                    <h3 className="font-mono">Designer | 5 yesrs of experience</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="flex text-2xl gap-5 justify-center items-center">
                        <FaFacebook className='text-blue-500'></FaFacebook>
                        <FaYoutube className='text-red-500'></FaYoutube>
                        <FaLinkedin className='text-blue-500'></FaLinkedin>
                    </div>
                </div>
                <div className="w-80 h-96 rounded-lg text-center border space-y-2">
                    <figure className="h-52 w-full overflow-hidden rounded-t-lg ">
                        <img src="person1.avif" alt="profile" className="object-cover h-full w-full" />
                    </figure>
                    <h2 className="font-bold text-2xl">Shakil Khan</h2>
                    <h3 className="font-mono">Designer | 5 yesrs of experience</h3>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <div className="flex text-2xl gap-5 justify-center items-center">
                        <FaFacebook className='text-blue-500'></FaFacebook>
                        <FaYoutube className='text-red-500'></FaYoutube>
                        <FaLinkedin className='text-blue-500'></FaLinkedin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Team;