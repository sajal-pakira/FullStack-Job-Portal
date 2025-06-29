import { useUser } from "@clerk/clerk-react";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MapPinIcon, Trash2Icon } from "lucide-react";

const JobCard = ({
  job,
  isMyJob = false,
  savedInit = false,
  onJobSaved = () => {},
}) => {
  const { user } = useUser();

  return (
    <Card className="mb-3">
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
    </Card>
  );
};

export default JobCard;
