import { useContext } from 'react';
import './theme.css'
import { ThemeContext } from '../contexts/ThemeContext';

function Theme(props) {

   const {theme, dispatch} =  useContext(ThemeContext)
   console.log("🚀 ~ theme:", theme)

    return (
        
        <div className={theme}>
            <button onClick={() => dispatch({type: 'TOGGLE'})}>Switch</button>
        </div>
    );
}

export default Theme;