import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { session } = useSession();

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const supabseAccessToken = await session?.getToken({
        template: "GetHirrd",
      });

      const response = await cb(supabseAccessToken, options, ...args);
      setData(response || []);
      // setError(null);
    } catch (err) {
      setError(err);
      setData([]); // Reset to empty array on error
    } finally {
      setLoading(false);
    }
  };

  return { fn, data, loading, error };
};

export default useFetch;
