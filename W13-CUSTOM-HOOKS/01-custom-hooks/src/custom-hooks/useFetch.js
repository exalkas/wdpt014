import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);

      const data = await response.json();
      console.log("🚀 ~ data:", data);

      setData([...data]);
    };

    getData();
  }, []);

  return data;
}

export default useFetch;
