import {NavLink } from "react-router-dom";

function Nagigation(props) {
    return (
        <nav>
            <NavLink 
                to='/'
                style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}    
            >Home</NavLink>
            <NavLink to='/contact' style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}>Contact</NavLink>
            <NavLink to='/unkonwn' style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                    };
                  }}>404 </NavLink>
        </nav>
    );
}

export default Nagigation;