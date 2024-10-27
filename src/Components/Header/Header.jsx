import { Link } from "react-router-dom";


const Header = () => {
    const navOptions = <>

        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/listedBooks'><li><a>Listed Books</a></li></Link>
        <Link to='/pagesToRead'><li><a>Pages to Read</a></li></Link>
        <Link to='/articles'><li><a>Articles</a></li></Link>
        <Link to='/contact'><li><a>Contact</a></li></Link>

    </>
    return (
        <>
            <div className="">
                <div className="navbar bg-base-100 flex flex-col md:flex-row">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <div className="text-[#131313CC]">
                                    {navOptions}
                                </div>
                            </ul>
                        </div>
                        <a className="btn btn-ghost font-bold text-2xl">Book Vibe</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn btn-success mr-3">Sign In</a>
                        <a className="btn btn-info">Sign Up</a>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;