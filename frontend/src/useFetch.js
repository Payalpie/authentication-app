import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options = {}) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setLoading(false);
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { fetchData, loading, error };
};

export default useFetch;
