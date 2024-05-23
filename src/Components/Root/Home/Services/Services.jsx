import Service from "./Service";

const Services = () => {
    return (
        <div style={{ backgroundImage: "url('/sectionBG.png')" }} className="text-center bg-right-bottom bg-no-repeat p-20 pt-5">
            <h2 className="font-mono text-sm italic">Because We Really Care About Your Pets</h2>
            <h1 className="text-2xl font-bold ">Services of FurEver Home</h1>
            <div className="flex w-5/6 mx-auto flex-wrap  gap-10 mt-8">
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;