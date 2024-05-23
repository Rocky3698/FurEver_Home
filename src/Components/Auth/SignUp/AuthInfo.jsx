import { FaRegUserCircle } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import PropTypes from 'prop-types';
const AuthInfo = ({ next, authInfo }) => {
    // const authInfo = {
    //     'fname': fisrt_name,
    //     'lname': last_name,
    //     'uname': username,
    //     'pass': password,
    //     'email': email,
    //     'setemail': setemail,
    //     'setFname': setFrist_name,
    //     'setLast_name': setLast_name,
    //     'setusername': setusername,
    //     'setpassword': setpassword
    // };
    return (
        <div>
            <div className="text-center font-mono text-sm italic text-accent">Sign up info</div>
            <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                <FaRegUserCircle />
                <input value={authInfo.fname} onChange={(e) => authInfo.setFname(e.target.value)} type="text" placeholder="First Name" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
            </label>
            <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                <FaRegUserCircle />
                <input value={authInfo.lname} onChange={(e) => authInfo.setLast_name(e.target.value)} type="text" placeholder="Last Name" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
            </label>
            <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                <FaRegUserCircle />
                <input value={authInfo.uname} onChange={(e) => authInfo.setusername(e.target.value)} type="text" placeholder="Username" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
            </label>
            <label className="flex items-center gap-2 my-2 border-b border-black w-96">
                <MdMarkEmailUnread />
                <input value={authInfo.email} onChange={(e) => authInfo.setemail(e.target.value)} type="email" className="grow w-full py-2 bg-transparent outline-none focus:outline-none" placeholder="Email" />
            </label>
            <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input value={authInfo.pass} onChange={(e) => authInfo.setpassword(e.target.value)} type="text" placeholder="Password" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
            </label>
            <button onClick={() => next()} className="btn btn-block btn-outline btn-accent  text-accent my-2 " type="submit">Next</button>
        </div>
    );
};
AuthInfo.propTypes = {
    next: PropTypes.func,
    authInfo: PropTypes.object,

};
export default AuthInfo;