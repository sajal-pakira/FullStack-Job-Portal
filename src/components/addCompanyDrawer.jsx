import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Company name is required" }),
  resume: z
    .any()
    .refine(
      (file) =>
        file[0] &&
        (file[0].type === "application/pdf" ||
          file[0].type === "application/msword"),
      { message: "Only PDF or Word Documents are allowed" }
    ),
});

const AddCompanyDrawer = (fetchCompanies) => {
  return <div>AddCompanyDrawer</div>;
};

export default AddCompanyDrawer;
