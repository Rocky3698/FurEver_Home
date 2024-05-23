import { AiFillHome } from "react-icons/ai";
import { LuLogIn } from "react-icons/lu";
import { NavLink, Link } from 'react-router-dom';
import { FcMindMap } from "react-icons/fc";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { GiRegeneration } from "react-icons/gi";
import Breeds from './Breeds';
import { useState, useEffect } from "react";
import { GetBreeds } from "../../API/Breeds";
const LeftControls = () => {
    const navlinks = <>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/adopter"><div className="flex items-center text-lg"> <AiFillHome className="me-2"></AiFillHome> For You</div> </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/posts/followers"><div className="flex items-center text-lg"> <FaCat className="me-2"></FaCat>Tranding</div> </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-8 hover:text-accent text-accent' : 'text-slate-500 hover:text-accent'} to="/videos"><div className="flex items-center text-lg"> <FaPeopleRoof className="me-2"></FaPeopleRoof> Comunity</div> </NavLink>
    </>
    const loggedIn = localStorage.getItem('isOkay');


    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await GetBreeds();
                setBreeds(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <div className="flex flex-col gap-4">
                {
                    navlinks
                }
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div>
                {
                    loggedIn ?
                        <div className="my-5 ">
                            <h2 className=" text-pretty text-slate-500">What&apos;s on your mind, Rocky? </h2>
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-outline btn-accent w-full mt-3 text-lg"> <FcMindMap></FcMindMap> Creat post</button>

                        </div> :
                        <div className="my-5">
                            <h2 className=" text-pretty text-slate-500">Log in to follow creators, like post and view comments</h2>
                            <Link to='/login' className="btn btn-outline btn-accent w-full mt-3"> <LuLogIn></LuLogIn> Log in</Link>
                        </div>
                }
            </div>
            <hr className="border-t border-gray-200 my-7" />
            <div className="flex text-lg items-center gap-1 text-indigo-400">
                <GiRegeneration></GiRegeneration>
                <p>  Popular Breeds</p>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto hide-scrollbar ms-5 mt-3">
                {
                    error && <div>No breeds found!</div>
                }
                {
                    loading && <span className="loading loading-dots loading-lg">Loading...</span>
                }
                {
                    breeds && breeds.map(breed => <Breeds key={breed.id} breed={breed} ></Breeds>)
                }
            </div>
        </div>
    );
};

export default LeftControls;