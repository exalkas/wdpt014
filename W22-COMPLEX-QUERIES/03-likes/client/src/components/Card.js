import { GoKebabHorizontal } from "react-icons/go";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "./Context";
import Spinner from "./Spinner";

function Card({ item }) {
  const { text, owner, _id, likes } = item;

  const { state, dispatch } = useContext(AppContext);

  const [showSpinner, setShowSpinner] = useState(false);

  const handleLike = async () => {
    setShowSpinner(true);
    const response = await axios.post("/posts/like", { post: _id });
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      dispatch({
        type: "LIKE",
        payload: response.data.post,
      });
    }

    setShowSpinner(false);
  };

  console.log("🚀 ~ item:", item);
  return (
    <div className="flex flex-col gap-[20px] border-2 border-slate-500 rounded-md w-[400px]  p-[20px]">
      {/* Header */}
      <div className="flex items-center gap-[10px] w-full justify-end">
        <div className="grow flex justify-end">
          <button className="cursor-pointer">
            <GoKebabHorizontal />
          </button>
        </div>
      </div>
      <hr />
      {/* Text */}
      <p>{text}</p>

      <hr />
      {/* Likes and comments area */}
      <div className="flex justify-around items-center">
        {likes.find((user) => user._id === state.user._id) ? (
          <div className="flex gap-[20px]">
            {showSpinner ? (
              <Spinner />
            ) : (
              <AiFillHeart
                className="text-red-500 text-[2rem] cursor-pointer"
                onClick={handleLike}
              />
            )}
            <span>Likes</span>
          </div>
        ) : (
          <div className="flex gap-[20px]">
            {showSpinner ? (
              <Spinner />
            ) : (
              <AiOutlineHeart
                className="text-red-500 text-[2rem] cursor-pointer"
                onClick={handleLike}
              />
            )}
            <span>Likes</span>
          </div>
        )}

        <FaRegComments className="text-slate-500 hover:text-red-500 text-[2rem] cursor-pointer" />
      </div>
    </div>
  );
}

export default Card;
