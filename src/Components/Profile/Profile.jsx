import Navbar from '../Root/Navbar';
import { useState, useEffect } from "react";
import Icon from '../Root/Icon';
import FetchError from '../Errors/FetchError';
import { getUser } from '../../API/profile';
import { FaUserEdit, FaCat } from "react-icons/fa";
import ProfileDetails from './ProfileDetails';
import { getAdoptionHistory, getShelterAdoptionHistory } from '../../API/AdoptionHistory';
import AdoptionHistory from '../Adopter/AdoptionHistory';

const Profile = () => {
    const [user, setUser] = useState({});
    const [adoptions, setAdoptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const adopter = localStorage.getItem('isAdopter') === 'true';
    const shelter = localStorage.getItem('isShelter') === 'true';
    const [edit, setedit] = useState(true);
    const getAdoptionData = async () => {
        try {
            if (adopter) {
                const adoptionData = await getAdoptionHistory();
                setAdoptions(adoptionData);
            }
            if (shelter) {
                const adoptionData = await getShelterAdoptionHistory();
                setAdoptions(adoptionData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getUser();
                setUser(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        getData();

    }, []);
    if (loading) {
        return (
            <Icon></Icon>
        )
    }
    if (error) {
        <FetchError err={error}></FetchError>
    }
    const setProfileInfo = () => {
        setAdoptions([]);
        setedit(!edit);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-4/6 mx-auto border  rounded-lg'>
                <div className='flex items-center justify-between p-8 bg-slate-400 m-5 rounded-xl'>
                    <div className='flex items-center gap-4 '>
                        <figure className='w-36 h-36'><img className='rounded-full h-full w-full object-cover' src={user.dp} alt="" /></figure>
                        <div>
                            <h2 className='text-3xl font-semibold'>{user.username}</h2>
                            <h2 className='text-xl font-mono font-semibold'>{user.first_name} {user.last_name}</h2>
                        </div>
                    </div>
                    <div className='flex items-center  text-xl gap-6'>
                        <div>
                            {edit && <button onClick={() => setProfileInfo()} className='flex items-center btn btn-primary'>
                                <FaUserEdit className='text-2xl'></FaUserEdit>
                                <h2>Edit Profile</h2>
                            </button>}

                        </div>
                        <button onClick={() => getAdoptionData()} className='flex items-center gap-2 btn btn-info'>
                            <FaCat className='text-2xl'></FaCat>
                            <h2>Adoption History</h2>
                        </button>
                    </div>
                </div>
                <div className=''>
                    {
                        adoptions.length ? <AdoptionHistory adoptions={adoptions}></AdoptionHistory> : <ProfileDetails user={user} edit={edit} setProfileInfo={setProfileInfo}></ProfileDetails>
                    }
                </div>
            </div>
        </div>
    );
};
export default Profile;