import Icon from "../Root/Icon";
const TitleBar = () => {
    return (
        <div className="text-center flex justify-center gap-28 items-center mb-5">
            <Icon></Icon>
            <div>
                <h2 className="text-2xl font-bold ">Meet Our Adorable Pets</h2>
                <h2 className="font-mono text-sm italic">Find Your New Best Friend Today</h2>
            </div>
            <Icon></Icon>
        </div>
    );
};

export default TitleBar;