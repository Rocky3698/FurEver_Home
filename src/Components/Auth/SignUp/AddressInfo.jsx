import { FcNext, FcPrevious } from "react-icons/fc";
import PropTypes from 'prop-types';
const AddressInfo = ({ prev, addressInfo,RegisterUser }) => {


    return (
        <div >
            <div className="text-center font-mono text-sm italic text-accent">Address Info</div>
            <div>
                <label className=" flex items-center gap-2 my-2 border-b border-black w-96">
                    <input value={addressInfo.country} onChange={(e)=>addressInfo.setcountry(e.target.value)} type="text" placeholder="Country" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
                </label>
                <label className=" flex items-center gap-2 my-2 border-b border-black w-96">

                    <input value={addressInfo.city} onChange={(e)=>addressInfo.setcity(e.target.value)} type="text" placeholder="City" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
                </label>
                <label className=" flex items-center gap-2 my-2 border-b border-black w-96">

                    <input value={addressInfo.streetAddress} onChange={(e)=>addressInfo.setStreetAddress(e.target.value)} type="text" placeholder="Street address" className="w-full py-2  bg-transparent outline-none focus:outline-none" />
                </label>
                <label className="flex items-center gap-2 my-2 border-b border-black w-96">

                    <input value={addressInfo.streetNumber} onChange={(e)=>addressInfo.setSreetnumber(e.target.value)} type="text" className="grow w-full py-2 bg-transparent outline-none focus:outline-none" placeholder="Street number" />
                </label>
                <label className="flex items-center gap-2 my-2 border-b border-black w-96">

                    <input value={addressInfo.postalCode} onChange={(e)=>addressInfo.setPostalCode(e.target.value)} type="text" className="grow w-full py-2 bg-transparent outline-none focus:outline-none" placeholder="Post code" />
                </label>
            </div>
            <div className="items-center justify-between flex mt-3 gap-2">
                <button onClick={() => prev()} className="btn w-1/2 btn-outline btn-accent text-accent my-2 items-center"> <FcPrevious /> Previous</button>
                <button onClick={()=>RegisterUser()} className="btn w-1/2 btn-outline btn-accent text-accent my-2 items-center">Next <FcNext /></button>
            </div>
        </div>
    );
};
AddressInfo.propTypes = {
    prev: PropTypes.func,
    RegisterUser: PropTypes.func,
    addressInfo: PropTypes.object,
};
export default AddressInfo;