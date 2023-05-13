import { useState } from "react";
import noimage from "./images/noimage.png";
import axios from "axios";

function App({ children }) {
  const [image, setImage] = useState({
    url: noimage,
    file: null,
  });

  const handleImageChange = (e) => {
    console.log("the file is", e.currentTarget.files[0]);

    if (!e.currentTarget.files[0]) return;

    if (e.currentTarget.files[0].size > 1000000) {
      alert("This file is bigger than 10kB");
      return;
    }
    setImage({
      url: URL.createObjectURL(e.currentTarget.files[0]),
      file: e.currentTarget.files[0],
    });
  };

  const handleSave = async () => {
    const formdata = new FormData();

    formdata.set("username", "alkis");
    formdata.set("pass", "123");
    formdata.set("age", "1222");
    formdata.set("image", image.file, "filename");

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      formdata,
      {
        Headers: {
          "Content-type": "multipart/form-data; charset=UTF-8",
        },
      }
    );
    console.log("🚀 ~ response:", response);
  };

  return (
    <div>
      <h1>User Profile</h1>
      <label className="cursor-pointer">
        Select your Profile image
        <input
          id="file"
          type="file"
          className="hidden"
          onChange={handleImageChange}
          accept="image/png, image/jpeg"
        />
      </label>
      <div>
        <img
          className="w-[300px] h-[300px] object-cover"
          src={image.url || noimage}
        />
      </div>
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
}

export default App;
