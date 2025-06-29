import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { saveJob } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";

const JobCard = ({
  job,
  isMyJob = false,
  savedInit = false,
  onJobSaved = () => {},
}) => {
  const [saved, setSaved] = useState(savedInit);
  const {
    fn: fnSavedJobs,
    data: savedJobs,
    loading: loadingSavedJobs,
  } = useFetch(saveJob);

  const { user } = useUser();

  const handleSaveJob = async () => {
    await fnSavedJobs({
      user_id: user.id,
      job_id: job.id,
    });
    onJobSaved();
  };

  useEffect(() => {
    if (savedJobs !== undefined) setSaved(savedJobs?.length > 0);
  }, [savedJobs]);

  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {job.title}

          {isMyJob && (
            <Trash2Icon
              size={18}
              fill="red"
              className="text-red-300 cursor-pointer"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        <div className="flex justify-between">
          {job.company && (
            <img
              src={job.company.logo_url}
              alt="company logo"
              className="h-6"
            />
          )}
          <div
            className="flex items-center gap-2 
          "
          >
            <MapPinIcon size={15} />
            {job.location}
          </div>
        </div>
        <hr />
        {job.description}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        {!isMyJob && (
          <Button
            className="w-15"
            variant="outline"
            onClick={handleSaveJob}
            disabled={loadingSavedJobs}
          >
            {saved ? (
              <Heart
                className="cursor-pointer"
                size={15}
                stroke="red"
                fill="red"
              />
            ) : (
              <Heart className="cursor-pointer" size={15} />
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
