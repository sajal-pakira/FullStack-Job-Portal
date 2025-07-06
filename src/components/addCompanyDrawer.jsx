import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Company name is required" }),
  logo: z
    .any()
    .refine(
      (file) =>
        file[0] &&
        (file[0].type === "image/png" || file[0].type === "image/jpeg"),
      { message: "Only Images(png or jpeg) are allowed" }
    ),
});

const AddCompanyDrawer = (fetchCompanies) => {
  return <div>AddCompanyDrawer</div>;
};

export default AddCompanyDrawer;
