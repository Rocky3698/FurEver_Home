import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Breeds = ({breed}) => {
    return (
        <div >
        <div className="flex items-center text-lg ms-2">
            <NavLink to="/category" className={({ isActive }) => isActive ? ' hover:text-accent text-accent' : 'hover:text-accent'} >{breed.name}</NavLink>
        </div>
        
    </div>
    );
};
Breeds.propTypes = {
    breed: PropTypes.object,
};
export default Breeds;