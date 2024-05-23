import PropTypes from 'prop-types';

const ProfileEdit = ({ user }) => {
    return (
        <div className=" mx-auto p-6 ">
            <form>
                <div className="mb-4">
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        placeholder="Username"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        disabled
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4 flex gap-2">
                    <div >
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={user.first_name}
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div >
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={user.last_name}
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="mb-4 flex gap-2">
                    <div className='w-56'>
                        <select
                            name="gender"
                            value={user.gender}
                            className="select select-bordered w-full"
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={user.phone}
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={user.address.city}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="streetAddress"
                        placeholder="Street Address"
                        value={user.address.street_address}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4 flex gap-2 ">
                    <div>
                        <input
                            type="text"
                            name="streetNumber"
                            placeholder="Street Number"
                            value={user.address.street_number}
                            className="input input-bordered "
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={user.address.postal_code}
                            className="input input-bordered  "
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={user.address.country}
                        className="input input-bordered w-full"
                    />
                </div>

            </form>
        </div>
    );
};
ProfileEdit.propTypes = {
    user: PropTypes.object,
};

export default ProfileEdit;
