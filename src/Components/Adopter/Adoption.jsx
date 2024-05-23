
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteRquest, updateAdoptionRequest } from '../../API/UpdateAdoption';
const Adoption = ({ adoption }) => {
    const adopter = localStorage.getItem('isAdopter') === 'true';
    const shelter = localStorage.getItem('isShelter') === 'true';
    const [status, setstatus] = useState(adoption.status);
    const updaterequest = async () => {
        const data = {
            status: { status },
            'id': adoption.id
        }
        try {
            const response = await updateAdoptionRequest(data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const deleterequest = async () => {
        try {
            const response = await deleteRquest(adoption.id);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    console.log(adoption);
    return (
        <tr className='text-nowrap'>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={adoption.pet.image_url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{adoption.pet.name}</div>
                        <div className="text-sm opacity-50">Pet ID : {adoption.pet.id}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={adoption.adopter.dp} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{adoption.adopter.username}</div>
                        <div className="text-sm opacity-50 badge badge-ghost badge-sm">City : {adoption.adopter.address.city}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    {
                        adoption.request_date.split('T')[0]
                    }
                    <br />
                    {
                        adoption.request_date.split('T')[1].split('.')[0]
                    }
                </div>
            </td>
            <td>
                <div>
                    {
                        adoption.updated_date.split('T')[0]
                    }
                    <br />
                    {
                        adoption.updated_date.split('T')[1].split('.')[0]
                    }
                </div>
            </td>

            <th className='p-0'>
                <parent className="btn  btn-xs">${adoption.pet.fee}</parent>
            </th>
            <th className='p-0'>
                {
                    adopter && <div>
                        {adoption.status}
                    </div>

                }
                {
                    shelter && <select name="status" defaultValue={status} onChange={(e) => setstatus(e.target.value)} className="select select-ghost w-32 ms-0 p-0 py-2 bg-transparent outline-none focus:outline-none">
                        <option className="bg-gray-800 text-white" value="applied">Applied</option>
                        <option className="bg-gray-800 text-white" value="reviewed">Reviewed</option>
                        <option className="bg-gray-800 text-white" value="interviewed">Home Visited</option>
                        <option className="bg-gray-800 text-white" value="approved">Approved</option>
                        <option className="bg-gray-800 text-white" value="paid">Paid</option>
                        <option className="bg-gray-800 text-white" value="adopted">Adopted</option>
                    </select>
                }
            </th>
            <th>
                {
                    shelter && <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" ><BsThreeDotsVertical className='text-xl'></BsThreeDotsVertical></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                            <li><button onClick={() => updaterequest()}>Save</button></li>
                            <li><button onClick={() => deleterequest()}>Cancel</button></li>
                        </ul>
                    </div>
                }
            </th>
        </tr>
    );
};

Adoption.propTypes = {
    adoption: PropTypes.object,
};
export default Adoption;