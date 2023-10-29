import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("error here");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          }
          setError("the have error ");
          setIsPending(false);
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { info: data, isPending, error };
};
export default useFetch;
