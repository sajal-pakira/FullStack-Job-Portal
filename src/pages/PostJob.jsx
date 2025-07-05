import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  company_id: z.string().min(1, { message: "Select or Add a new company" }),
  requirements: z.string().min(1, { message: "requirements are required" }),
});

const PostJob = () => {
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
    </div>
  );
};

export default PostJob;
