
import Navbar from '../../Root/Navbar';
import { Outlet } from 'react-router-dom';
import Actions from './Actions';

const Shelter_Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Actions></Actions>
            <div className="flex w-5/6 mx-auto">
                <div className="w-4/5 mx-auto">
                    <div>
                        <Outlet>
                        </Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shelter_Home;