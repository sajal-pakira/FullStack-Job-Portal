import { getSavedJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";

const SavedJobs = () => {
  const {
    fn: fnSavedJobs,
    data: dataSavedJobs,
    loading: loadingSavedJobs,
  } = useFetch(getSavedJobs);

  return <div>SavedJobs</div>;
};

export default SavedJobs;
