import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LuSettings2, LuLogOut, LuLogIn } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";
import { FaSearch, FaSignInAlt } from "react-icons/fa";
import { logout } from '../../API/Logout';
import { AiFillHome } from "react-icons/ai";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getUser } from '../../API/profile';
const Navbar = () => {
    const loggedIn = localStorage.getItem('isOkay') === 'true';
    const adopter = localStorage.getItem('isAdopter') === 'true';
    const shelter = localStorage.getItem('isShelter') === 'true';
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const data = await logout();
            if (data) {
                navigate('/registration');
            } else {
                alert("Sorry, login failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };
    useEffect(() => {
        const getUserdata = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (loggedIn) {
            getUserdata();
        }
    }, [loggedIn]);
    const NavLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 text-dark font-semibold pb-3' : 'text-white'} to="/">Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 font-semibold text-dark pb-3' : 'text-dark font-semibold hover:text-blue-500'} to="/shelters">Populer Shelters</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 font-semibold text-dark pb-3' : 'text-dark font-semibold hover:text-orange-300'} to="/reviews">Adopters Reviews</NavLink></li>
    </>;
    const AdopterLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/adopter"><div className="flex items-center text-lg"> <AiFillHome className="me-2"></AiFillHome> For You</div> </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/posts/followers"><div className="flex items-center text-lg"> <FaCat className="me-2"></FaCat>Tranding</div> </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/"><div className="flex items-center text-lg"> <FaPeopleRoof className="me-2"></FaPeopleRoof> Comunity</div> </NavLink>
    </>;
    const ShelterLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/shelter"><div className="flex items-center text-lg"> <AiFillHome className="me-2"></AiFillHome> My Pets</div> </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/posts/followers"><div className="flex items-center text-lg"> <FaCat className="me-2"></FaCat>Tranding</div> </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/"><div className="flex items-center text-lg"> <FaPeopleRoof className="me-2"></FaPeopleRoof> Comunity</div> </NavLink>
    </>;
    return (
        <div className=' border-b mb-5'>
            <div className="navbar justify-between w-5/6 mx-auto">
                <div >
                    <Link to='/' className="btn btn-ghost text-2xl text-black">
                        <figure><img className='w-10 rounded-lg' src="/logo.png" alt="" /></figure>
                        FurEver Home
                    </Link>

                </div>
                <div className=''>
                    {
                        <div className='flex items-center gap-24'>
                            <ul className='flex gap-5 w-fit'>
                                {adopter ? AdopterLinks : (shelter ? ShelterLinks : NavLinks)}
                            </ul>
                            <div className='w-fit'>
                                <label className="border py-[10px] px-2 rounded-md flex items-center gap-2 w-96 group">
                                    <input type="text" className="grow bg-transparent outline-none focus:outline-none " placeholder="Search pets..." />
                                    <FaSearch className='group-hover:text-accent'></FaSearch>
                                </label>
                            </div>
                        </div>
                    }
                </div>
                <div>
                    {
                        loggedIn ? <div className="items-center gap-5 flex text-2xl text-black ">
                            <div className="dropdown dropdown-hover dropdown-bottom">
                                <div tabIndex={0} role="button"><IoMdNotifications ></IoMdNotifications></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                                    <li><a>Settings</a></li>
                                    <li><a>Privacy</a></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button"><img alt="profile" src={user.dp} className="rounded-full h-10 object-cover border-solid border-2 border-indigo-300 w-10" /></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                    <li><Link to={adopter ? '/adopter/profile' : '/shelter/profile'}>Profile</Link></li>
                                    <li><Link to={adopter ? '/adopter/profile' : '/shelter/profile'}>Adoption History</Link></li>
                                </ul>
                            </div>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button"><LuSettings2 ></LuSettings2></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                                    <li><a>Settings</a></li>
                                    <li><a>Privacy</a></li>
                                </ul>
                            </div>

                            <div className='relative group flex items-center'>
                                <LuLogOut onClick={handleLogout} className="cursor-pointer hover:text-red-500"></LuLogOut>
                                <small className="hidden absolute ml-6  text-xs text-white group-hover:block font-bold">Logout</small>
                            </div>
                        </div> : <div className='flex gap-3'>
                            <Link to='/registration' className='btn btn-outline'> <FaSignInAlt></FaSignInAlt> Join Now</Link>
                            <Link to='/registration' className='btn btn-neutral '> <LuLogIn></LuLogIn> Login</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};


export default Navbar;

