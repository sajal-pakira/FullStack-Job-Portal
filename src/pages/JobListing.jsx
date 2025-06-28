import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import React from "react";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {});

  return <div>JobListing</div>;
};

export default JobListing;
