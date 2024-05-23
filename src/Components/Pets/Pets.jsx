// import Icon from '../Root/Icon';

import { useState, useEffect } from "react";
import { GetPets, GetShelterPets } from "../../API/Pets";
import Pet from './Pet';
import Icon from "../Root/Icon";
import FetchError from '../Errors/FetchError';

const Pets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const shelter = localStorage.getItem('isShelter');
        const adopter = localStorage.getItem('isAdopter');

        const getData = async () => {
            try {
                if (shelter=='true') {
                    const data = await GetShelterPets();
                    setPets(data);
                }
                if(adopter=='true'){
                    const data = await GetPets();
                    setPets(data);
                }
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        getData();
    }, []);
    // console.log(pets,loading,error);
    if (loading) {
        return (
            <Icon></Icon>
        )
    }
    if (error) {
        <FetchError err={error}></FetchError>
    }
    return (
        <div className='w-full mx-auto '>
            <div className="flex flex-wrap items-center gap-8 ms-10 mt-5">
                {
                    pets.map(pet => <Pet key={pet.id} pet={pet} ></Pet>)
                }
            </div>
        </div>
    );
};

export default Pets;