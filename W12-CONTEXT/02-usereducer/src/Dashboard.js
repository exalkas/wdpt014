import Navigation from "./components/Navigation";
import { useNavigate } from "react-router-dom";

import React from 'react';

function Dashboard(props) {

    const navigate = useNavigate()


    const handleBack = () => navigate(-1)

    return (
        <div>
            Hello from dashboard
            <button onClick={handleBack}>back</button>
        </div>
    );
}

export default Dashboard;