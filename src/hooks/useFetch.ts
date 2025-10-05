import { useEffect, useState } from "react";

const useFetch = (url: RequestInfo, options?: RequestInit) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);
  const fetching = async () => {
    try {
      const req = await fetch(url, options);
      const res = await req.json();
      setLoading(true);
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return { data, loading, error };
};

export default useFetch;
