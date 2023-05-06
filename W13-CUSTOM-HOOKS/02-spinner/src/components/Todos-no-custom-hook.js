import Spinner from "./Spinner";
import { useEffect, useState } from "react";
function Posts(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data = await response.json();
      console.log("🚀 ~ data:", data);

      setData([...data]);

      // setTimeout(() => setLoading(false), 500);
    };

    getData();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      {data.map((item, idx) => {
        return <p key={idx}>{item.title}</p>;
      })}
    </div>
  );
}

export default Posts;
