import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const CreatedJobs = () => {
  const { user, isLoaded } = useUser();

  const {
    fn: fnCreatedJobs,
    data: createdJobs,
    loading: loadingCreatedJobs,
  } = useFetch(getMyJobs, {
    recruiter_id: user.id,
  });

  useEffect(() => {
    if (isLoaded) fnCreatedJobs();
  }, [isLoaded]);

  return <div></div>;
};

export default CreatedJobs;
