import useFetch from "../custom-hooks/useFetch";

function Posts(props) {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data.map((item, idx) => {
        return <p key={idx}>{item.title}</p>;
      })}
    </div>
  );
}

export default Posts;
