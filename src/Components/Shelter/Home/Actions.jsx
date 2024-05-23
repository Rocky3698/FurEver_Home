
import { MdOutlinePets } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Add_Pet from './Add_Pet';
const Actions = () => {
    return (
        <div>
            <div className="flex items-center justify-between w-2/5 mx-auto">
                <div>
                    Filter By
                </div>
                <button className="btn"> Adopted</button>
                <button className="btn"> Available</button>
                <button className="btn"> Wishlisted</button>
                <div className="relative group">
                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-outline"><IoMdAdd className="text-xl"></IoMdAdd>Add New Pet</button>
                    <MdOutlinePets className="absolute -bottom-2 text-slate-300 text-3xl group-hover:text-orange-300"></MdOutlinePets>
                </div>
                <Add_Pet></Add_Pet>
            </div>
        </div>
    );
};

export default Actions;