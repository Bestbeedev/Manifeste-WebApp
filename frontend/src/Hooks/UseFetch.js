import { useEffect, useState } from "react";

const UseFetch=(url)=>{
const [data, setData] = useState(null);
const [loadMsg, setLoadMsg] = useState(true);


useEffect(() => {
    const LoadingTime = setTimeout(() => {
      setLoadMsg(false);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not get the data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
    return () => {
      clearTimeout(LoadingTime);
    };
  }, []);
  return {data,loadMsg}
}

  export default UseFetch