import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetBreeds } from "../../../API/Breeds";
import { getUser } from "../../../API/profile";
import { addPet } from "../../../API/Pets";
const Add_Pet = () => {
    const [breeds, setBreeds] = useState([]);
    const [user, setUser] = useState({});
    // const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await GetBreeds();
                setBreeds(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    useEffect(() => {
        const getUserdata = async () => {
            try {
                const data = await getUser();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        getUserdata();
    }, []);

    const [name, setName] = useState('');
    const [fee, setFee] = useState(0);
    const [age, setAge] = useState(0);
    const [breed, setBreed] = useState('');
    const [bio, setBio] = useState('');
    const [img, setImg] = useState('');

    const handleAdding = async () => {
        const user = localStorage.getItem('user_id');
        const data = {
            "name": name,
            "fee": fee,
            "age": age,
            "description": bio,
            "image_url": img,
            "breed": breed,
            "shelter": parseInt(user)
        };
        console.log(data);
        try {
            const response = await addPet(data);
            if (response.status === 201) {
                window.location.reload();
            }
        } catch (error) {
            console.error("Error during Adoption:", error);
        }
    };
    return (
        <dialog id="my_modal_2" className="modal -top-20">
            <div className="modal-box w-1/4 max-w-5xl ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img alt="profile" className="rounded-full h-10 object-cover border-accent border-solid border-2 w-10" src={user.dp} />
                        <div className='flex flex-col gap-0'>
                            <Link to="/" className='hover:text-blue-400 hover:underline underline-offset-4 block'>Rocky20809</Link>
                        </div>
                    </div>
                    <div className="me-5 font-bold ">Add Pet</div>
                </div>
                <hr className="border-t border-gray-200 my-4" />
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="petname" placeholder="Name of the pet" className="input input-bordered w-full " />
                <input value={img} onChange={(e) => setImg(e.target.value)} type="text" name="petfee" placeholder="Image Url" className="input input-bordered w-full my-2" />
                <div className="flex gap-2">
                    <input value={fee} onChange={(e) => setFee(e.target.value)} type="number" name="petfee" placeholder="Adoption Fee" className="input input-bordered w-full " />
                    <input value={age} onChange={(e) => setAge(e.target.value)} type="number" name="petfee" placeholder="Pet Age" className="input input-bordered w-full" />
                </div>


                <select value={breed} onChange={(e) => setBreed(e.target.value)} className="select select-bordered w-full  mt-3">
                    <option className="disabled">Breed Of the Pet</option>
                    {
                        breeds && breeds.map(breed => <option key={breed.id} value={breed.id} className='text-accent'>{breed.name}</option>)
                    }
                </select>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="textarea textarea-bordered w-full mt-2" placeholder="What's on your mind, Rocky?"></textarea>
                <button onClick={() => handleAdding()} className='btn mt-4 btn-outline w-full'>Add </button>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default Add_Pet;