
import './glass.css'
import { useState } from 'react';
import Login from './Login/Login';
import LoginText from './Login/LoginText';
import Registration from './SignUp/Registration';
import RegText from './SignUp/RegText';

const Auth = () => {
    const [status, setstatus] = useState(true)
    return (
        <div style={{ backgroundImage: "url('authbg.jpg')" }} className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className='Glass w-5/6 h-5/6 rounded-xl grid grid-cols-2'>
                <div className='col-span-1 flex flex-col justify-center items-center -mt-16'>
                    {
                        status ? <LoginText></LoginText> : <RegText></RegText>
                    }
                </div>
                <div className='col-span-1'>
                    {
                        status ? <Login reg={setstatus}></Login> : <Registration reg={setstatus}></Registration>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Auth;