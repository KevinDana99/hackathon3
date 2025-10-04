import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | unknown>(null);
  const fetching = () => {
    try {
      setLoading(true);
    } catch (err) {
      setError(err);
    } finally {
      setData();
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useFetch;
