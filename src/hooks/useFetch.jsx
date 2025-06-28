import { useSession } from "@clerk/clerk-react";
import  { useState } from "react";

const useFetch =  (cb, options = {}) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { session } = useSession();

  const fn = async (...args) => {
    setLoading(true);
    setError(null);
  };
try {
     const supabseAccessToken = await session.getToken({
          template: "GetHirred",
        });

    const response = await cb(supabseAccessToken,options,args)
    setData(response)
    setError(null)
} catch (err) {
    setError(err)
} finally{
    setLoading(false)
}
  return {fn,data,loading,error}
};


export default useFetch