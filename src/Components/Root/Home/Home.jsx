import Icon from '../Icon';
import Services from './Services/Services';
import Pricing from './Pricing';
import Reviews from './Reviews';
import Team from './Team';
import Contact from './Contact';
import About from './About';
const Home = () => {
    return (
        <div className='mt-10'>
            <Icon></Icon>
            <Services></Services>
            <Icon></Icon>
            <Pricing></Pricing>
            <Reviews></Reviews>
            <Team></Team>
            <Contact></Contact>
            <About></About>
        </div>
    );
};

export default Home;