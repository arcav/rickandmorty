import React from "react";
import { getData } from "../utils/getData";

const useFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return <div>useFetch</div>;
};

export default useFetch;
