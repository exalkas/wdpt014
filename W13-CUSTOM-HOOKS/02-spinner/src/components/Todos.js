import useFetch from "../custom-hooks/useFetch";
import Spinner from "./Spinner";

function Posts(props) {
  const { loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) return <Spinner />;

  return (
    <div>
      {data.map((item, idx) => {
        return <p key={idx}>{item.title}</p>;
      })}
    </div>
  );
}

export default Posts;
