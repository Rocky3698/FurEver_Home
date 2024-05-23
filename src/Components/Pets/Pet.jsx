import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deletePet } from '../../API/Pets';
const Pet = ({ pet }) => {
    const { id, name, fee, age, image_url, status, breed } = pet;
    const shelter = localStorage.getItem('isShelter') === 'true';
    return (
        <div className="flex justify-center">
            <div className="card card-compact w-96 bg-base-100 shadow hover:shadow-md indicator">
                <span className={"indicator-item badge badge-accent me-8"}>{status}</span>
                <figure className="h-60 w-full overflow-hidden">
                    <img src={image_url} alt={name} className="object-cover h-full w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2>Adoption Fee: {fee} $</h2>
                    <h2>Age: {age} years</h2>
                    <h2>Breed: {breed.name}</h2>
                    <Link to={`/adopter/pets/${id}`} className="btn btn-outline btn-accent">View details</Link>
                    {
                        shelter && <button onClick={() => deletePet(id)} className="btn btn-error btn-outline">delete Pet</button>
                    }
                </div>
            </div>
        </div>
    );
};
Pet.propTypes = {
    pet: PropTypes.object,
};
export default Pet;