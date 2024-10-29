import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="flex flex-col-reverse bg-[#1313130D] rounded-md md:flex-row gap-12 items-center p-8">
                <div>
                    <h1 className="text-[#131313] text-4xl font-semibold md:text-6xl">Books to freshen up <br /> your bookshelf</h1>
                    <Link to='/listedBooks'> <button className="btn bg-[#23BE0A] text-[#FFFFFF] mt-6">View The List</button></Link>
                </div>

                <img className="w-3/4 rounded-xl md:w-1/2" src="https://i.ibb.co.com/P49X4yS/Header-Pic.jpg" alt="Banner Image" />


            </div>
        </div>
    );
};

export default Banner;