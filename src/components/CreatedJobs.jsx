import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";

const CreatedJobs = () => {
  const { user } = useUser();

  const {
    fn: fnCreatedJobs,
    data: createdJobs,
    loading: loadingCreatedJobs,
  } = useFetch(getMyJobs, {
    recruiter_id: user.id,
  });
  return <div></div>;
};

export default CreatedJobs;
