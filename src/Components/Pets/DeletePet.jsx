
const DeletePet = () => {
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Confirm deletion</h3>
                <p className="py-4">Are you sure, you wanna delete this pet?</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline mx-3">Close</button>
                        <button className='btn btn-error btn-outline' >Delete</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default DeletePet;