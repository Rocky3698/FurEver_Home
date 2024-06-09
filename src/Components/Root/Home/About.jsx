
import Icon_White from './Icon_White';
const About = () => {
    return (
        <div id="about" className="relative bg-cover bg-center h-[60vh] p-5 items-center justify-center flex" style={{ backgroundImage: "url('group.jpg')" }}>
            <div className="absolute inset-0 bg-slate-900 opacity-30"></div>
            <div className="relative w-3/6 text-center mx-auto text-white my-auto">
                <Icon_White></Icon_White>
                <h1 className="text-xl md:text-3xl md:font-bold text-pretty">Creating Happy Endings for Pets and Families</h1>
                <h2 className="md:text-xl md:font-semibold">Connecting Compassionate Individuals with Loving Animals</h2>
                <h3 className='hidden md:block'>
                    At our pet adoption community, we are dedicated to finding loving homes for animals in need. Our mission is to connect compassionate individuals with their perfect furry companions, ensuring a brighter future for both pets and their new families. With a wide variety of adoptable animals, our supportive team makes the adoption process easy and enjoyable. Join us in making a difference by choosing to adopt and give a deserving pet a forever home. Together, we create happy endings and lifelong friendships.
                </h3>
            </div>
        </div>

    );
};

export default About;