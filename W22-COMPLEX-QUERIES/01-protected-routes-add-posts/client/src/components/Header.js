import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div
      className="bg-teal-500 text-white 
        w-full h-[100px] flex justify-center 
        items-center gap-[20px] text-[2rem]  cursor-pointer"
    >
      <Link to="/">
        <FaHome />
      </Link>
    </div>
  );
}

export default Header;
