import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;