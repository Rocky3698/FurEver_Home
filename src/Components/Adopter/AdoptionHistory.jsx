import PropTypes from 'prop-types';
import Adoption from './Adoption';
const AdoptionHistory = ({ adoptions }) => {
    const adopter = localStorage.getItem('isAdopter') === 'true';
    const shelter = localStorage.getItem('isShelter') === 'true';
    return (
        <div>
            <div >
                <table className="table overflow-x-hidden">
                    {/* head */}
                    <thead>
                        {
                            adopter && <tr>
                                <th>Pet</th>
                                <th>Shelter</th>
                                <th>Request Date</th>
                                <th>Updated Date</th>
                                <th>Payable Amount</th>
                                <th>Status</th>
                            </tr>
                        }
                        {
                            shelter && <tr>
                                <th>Pet</th>
                                <th>Adopter</th>
                                <th>Request Date</th>
                                <th>Updated Date</th>
                                <th>Payable Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        }

                    </thead>
                    <tbody>
                        {
                            adoptions.map(adoption => <Adoption key={adoption.id} adoption={adoption} ></Adoption>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
AdoptionHistory.propTypes = {
    adoptions: PropTypes.array,
};
export default AdoptionHistory;