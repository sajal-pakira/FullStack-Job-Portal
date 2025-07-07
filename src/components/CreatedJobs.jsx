import { getMyJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import JobCard from "./JobCard";

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

  if (loadingCreatedJobs || !isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      {loadingCreatedJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {createdJobs?.length ? (
            createdJobs.map((job) => {
              return (
                <JobCard
                  key={job.id}
                  job={job}
                  savedInit={job?.saved?.length > 0}
                  isMyJob={true}
                />
              );
            })
          ) : (
            <div>No Jobs Found 😢</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatedJobs;
