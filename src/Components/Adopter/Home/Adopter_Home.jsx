import '../adopter.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../../Root/Navbar';
import TitleBar from '../TitleBar';
const Adopter_Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex w-5/6 mx-auto">
                <div className="w-4/5 mx-auto">
                    <div>
                        <TitleBar></TitleBar>
                        <Outlet>
                        </Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adopter_Home;