import { getApplications } from "@/api/apiApplications";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React from "react";

const CreatedApplications = () => {
  const { user } = useUser();
  const {
    fn: fnApplications,
    data: dataApplications,
    loading: loadingApplications,
  } = useFetch(getApplications, {
    user_id: user.id,
  });

  return <div></div>;
};

export default CreatedApplications;
