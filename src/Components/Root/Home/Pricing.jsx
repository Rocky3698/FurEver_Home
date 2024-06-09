import { IoIosArrowForward } from "react-icons/io";
const Pricing = () => {
    return (
        <div id="pricing" className="w-5/6 mx-auto pb-5 text-center">
            <h2 className="text-3xl text-black font-semibold">Choose a Plan</h2>
            <h2 className="font-mono text-sm italic mb-10">Select the best plan according to your needs</h2>
            <div className="flex flex-wrap gap-12 items-center justify-evenly ">
                <div className="text-center h-96 w-80 border p-3 space-y-2 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-dark">Basics</h1>
                    <div className="flex w-16 mx-auto">
                        <h1 className="text-2xl">$</h1>
                        <h1 className="text-6xl">0</h1>
                    </div>
                    <h1>monthly</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur nostrum illum voluptatibus nulla.</h2>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>

                    <button className="btn btn-neutral">PURCHASE</button>
                </div>
                <div className="text-center h-96 w-80 border p-3 space-y-2 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-dark">Premimum</h1>
                    <div className="flex w-16 mx-auto">
                        <h1 className="text-2xl">$</h1>
                        <h1 className="text-6xl">49</h1>
                    </div>
                    <h1>monthly</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur nostrum illum voluptatibus nulla.</h2>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>

                    <button className="btn btn-neutral">PURCHASE</button>
                </div>
                <div className="text-center h-96 w-80 border p-3 space-y-2 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-dark">Pro</h1>
                    <div className="flex w-16 mx-auto">
                        <h1 className="text-2xl">$</h1>
                        <h1 className="text-6xl">59</h1>
                    </div>
                    <h1>monthly</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur nostrum illum voluptatibus nulla.</h2>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>
                    <div className="flex items-center">
                        <IoIosArrowForward className="text-blue-400"></IoIosArrowForward>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                    </div>

                    <button className="btn btn-neutral">PURCHASE</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;