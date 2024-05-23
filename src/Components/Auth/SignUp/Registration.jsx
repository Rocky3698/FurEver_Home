import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon_White from '../../Root/Icon_White';
import AuthInfo from './AuthInfo';
import { useState } from "react";
import GeneralInfo from './GeneralInfo';
import AddressInfo from './AddressInfo';
import { registerUser } from "../../../API/Registation";
import { login } from "../../../API/Login";
const Registration = ({ reg }) => {
    const [authState, setAuthstate] = useState(true);
    const [generalState, setGeneralstate] = useState(false);
    const [addressState, setAddressState] = useState(true);
    const [first_name, setFrist_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const [gender, setgender] = useState('');
    const [dp, setdp] = useState('');
    const [bio, setbio] = useState('');
    const [role, setrole] = useState('');
    const [city, setcity] = useState('');
    const [country, setcountry] = useState();
    const [streetAddress, setStreetAddress] = useState('');
    const [streetNumber, setSreetnumber] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const navigate =useNavigate();
    const gengeralInfo = {
        'phone': phone,
        'gender': gender,
        'dp': dp,
        'bio': bio,
        'role': role,
        'setphone': setphone,
        'setgender': setgender,
        'setdp': setdp,
        'setbio': setbio,
        'setrole': setrole
    }
    const addressInfo = {
        'city': city,
        'country': country,
        'streetAddress': streetAddress,
        'streetNumber': streetNumber,
        'postalCode': postalCode,
        'setcity': setcity,
        'setcountry': setcountry,
        'setStreetAddress': setStreetAddress,
        'setSreetnumber': setSreetnumber,
        'setPostalCode': setPostalCode
    }
    const authInfo = {
        'fname': first_name,
        'lname': last_name,
        'uname': username,
        'pass': password,
        'email': email,
        'setemail': setemail,
        'setFname': setFrist_name,
        'setLast_name': setLast_name,
        'setusername': setusername,
        'setpassword': setpassword
    };

    const regData = {
        "username": username,
        "email": email,
        "password": password,
        "first_name": first_name,
        "last_name": last_name,
        "gender": gender,
        "phone": phone,
        "dp": dp,
        "bio": bio,
        "role": role,
        "address": {
            "city": city,
            "street_address": streetAddress,
            "street_number": streetNumber,
            "postal_code": postalCode,
            "country": country
        }
    };
    const Loginuser = async () => {
        const credentials = {
            email,
            password
        }
        try {
            const data = await login({ credentials });
            if (data == "adopter") {
                navigate('/adopter/profile');
            } else if (data == 'shelter') {
                navigate('/shelter/profile');
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    const toggleAuthInfoandGeneral = () => {
        setAuthstate(!authState);
        setGeneralstate(!generalState);
    };
    const toggleGeneralandAddress = () => {
        setGeneralstate(!generalState);
        setAddressState(!addressState);
    };
    const RegisterUser = async () => {
        try {
            console.log(regData);
            const response = await registerUser(regData);
            if (response.status === 201) {
                Loginuser()
            }
        } catch (error) {
            console.error("Error during Adoption:", error);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center border-s border-slate-500  h-full border-spacing-5">
            <div className='text-white border-2 border-slate-500 p-7  rounded-xl '>
                <div className='text-center text-white pb-2'>
                    <div className='text-3xl my-2'>SignUp</div>
                    <div>Wellcome! Register to Make a Difference in Pet Adoption</div>
                </div>

                <Icon_White></Icon_White>
                <div>
                    {
                        authState ? <AuthInfo next={toggleAuthInfoandGeneral} authInfo={authInfo} ></AuthInfo> :
                            (generalState ? <GeneralInfo prev={toggleAuthInfoandGeneral} next={toggleGeneralandAddress} gengeralInfo={gengeralInfo}></GeneralInfo> :
                                <AddressInfo prev={toggleGeneralandAddress} addressInfo={addressInfo} RegisterUser={RegisterUser}></AddressInfo>)
                    }
                </div>
                <div>
                    {
                        authState && <div>
                            <hr className="border-t border-gray-500 my-3" />
                            <div className='text-center hover:text-accent'><Link onClick={() => reg(true)}>Already have an account ?</Link></div>
                            <button className="flex items-center gap-2 text-lg btn mt-4 btn-block"> <FcGoogle className="text-2xl"></FcGoogle> Sign in with Googgle</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
Registration.propTypes = {
    reg: PropTypes.func,
};
export default Registration;