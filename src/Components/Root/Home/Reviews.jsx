import Icon from './Icon';
const Reviews = () => {
    return (
        <div id="review" className=" mt-10 bg-slate-100 p-5 pb-10">
            <Icon></Icon>
            <div className="w-5/6 mx-auto text-center">
            <h1 className="text-3xl text-black font-semibold mt-7">What Adopters says about ForEverHome</h1>
            <h2 className='font-mono text-sm italic mb-7'>we believe every animal deserves a loving home</h2>
            <div className="flex flex-wrap gap-5 justify-evenly items-center">
                <div className="w-80 text-center border border-black rounded-lg p-3">
                    <div className="avatar flex-col justify-center items-center">
                        <div className="w-20 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <h2 className="font-bold text-xl">Selina Sultana</h2>
                    </div>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, deserunt.</h2>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
                <div className="w-80 text-center border border-black rounded-lg p-3">
                    <div className="avatar flex-col justify-center items-center">
                        <div className="w-20 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <h2 className="font-bold text-xl">Selina Sultana</h2>
                    </div>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, deserunt.</h2>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
                <div className="w-80 text-center border border-black rounded-lg p-3">
                    <div className="avatar flex-col justify-center items-center">
                        <div className="w-20 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <h2 className="font-bold text-xl">Selina Sultana</h2>
                    </div>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, deserunt.</h2>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
                <div className="w-80 text-center border border-black rounded-lg p-3">
                    <div className="avatar flex-col justify-center items-center">
                        <div className="w-20 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <h2 className="font-bold text-xl">Selina Sultana</h2>
                    </div>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, deserunt.</h2>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Reviews;