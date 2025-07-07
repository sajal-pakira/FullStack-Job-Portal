import { getSavedJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const SavedJobs = () => {
  const { isLoaded } = useUser();

  const {
    fn: fnSavedJobs,
    data: dataSavedJobs,
    loading: loadingSavedJobs,
  } = useFetch(getSavedJobs);

  if (isLoaded) {
    return <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />;
  }

  return <div>SavedJobs</div>;
};

export default SavedJobs;
