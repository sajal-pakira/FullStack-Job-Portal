import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const JobListing = () => {
  const { isLoaded } = useUser();

  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    fn: fnJobs,
    data: jobs,
    loading: loadingJobs,
    error,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded, location, company_id, searchQuery]);

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  console.log("✅ Jobs fetched from Supabase:", jobs);
  console.log("📦 Current filter options:", {
    location,
    company_id,
    searchQuery,
  });

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Jobs
      </h1>

      {loadingJobs && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
      )}

      {loadingJobs === false && (
        <div>
          {jobs?.length ? (
            jobs.map((job) => (
              <div key={job.id} className="mb-4 p-4 rounded-md shadow">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-md text-gray-600">📍 {job.location}</p>
              </div>
            ))
          ) : (
            <div>No jobs found😓</div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobListing;
