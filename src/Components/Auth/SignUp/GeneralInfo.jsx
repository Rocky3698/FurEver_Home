import { FcNext, FcPrevious } from "react-icons/fc";
import PropTypes from 'prop-types';
const GeneralInfo = ({ next, prev, gengeralInfo }) => {
    // const gengeralInfo = {
    //     'phone': phone,
    //     'gender': gender,
    //     'dp': dp,
    //     'bio': bio,
    //     'role': role,
    //     'setphone': setphone,
    //     'setgender': setgender,
    //     'setdp': setdp,
    //     'setbio': setbio,
    //     'setrole': setrole
    // }

    return (
        <div>
            <div>
                <div className="text-center font-mono text-sm italic text-accent">General info</div>
                <div className="flex justify-between px-4 mt-3">
                    <label className=" flex items-center gap-2 my-3 border-black w-32">
                        <input onChange={() => gengeralInfo.setrole('adopter')} type="radio" name="radio-7" className="radio radio-info" checked={gengeralInfo.role==='adopter'} />
                        <h2>Adopter</h2>
                    </label>
                    <label className=" flex items-center gap-2 my-3 border-black w-32">
                        <input onChange={() => gengeralInfo.setrole('shelter')} type="radio" name="radio-7" className="radio radio-info" checked={gengeralInfo.role==='shelter'} />
                        <h2>Shelter</h2>
                    </label>
                </div>
                <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                    <select name="gender" value={gengeralInfo.gender} onChange={(e) => gengeralInfo.setgender(e.target.value)} className="select select-gost w-full py-2 bg-transparent outline-none focus:outline-none ">
                        <option className="bg-gray-800 text-white" value="" disabled>Select Gender</option>
                        <option className="bg-gray-800 text-white" value="male">Male</option>
                        <option className="bg-gray-800 text-white" value="female">Female</option>
                        <option className="bg-gray-800 text-white" value="others">Others</option>
                    </select>
                </label>

                <label className=" flex items-center gap-2 my-2 border-b border-black ">
                    <input value={gengeralInfo.phone} onChange={(e) => gengeralInfo.setphone(e.target.value)} type="text" placeholder="Phone number" className="w-full py-2 mx-4  bg-transparent outline-none focus:outline-none" />
                </label>
                <label className=" flex items-center gap-2 my-2 border-b border-black ">
                    <input value={gengeralInfo.dp} onChange={(e) => gengeralInfo.setdp(e.target.value)} type="text" placeholder="Image URL" className="w-full py-2 mx-4  bg-transparent outline-none focus:outline-none" />
                </label>
                <label className="flex items-center gap-2 my-2 border-b border-black w-96">
                    <textarea value={gengeralInfo.bio} onChange={(e) => gengeralInfo.setbio(e.target.value)} className="textarea  w-full py-2 bg-transparent outline-none focus:outline-none" placeholder="Bio"></textarea>
                </label>
            </div>
            <div className="items-center justify-between flex mt-3 gap-2">
                <button onClick={() => prev()} className="btn w-1/2 btn-outline btn-accent text-accent my-2 items-center"> <FcPrevious /> Previous</button>
                <button onClick={() => next()} className="btn w-1/2 btn-outline btn-accent text-accent my-2 items-center">Next <FcNext /></button>
            </div>
        </div>
    );
};
GeneralInfo.propTypes = {
    next: PropTypes.func,
    prev: PropTypes.func,
    gengeralInfo: PropTypes.object,
};
export default GeneralInfo;