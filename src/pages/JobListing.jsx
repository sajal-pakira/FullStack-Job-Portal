import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";

const JobListing = () => {
  const { isLoaded } = useUser();

  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });

  console.log(dataJobs);
  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded]);

  return <div>JobListing</div>;
};

export default JobListing;
