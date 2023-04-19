import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function MainLayout(props) {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
}

export default MainLayout;