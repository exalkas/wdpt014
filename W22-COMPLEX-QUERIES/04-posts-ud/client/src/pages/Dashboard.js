import { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/Context";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "../components/Modal";
import axios from "axios";
import Card from "../components/Card";

function Dashboard(props) {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/posts/list");
      console.log("🚀 ~ response:", response);

      if (response.data.success) {
        dispatch({
          type: "LIST_POSTS",
          payload: response.data.posts,
        });
      }
    }

    getData();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [text, setText] = useState("");

  const handleSubmit = async () => {
    // if (!text) return;
    console.log("🚀 ~ text:", text);

    const response = await axios.post("/posts/add", { text });
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      setShowModal(false);
      dispatch({
        type: "ADD_POST",
        payload: response.data.post,
      });
    }
  };

  return (
    <div
      className="flex items-center 
w-full
gap-[20px] min-h-[100vh] p-[40px] 
flex-col"
    >
      <FaPlusCircle
        className="text-[2rem] cursor-pointer hover:text-slate-900]"
        onClick={() => setShowModal(true)}
      />

      {state.posts.length > 0
        ? state.posts.map((item) => <Card key={item._id} item={item} />)
        : "There are no posts available"}

      {showModal && (
        <Modal
          title="Add new Post"
          close={() => setShowModal(false)}
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
        />
      )}
    </div>
  );
}

export default Dashboard;
