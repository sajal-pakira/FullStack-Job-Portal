import { getApplications } from "@/api/apiApplications";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";
import ApplicationCard from "./ApplicationCard";

const CreatedApplications = () => {
  const { user, isLoaded } = useUser();
  const {
    fn: fnApplications,
    data: applications,
    loading: loadingApplications,
  } = useFetch(getApplications, {
    user_id: user?.id,
  });
  console.log("Applications:- ", applications);

  useEffect(() => {
    if (isLoaded) fnApplications();
  }, [isLoaded]);

  if (loadingApplications || !isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  if (!applications || !Array.isArray(applications)) {
    return (
      <div className="text-center text-red-500">No applications found.</div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {applications.map((application) => {
        return (
          <ApplicationCard
            key={application.id}
            application={application}
            isCandidate={true}
          />
        );
      })}
    </div>
  );
};

export default CreatedApplications;
