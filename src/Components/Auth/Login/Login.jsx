import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon_White from '../../Root/Icon_White';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../../API/Login";

const Login = ({ reg }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials ={
            email,
            password
        }
        try {
            const data = await login({credentials});
            if (data=="adopter") {
                navigate('/adopter');
            } else if(data == 'shelter') {
                navigate('/shelter');
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
return (
    <div className="flex flex-col items-center justify-center border-s border-slate-500  h-full border-spacing-5">
        <form className='text-white border-2 border-slate-500 p-7 py-16 rounded-xl' onSubmit={handleSubmit}>
            <div className='text-center text-white pb-5'>
                <div className='text-3xl my-2'>Login</div>
                <div>Wellcome back! Please enter your details</div>
            </div>
            <Icon_White></Icon_White>
            <label className="flex items-center gap-2 my-2 border-b border-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="grow w-full py-2 my-2 bg-transparent outline-none focus:outline-none" placeholder="Email" />
            </label>
            <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full py-2 my-2 bg-transparent outline-none focus:outline-none" />
            </label>
            <button type="submit" className="btn btn-block btn-outline btn-accent  text-accent my-2 " >Login</button>
            <div className='text-center hover:text-accent'><Link to="/registration">Forget Password ?</Link></div>
            <hr className="border-t border-gray-500 my-3" />
            <button onClick={() => reg(false)} className="btn btn-block btn-outline btn-accent  text-accent my-2 " type="submit">Create New Account</button>
            <button className="flex items-center gap-2 text-lg btn my-4 btn-block"> <FcGoogle className="text-2xl"></FcGoogle> Sign in with Googgle</button>
        </form>
    </div>
);
};
Login.propTypes = {
    reg: PropTypes.func,
};
export default Login;