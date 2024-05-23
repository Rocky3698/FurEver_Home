import { Link } from "react-router-dom";
const RegText = () => {
    return (
        <div>
        <div className="flex items-center justify-center my-2  gap-2">
            <img src="/logo.png" className="w-12 rounded-md" alt="" />
            <h2 className="text-2xl text-white font-semibold">FurEver Home</h2>
        </div>
        <div className='text-xl text-white text-center'>
            <h2>Welcome! Join the FurEver Home Family</h2>
            <h2>Sign Up to Help Pets Find Their Forever Homes</h2>
            <Link to="/" className="btn btn-outline btn-accent mt-3">Back to home</Link>
        </div>
    </div>
    );
};

export default RegText;