import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetPet } from '../../API/Pets';
import { useNavigate } from 'react-router-dom';
import { adoptPet } from '../../API/AdoptPet';
const Petdetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await GetPet(id);
                setPet(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        getData();
    }, [id]);
    if (loading) {
        return <span className="loading loading-dots loading-lg">loading...</span>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    const handleAdoption = async (id) => {
        const user = localStorage.getItem('user_id')
        const credentials = {
            "pet": id,
            "adopter": user
        }
        try {
            const data = await adoptPet({ credentials });
            if (data == "adopter") {
                navigate('/adopter');
            } else if (data == 'shelter') {
                navigate('/');
            }
        } catch (error) {
            console.error("Error during Adoption:", error);
        }
    };

    return (
        <div className="card cardiv mb-5 p-5">
            <div className="d-flex">
                <div className="col-6 p-3 pb-0 sdow">
                    <img src={pet.image_url} alt={`${pet.name}`} />
                </div>
                <div className="col-6 mt-2">
                    <h4 className="fw-bold">{pet.name}</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="row">Adoption Fee:</th>
                                <td>${pet.fee}</td>
                            </tr>
                            <tr>
                                <th scope="row">Age:</th>
                                <td>{pet.age} years</td>
                            </tr>
                            <tr>
                                <th scope="row">Breed:</th>
                                <td>{pet.breed.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Status:</th>
                                <td className={pet.status === 'available' ? 'text-success' : pet.status === 'wishlisted' ? 'text-warning' : 'text-danger'}>
                                    {pet.status.charAt(0).toUpperCase() + pet.status.slice(1)}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Shelter:</th>
                                <td>{pet.shelter.first_name} {pet.shelter.last_name} ({pet.shelter.username})</td>
                            </tr>
                            <tr>
                                <th scope="row">Location:</th>
                                <td>{pet.shelter.address.country}, {pet.shelter.address.country}</td>
                            </tr>
                            <tr>
                                <th scope="row">Contact:</th>
                                <td>{pet.shelter.email} | {pet.shelter.phone}</td>
                            </tr>
                            <tr>
                                <th scope="row">Description:</th>
                                <td>{pet.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    {pet.status !== 'adopted' && (
                        <button onClick={()=>handleAdoption(pet.id)} className="btn btn-lg btn-warning my-2">Adopt Now</button>
                    )}
                    {pet.status === 'adopted' && (
                        <button className="btn btn-lg btn-danger my-2">Not Available</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Petdetails;
