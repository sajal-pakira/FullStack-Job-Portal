import { getCompanies } from "@/api/apiCompanies";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { State } from "country-state-city";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  company_id: z.string().min(1, { message: "Select or Add a new company" }),
  requirements: z.string().min(1, { message: "requirements are required" }),
});

const PostJob = () => {
  const { isLoaded, user } = useUser();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      location: "",
      company_id: "",
      requirements: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    fn: fnCompanies,
    data: companies,
    loading: loadingCompanies,
  } = useFetch(getCompanies);

  useEffect(() => {
    if (isLoaded) fnCompanies();
  }, [isLoaded]);

  if (!isLoaded || loadingCompanies) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  if (user?.unsafeMetadata?.role !== "recruiter") {
    return <Navigate to="/jobs" />;
  }

  return (
    <div>
      <h1 className="gradient-title font font-extrabold text-5xl sm:text-7xl text text-center pb-8">
        Post a Job
      </h1>
      <form>
        <Input placeholder="Job Title" {...register("title")} />
        {errors?.title && (
          <p className="text-red-500">{errors?.title?.message}</p>
        )}

        <Textarea placeholder="Job Description" {...register("description")} />
        {errors?.description && (
          <p className="text-red-500">{errors?.description?.message}</p>
        )}
      </form>

      <Select
      // value={location}
      // onValueChange={(value) => setLocation(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {State.getStatesOfCountry("IN").map((state) => {
              return (
                <SelectItem key={state.isoCode} value={state.name}>
                  {state.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
      // value={company_id}
      // onValueChange={(value) => setCompany_id(value)}
      // disabled={loadingCompanies}
      >
        <SelectTrigger>
          <SelectValue
            placeholder={
              loadingCompanies ? "Loading companies..." : "Filter by Company"
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {companies?.map((company) => {
              return (
                <SelectItem key={company.id} value={company.id}>
                  {company.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PostJob;
