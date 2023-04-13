import {AiFillHome} from 'react-icons/ai'

function Header(props) {

    const handleClick = () => alert('Icon clicked')

    return (
        <header>
            <AiFillHome className='icon' onClick={handleClick}/>
        </header>
    );
}

export default Header;