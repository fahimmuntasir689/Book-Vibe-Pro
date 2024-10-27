import { Outlet } from "react-router-dom";
import Header from "../Header/Header";





const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-sans">

            <Header></Header>
            <Outlet></Outlet>
            

        </div>
    );
};

export default Root;