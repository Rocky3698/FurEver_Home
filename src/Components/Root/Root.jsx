import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Hero_Section from './Home/Hero_Section';
const Root = () => {
    return (
        <div >
            <div style={{ backgroundImage: "url('/background_home.png')" }} className='w-full h-[80vh] bg-cover bg-center'>
                <Navbar></Navbar>
                <Hero_Section></Hero_Section>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;